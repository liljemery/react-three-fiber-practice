import { Physics, RigidBody } from "@react-three/rapier";

const PhysicsScene = () => {
    const grav = -9.81
  return (
    <Physics gravity={[0,grav,0]}>
        <RigidBody>
            <mesh castShadow position={[0, 10, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="#CC3941" />
            </mesh>            
        </RigidBody>
        <RigidBody type="fixed" >
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
                <boxGeometry args={[8, 8, 0.35]} />
                <meshStandardMaterial color="#C7CAC7" />
            </mesh>            
        </RigidBody>
    </Physics>
  )
}

export default PhysicsScene