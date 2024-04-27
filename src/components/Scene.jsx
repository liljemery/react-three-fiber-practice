import { useFrame, extend, useThree, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei";
extend({OrbitControls:OrbitControls});

const Scene = (props) => {
    const cubeRef = useRef();
    useFrame((state)=>{
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
    })

    const texture = useLoader(THREE.TextureLoader,'./public/trunk.jpeg');

    return (
        <>
        <OrbitControls/>
        <mesh ref={cubeRef} position-y={0.5}>
            <boxGeometry  />
            <meshBasicMaterial  map={texture} side={THREE.DoubleSide}/>
        </mesh>

        </>
    )
}

export default Scene