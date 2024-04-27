import { useFrame, extend, useThree, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei";
extend({OrbitControls:OrbitControls});

const Scene = (props) => {
    const texture = useLoader(THREE.TextureLoader,'./public/trunk.jpeg');

    return (
        <>
        <OrbitControls/>
        <mesh position-y={2}>
            <planeGeometry args={[4,4]} />
            <meshBasicMaterial  map={texture} side={THREE.DoubleSide}/>
        </mesh>

        </>
    )
}

export default Scene