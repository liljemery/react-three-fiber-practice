import { Grid, OrbitControls, CameraControls } from "@react-three/drei";
import { useRef } from 'react'
import { button, buttonGroup, useControls } from 'leva';
import * as THREE from 'three'

const Scene = (props) => {
    const CameraControlRef = useRef();
    const { DEG2RAD } =THREE.MathUtils;

    const cameraControls = useControls("Camera Controls",{
        horizontalRotation:buttonGroup({
            label: "Horizontal R",
            opts:{
                "45deg":()=> CameraControlRef.current.rotate(75 * DEG2RAD ,0,true),
                "90deg":()=> CameraControlRef.current.rotate(90 * DEG2RAD ,0,true),
                "360deg":()=> CameraControlRef.current.rotate(360 * DEG2RAD ,0,true)
            },
        }),
        verticalRotation:buttonGroup({
            label: "Vertical R",
            opts:{
                "20deg":()=> CameraControlRef.current.rotate(0,20 * DEG2RAD ,true),
                "-40deg":()=> CameraControlRef.current.rotate(0,-40 * DEG2RAD ,true),
            },
        }),
    })
    
    return (
        <>
            <CameraControls ref={CameraControlRef} smoothTime={0.5}/>

            <Grid 
                args={[30,30]} 
                cellSize={0.25} 
                sectionSize={2} 
                sectionThickness={1.5} 
            />
            <mesh>
                <boxGeometry/>
                <meshBasicMaterial />
            </mesh>
        </>
    )
}

export default Scene