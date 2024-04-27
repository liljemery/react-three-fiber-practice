import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Car = () => {
    const model = useLoader(GLTFLoader, './model/bmw_m4_f82.glb')
  return (
    <primitive position-y={0} object={model.scene} />
  )
}

export default Car