import { OrbitControls, useHelper, Sparkles, Stars, Cloud, Sky, Environment, Lightformer } from "@react-three/drei";
import * as THREE from 'three'
import { useRef } from 'react'
import { useControls } from 'leva'

const Scene = (props) => {
    const sky = useRef()
    const { sunPosition } = useControls('sky',{
        sunPosition:{value:[0,1,0]}
    })
    const { height, radius, scale } = useControls('ground',{
        height: 6, 
        radius: 60, 
        scale: 70
    })
    return (
        <>
        <OrbitControls/>
        {/* <ambientLight
            
        /> */}
        {/* <directionalLight 
            castShadow
            position={sunPosition}
        /> */}

        {/* <Sparkles scale={5} count={1000000} speed={0.2} opacity={3} color={'white'} />*/}
        {/* <Stars />
        <Cloud opacity={1} speed={0.2} width={20} depth={1.5} segments={40} /> */}
        {/* <Sky
            ref={sky}
            sunPosition={sunPosition}
            castShadow
        /> */}
        < Environment
            files={'./envMap/1.hdr'}
            ground={{height, radius, scale}}
        >
            <mesh>
                <planeGeometry/>
                <meshBasicMaterial/>                
            </mesh>
            <Lightformer />
        </Environment>
        <mesh castShadow position-y={1}>
            <boxGeometry/>
            <meshStandardMaterial color={'#C7CAC7'}  />
        </mesh>
        <mesh receiveShadow={true}  position-y={0} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[8,8]} />
            <meshStandardMaterial color={"#CC3941"} side={THREE.DoubleSide}/>
        </mesh>
        </>
    )
}

export default Scene