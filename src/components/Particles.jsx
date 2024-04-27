import { useLoader,useFrame } from "@react-three/fiber"
import { useRef } from "react";
import * as THREE from 'three'

const Particles = () => {
    const particles = useRef();
    useFrame((_,delta)=>{
        particles.current.rotation.y += delta * - 0.2;
    })

    const texture = useLoader(THREE.TextureLoader,'./public/snow.png');
    const verticesAmount = 2000;
    const positionArray = new Float32Array(verticesAmount*3)

    for( let i = 0; i < verticesAmount * 3; i++){
        positionArray[i] = (Math.random()- 0.5) * 20;
    }

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute 
                    attach={"attributes-position"}
                    count={positionArray.length} 
                    itemSize={3} 
                    array={positionArray} />
            </bufferGeometry>
            <pointsMaterial 
                size={0.3} 
                alphaMap={texture} 
                transparent 
                depthTest={false}/>
        </points>
    )
}

export default Particles