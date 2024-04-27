import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas 
      camera={
        {
          fov:75,
          near: 0.01,
          far: 100,
          position: [2,2,6],
        }
      }
    >
      <Scene />
    </Canvas>
  )
}

export default App
