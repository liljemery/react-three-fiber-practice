import * as THREE from 'three'

const CustomComp = () => {
    const positionArray = new Float32Array([
        0, 0, 0,  // Vértice 1
        1, 0, 0,  // Vértice 2
        0, 1, 0,  // Vértice 3
    ]);
    
    return (
    <mesh>
        <bufferGeometry>
            <bufferAttribute attach={"attributes-position"} count={3} itemSize={3} array={positionArray}/>
        </bufferGeometry>
        <meshBasicMaterial color={'purple'} side={THREE.DoubleSide}/>
    </mesh>
    )

}

export default CustomComp