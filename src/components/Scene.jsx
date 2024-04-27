import { useFrame, extend, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei";
import CustomComp from "./CustomComp";
extend({OrbitControls:OrbitControls});

const Scene = (props) => {
    const cubeRef = useRef();
    const planeRef = useRef();
    const { gl, camera } = useThree();
    

    useFrame((state,delta)=>{
        // cubeRef.current.rotation.x += delta;
        // cubeRef.current.rotation.y += delta;
        // planeRef.current.rotation.x += delta;
        // planeRef.current.rotation.y += delta;
        // state.camera.position.x = Math.sin(state.clock.elapsedTime)
    })

    return (
        <>
        <OrbitControls/>
        <mesh >
            <boxGeometry  />
            <meshBasicMaterial color={'orange'}/>
        </mesh>
        <CustomComp/>
        </>
    )
}

export default Scene