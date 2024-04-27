import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Dog from "./Dog";

const Scene = (props) => {
    return (
        <>
        <ambientLight intensity={10}/>
        <OrbitControls/>
        < Dog />
        </>
    )
}

export default Scene