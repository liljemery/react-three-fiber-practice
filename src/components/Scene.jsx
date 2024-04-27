import { useFrame, extend, useThree, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";
extend({OrbitControls:OrbitControls});

const Scene = (props) => {
    return (
        <>
        <OrbitControls/>
        <mesh >
            <Particles/>
        </mesh>
        </>
    )
}

export default Scene