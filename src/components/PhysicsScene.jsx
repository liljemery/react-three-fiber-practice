import { Physics, RigidBody } from "@react-three/rapier";
import Effects from './Effects.jsx'

const PhysicsScene = () => {

  return (
    <>
    <Effects/>
    <Physics gravity={[0,-9.81,0]}>
        <RigidBody wireframe>
            <mesh castShadow position={[0, 1.5, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="#CC3941" />
            </mesh>            
        </RigidBody>
        {/* trimesh or hull for complex structures */}
        <RigidBody  colliders='hull'>
            <mesh position={[-1.5,1.5,0]} castShadow>
                <torusKnotGeometry args={[0.5,0.15,100,100]}/>
                <meshStandardMaterial color={'orange'}/>
            </mesh>            
        </RigidBody>
        <RigidBody type="fixed" >
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
                <boxGeometry args={[8, 8, 0.35]} />
                <meshStandardMaterial color="#C7CAC7" />
            </mesh>            
        </RigidBody>
    </Physics>    
    </>

  )
}

export default PhysicsScene