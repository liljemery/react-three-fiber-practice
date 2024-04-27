import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "./Model";
import { Suspense } from "react";



const Scene = (props) => {
    return (
        <>
        <ambientLight intensity={8}/>
        <OrbitControls/>
        <Suspense 
        fallback=
        {
            <mesh>
                <boxGeometry/>
                <meshBasicMaterial/>
            </mesh>
        }>  <Car/>            
        </Suspense>
        </>
    )
}

export default Scene