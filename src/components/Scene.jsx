import { useState } from 'react';
import { a, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber';

const Scene = (props) => {
    let n = 0
    const {x, y, color} = useSpring({
        from: {color: 'hotpink', x: -2},
        to: { color: 'yellow', x: 2},
        // to: [
        //     {color: 'yellow',x: 2,},
        //     {color: 'cyan', y: 2},
        //     {color: 'green', x: -2},
        //     {color: 'hotpink', y: -2}
        // ],
        // loop: ()=>3 > n++, should return a boolean value
        delay: 1000,
        reverse: false,
        pause: true,
        // onStart when starts
        // onResume when continued
        // onRest when animation finished
        // onPause when animation is paused
    })
    return (
        <> 
            <a.mesh position-x={x} position-y={y}>
                <boxGeometry/>
                <a.meshBasicMaterial color={color} />
            </a.mesh>
        </>
    )
}

export default Scene