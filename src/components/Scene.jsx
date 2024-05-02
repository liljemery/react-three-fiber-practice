import { useState } from 'react';
import { a, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber';

const Scene = (props) => {
    const [spring, api] = useSpring(()=>({
        from: {x: 0},
    }))
    const handleClick = () =>{
        api.start({
            to: { x: spring.x.get() === 1 ? 0 : 1}
        })
    }
    useFrame(()=>{
        console.log()
    })
    return (
        <> 
            <a.mesh onClick={handleClick} position-x={spring.x}>
                <boxGeometry/>
                <a.meshBasicMaterial color={'orange'} />
            </a.mesh>
        </>
    )
}

export default Scene