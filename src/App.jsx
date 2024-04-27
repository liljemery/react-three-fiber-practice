import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas>
      <Scene />
      <Perf position={'top-left'}/>
    </Canvas>
  )
}

export default App
