import { OrbitControls, Html } from "@react-three/drei";
import {useRef} from 'react'



const Scene = (props) => {
    const cubeRef = useRef()

    return (
        <>
            <OrbitControls/>
            <mesh position-x={1}>
                <boxGeometry/>
                <meshBasicMaterial color={'purple'}/>
                <Html
                    position={[0,0.8,0]}
                    distanceFactor={5} 
                    wrapperClass="tex"
                    occlude={cubeRef}
                ><iframe 
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="568"
                    height="500"
                    src="https://liljemerysportfolio.netlify.app/"></iframe></Html>
            </mesh>
            <mesh position-x={-1} ref={cubeRef}>
                <boxGeometry/>
                <meshBasicMaterial color={'orange'}/>
            </mesh>
        </>
    )
}

export default Scene