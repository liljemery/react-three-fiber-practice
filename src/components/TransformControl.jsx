import { TransformControls, OrbitControls } from '@react-three/drei'

const TransformControl = () => {
    return (
    <>
        <OrbitControls makeDefault/>
        <TransformControls mode='translate'>
            <mesh>
                <boxGeometry/>
                <meshBasicMaterial/>
            </mesh>
        </TransformControls>
    </>

    )
}

export default TransformControl