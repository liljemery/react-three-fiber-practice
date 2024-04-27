import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Dog = () => {
    const model = useGLTF('./model/dog.glb');
    const animations = useAnimations(model.animations, model.scene);
    console.log(animations)

    useEffect(() => {
      animations.actions.Idle.play()
    }, [])

  return (
    <primitive position-y={0} object={model.scene} />
  )
}
useGLTF.preload('./model/dog.glb')

export default Dog