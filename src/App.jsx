import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";


function App() {
  return (
    <Canvas 
    orthographic
    camera={
      {
        fov:75,
        near: 0.1,
        far: 100,
        zoom: 120,
        position: [2,2,6],
      }
    }>
      <Scene />
      <axesHelper />
    </Canvas>
  )
}

export default App
