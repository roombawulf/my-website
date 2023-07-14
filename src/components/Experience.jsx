import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

function Box () {

    const box = useRef()

    useFrame((state, delta) => {
        box.current.rotation.y += delta * 0.15;
        box.current.rotation.x += delta * 0.0725;
    })

    return (
        <mesh ref={box} scale={3.0}>
            <boxGeometry args={[1,1,1,2,2,2]} />
            <meshBasicMaterial color={'#ff914d'} wireframe />
        </mesh>
    )
}

function Experience () {
    return (
        <Canvas>
            <Box />
        </Canvas>
    )
}
export default Experience