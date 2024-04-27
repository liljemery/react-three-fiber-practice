import { OrbitControls } from "@react-three/drei";
import { button,useControls } from 'leva'

const Scene = (props) => {
    const { position, color, wireframe,scale }= useControls({
        position: {
            value: {
                x:0,
                y:0,
                z:0
            },
            min:-10,
            max:10,
            step:0.01
        },
        color:'#ffffff',
        wireframe: false,
        click:button(()=>(
            console.log('clicked')
        )),
        scale:{options:[1,2,3]}
    })

    return (
        <>
        <OrbitControls/>

        <directionalLight
            position={[2,2,6]}
            castShadow
            intensity={Math.PI * 2}
        />

        <mesh position={[position.x,position.y,position.z]} scale={scale}>
            <boxGeometry/>
            <meshStandardMaterial 
                color={color}
                wireframe={wireframe}
            />
        </mesh>
        </>
    )
}

export default Scene