import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { EffectComposer, SMAA } from "@react-three/postprocessing"
import { useRef } from "react"

import SobelEdge from "./SobelEdge"


function Model(props) {
    const model = useRef()
    const { nodes } = useGLTF("/crt_monitor.glb")
    useFrame((state, delta) => {
        model.current.rotation.z += delta * 0.08
    })

    return (
      <group {...props} dispose={null} position={[0, 1, 0]} rotation={[0,-Math.PI/2,0]}>
        <mesh
          geometry={nodes.Cube_Material_0.geometry}
          position={[-10.03, 0.134, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
          ref={model}
        >
            <meshToonMaterial color={'#995511'}/>
        </mesh>
      </group>
    );
}



function Effect () {
    return (
        <EffectComposer>
            <SobelEdge />
            <SMAA />
        </EffectComposer>
    )
}

function Experience () {
    return (
        <Canvas style={{ position: 'relative', zIndex: -1 }}>
            <color attach={'background'} args={['hsl(30, 20%, 6%)']} />
            <Model />
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 0, 0]} intensity={0.8} />
            <Effect />
        </Canvas>
    )
}
useGLTF.preload("/crt_monitor.glb");
export default Experience