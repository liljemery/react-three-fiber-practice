import { OrbitControls, useGLTF, useTexture, MeshPortalMaterial, RoundedBox, Text, CameraControls } from "@react-three/drei";
import * as THREE from 'three';
import { useState } from 'react';
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useRef , useEffect} from "react";
const Scene = (props) => {
    const cameraRef = useRef()
    const meshPortalMaterialRef = useRef();
    const [active, setActive] = useState(false);
    const model = useGLTF('./model/1.glb');
    const textture = useTexture('./texture/1.png');
    
    useFrame((_,delta)=>{
        easing.damp(meshPortalMaterialRef.current,'blend', active? 1 : 0, 0.1, delta )
    })
    useEffect(() => {
        if(active){
            cameraRef.current.setLookAt(0,0,3,0,0,0,true)
        }else{
            cameraRef.current.setLookAt(0,0,5,0,0,0,true)
        }
    }, [active])
    

    return (
        <> 
        <CameraControls ref={cameraRef} /> 
        <RoundedBox 
            args={[3,4,0.1]} 
            radius={0.2}
            onDoubleClick={()=>setActive(!active)}
        >
            <Text 
                font="./fonts/Roboto-Bold.ttf" 
                position={[-0.7, 1.6, 0.1]} 
                fontSize={0.6} 
                fontWeight={3}
                color={'white'}
                >
                Eggs
                <meshBasicMaterial/>
            </Text>
            <planeGeometry args={[3,4]}/>
            <MeshPortalMaterial ref={meshPortalMaterialRef}>
                <primitive object={model.scene} scale={0.6} position-y={0.6} />
                <mesh>
                    <sphereGeometry args={[3,64,64]}/>
                    <meshBasicMaterial map={textture} side={THREE.BackSide}/> 
                </mesh>                
            </MeshPortalMaterial>
        </RoundedBox>
        </>
    )
}

export default Scene