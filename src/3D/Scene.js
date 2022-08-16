import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React, {Suspense} from "react";
import { Boxes } from "./Boxes";
function Scene(props) {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas shadows>
        
      <OrbitControls target={[0, -10, 0]} maxPolarAngle={1.0} enableRotate={false} enableZoom={false}/> 
      <PerspectiveCamera makeDefault fov={70} position={[0,5,0]}  />


          <Boxes />
        {/*    <spotLight
            color={"rgba(156,25,78)"}
            intensity={1}
            angle={0.6}
            penumbra={0.5}
            position={[5, 5, 0]}
            castShadow
            shadow-bias={-0.0001}
          />  */}
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
             {/*  <EffectComposer>
  
  <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} />
  <Bloom
    blendFunction={BlendFunction.ADD}
    intensity={1.1} // The bloom intensity.
    width={300} // render width
    height={300} // render height
    kernelSize={1} // blur kernel size
    luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
  />
  <ChromaticAberration
    blendFunction={BlendFunction.NORMAL} // blend mode
    offset={[0.0005, 0.0012]} // color offset
  />
</EffectComposer> */}
        </Canvas>
      </Suspense>

      {/*  <EffectComposer>
  
        <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} />
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.1} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={1} // blur kernel size
          luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer> */}
    </>
  );
}

export default Scene;
