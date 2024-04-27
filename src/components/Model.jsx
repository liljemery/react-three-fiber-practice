import { useGLTF } from "@react-three/drei";

const Car = () => {
    const model = useGLTF('./model/bmw_m4_f82.glb')
  return (
    <primitive position-y={0} object={model.scene} />
  )
}
useGLTF.preload('./model/bmw_m4_f82.glb')

export default Car