import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";


function App() {
  const creatingCanvasHandler = (state) =>{
    state.gl.setClearColor('blue',1)
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
    </Canvas>
  )
}

export default App
