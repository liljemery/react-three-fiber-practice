import { OrbitControls } from "@react-three/drei";
import {useState} from 'react';


const Scene = (props) => {
    const [active,setActive] = useState(false);

    const handleClick = () =>{
        setActive(!active);
        console.log(active)
    }

    return (
        <>
        <OrbitControls/>

        <directionalLight
            position={[2,2,6]}
            castShadow
            intensity={Math.PI * 2}
        />

        <mesh onClick={handleClick} position-x={1}>
            <boxGeometry/>
            <meshBasicMaterial color={ active ?'gray'  :'orange' }/>
        </mesh>
        <mesh onClick={(e)=>e.stopPropagation()} position-x={-1}>
            <boxGeometry/>
            <meshBasicMaterial color={'purple'}/>
        </mesh>
        </>
    )
}

export default Scene