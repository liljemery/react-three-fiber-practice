import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas shadows camera={{position: [0,0,5], fov: 60}}>
      <Scene />
      <Perf position={'top-left'}/>
    </Canvas>
  )
}

export default App
