import { OrbitControls, MeshReflectorMaterial, Environment, MeshWobbleMaterial, MeshDistortMaterial, GradientTexture, useCursor } from "@react-three/drei";
import {useState, useRef, useEffect} from 'react';
import * as THREE from 'three';
import {useFrame} from '@react-three/fiber'

const Scene = (props) => {
    const [hover, setHover] = useState(false);
    const planeRef = useRef()
    useCursor(hover);
    const {lerp } = THREE.MathUtils;

    useFrame(()=>{
        planeRef.current.material.distort = lerp(
            planeRef.current.material.distort, 
            hover? 0.4 : 0 ,
            hover? 0.05 : 0.01
        );
    });
    
    return (
        <>
            <OrbitControls/>
            <ambientLight/>
            
            {/* <Environment background ground files={'./envMap/1.hdr'} /> */}

            {/* <mesh>
                <boxGeometry args={[1,1,1,65,32,32]} />
                <MeshWobbleMaterial color='#F76E53' factor={3} speed={0.4}/>
            </mesh> */}
            {/* <mesh rotation-x={- Math.PI * 0.5} position-y={-0.75}>
                <planeGeometry args={[6,6]}/>
                <MeshReflectorMaterial 
                
                    resolution={512} 
                    color="gray" 
                    blur={[1000,1000]}
                    mixBlur={2}
                    mirror={1}
                    />
            </mesh> */}
            <mesh
                ref={planeRef}
                onPointerOver={()=>setHover(true)}
                onPointerOut={()=>setHover(false)}
            >
                <planeGeometry args={[2,3,64,64]}/>
                    <MeshDistortMaterial speed={1} distort={0.3}>
                        <GradientTexture 
                        colors={['cyan','white']}
                        stops={[0,1]}
                    />
                </MeshDistortMaterial>
            </mesh>
        </>
    )
}

export default Scene