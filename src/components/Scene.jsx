import { OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from 'three'
import { useRef } from 'react'


const Scene = (props) => {
    const lighRef = useRef()
    useHelper(lighRef, THREE.DirectionalLightHelper,1)
    return (
        <>
        <OrbitControls/>
        <ambientLight
            
        />
        <directionalLight 
            ref={lighRef}
            castShadow
        />
        <mesh castShadow>
            <boxGeometry/>
            <meshStandardMaterial color={'#C7CAC7'} />
        </mesh>
        <mesh receiveShadow={true}  position-y={-1} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[8,8]} />
            <meshStandardMaterial color={"#CC3941"}/>
        </mesh>
        </>
    )
}

export default Scene