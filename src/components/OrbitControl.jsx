import { OrbitControls } from '@react-three/drei'

const OrbitControl = () => {
  return (
    <>
    <OrbitControls 
        enableDamping={true} 
        dampingFactor={0.01}
        autoRotate={true}
        autoRotateSpeed={10}
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={-Math.PI / 4}
    />  

    </>
    
  )
}

export default OrbitControl