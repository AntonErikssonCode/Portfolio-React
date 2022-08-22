import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import { Boxes } from "./Boxes";
function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas shadows>
          <OrbitControls
            target={[0, -10, 0]}
            maxPolarAngle={1.0}
            enableRotate={false}
            enableZoom={false}
          />
          <PerspectiveCamera makeDefault fov={70} position={[0, 5, 0]} />
          <Boxes />
          <ambientLight intensity={0.2} />
          <spotLight
            color={"rgb(255, 255,255)"}
            intensity={1}
            angle={0.9}
            penumbra={0.5}
            position={[-5, 5, 0]}
            castShadow
            shadow-bias={-0.0001}
          />
        </Canvas>
      </Suspense>
    </>
  );
}

export default Scene;
