import { OrbitControls, PerspectiveCamera, Environment, CubeCamera } from "@react-three/drei";
import * as THREE from 'three'
import { useRef } from 'react'
import { useControls } from 'leva'
import {useFrame } from '@react-three/fiber'


const Scene = (props) => {
    const cube = useRef()
    const { height, radius, scale } = useControls('ground',{
        height: 6, 
        radius: 60, 
        scale: 70
    })
    useFrame((_,delta)=>{
        cube.current.rotation.x += delta;
        cube.current.rotation.z += delta;
    })
    
    return (
        <>
        <OrbitControls/>
        < Environment
            files={'./envMap/2.hdr'}
            ground={{height, radius, scale}}
        />
        <CubeCamera>
            {(texture) => (
                <mesh position-y={3}>
                    <sphereGeometry args={[1,64,64]}/>
                    <meshStandardMaterial envMap={texture} roughness={0} metalness={1} />
                </mesh>   
            )}  
        </CubeCamera>
        <mesh ref={cube} position-z={2}>
            <boxGeometry/>
            <meshBasicMaterial color={'purple'}/>
        </mesh>
        {/* <PerspectiveCamera makeDefault position={[0,0,5]} fov={75}/> */}
        </>
    )
}

export default Scene