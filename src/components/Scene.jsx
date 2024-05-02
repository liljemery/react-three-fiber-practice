import { useState} from "react";
import { a, useSpring } from "@react-spring/three";

const Scene = (props) => {
    const [click, setClick] = useState(false);
    const {scale, color } = useSpring({
        from: {scale: click? 1 : 2, color: click ? "orange" : "yellow" },
        scale: click? 2 : 1,
        color: click? "yellow" : "orange"
    });
    const handleClick = () =>{
        setClick(!click)
    }

    return (
        <> 
            
            <a.mesh onClick={handleClick} scale={scale}>
                <boxGeometry />
                <meshBasicMaterial color={color} />
            </a.mesh>
        </>
    )
}

export default Scene