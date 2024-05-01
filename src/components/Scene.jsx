import { Grid, Text, OrbitControls,Text3D, Center, Float } from "@react-three/drei";




const Scene = (props) => {
    return (
        <>
            <OrbitControls/>
            <Text 
            fontSize={0.4}
            font="./fonts/1.ttf"
            position-y={1.5}
            rotation-y={Math.PI * 0.1}
            >
                This is a text</Text>
            <Center>
            <Float>
            <Text3D 
                    font="./fonts/2.json" 
                    height={1}
                    size={1}
                    letterSpacing={-0.1}
                    bevelEnabled
                    bevelSegments={20}
                >
                    Hello
                    <meshNormalMaterial/>
                </Text3D>  
            </Float>
            </Center>

        </>
    )
}

export default Scene