import { PivotControls } from '@react-three/drei'

const PivotControl = () => {
  return (
    <>
    
    <PivotControls depthTest={false}>
        <mesh>
            <boxGeometry/>
            <meshBasicMaterial/>
        </mesh>
    </PivotControls>

    </>
  )
}

export default PivotControl