import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Perf } from "r3f-perf";

function App() {
  const creatingCanvasHandler = (state) =>{

  }
  return (
    <Canvas 
    gl={{
      antialias: false,
      alpha: true
    }}
    // orthographic
    camera={
      {
        fov:75,
        near: 0.1,
        far: 100,
        // zoom: 120,
        position: [2,2,6],
      }
    }
    onCreated={creatingCanvasHandler}
    >
      <Scene />
      <axesHelper />
      <gridHelper args={[20,20, 'red', 'gray']}/>
      <Perf position={'top-left'}/>
    </Canvas>
  )
}

export default App
