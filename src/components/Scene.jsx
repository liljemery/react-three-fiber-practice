import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Bike from './Bike'

const Scene = (props) => {
    return (
        <>
        <ambientLight intensity={10}/>
        <OrbitControls/>
        <Bike position-y={2}/>
        </>
    )
}

export default Scene