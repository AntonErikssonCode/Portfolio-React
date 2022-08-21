import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { RoundedBox } from "@react-three/drei";

function Box({ color }) {
  const box = useRef();
  const time = useRef(0);
  const [position, setPosition] = useState(getInitialPosition());
  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.7 + 0.05);

  function getInitialPosition() {
    let v = new Vector3((Math.random() * 2 - 1) * 5, Math.random() * 1.5 + 1, (Math.random() * 2 - 1) * 15); 
   /*  if(v.x < 0) v.x -= 1.75;
    if(v.x > 0) v.x += 1.75; */
/*     if(v.x < 0) v.x -= 0.5;
    if(v.x > 0) v.x += 0.5; */
    return v;
  }

  function resetPosition() {
    let v = new Vector3((Math.random() * 2 - 1) *5, Math.random() * 1.5 + 1, Math.random() * 10 + 10 ); 
 /*    if(v.x < 0) v.x -= 0.5;
    if(v.x > 0) v.x += 0.5; */

    setPosition(v);
  }

  useFrame(
    (state, delta) => {
      time.current += delta * 0.5;
      let newZ = position.z - (time.current);

      if(newZ < -10) {
        resetPosition();
        time.current = 0;
      }

      box.current.position.set(
        position.x, 
        position.y, 
        newZ, 
      )
      box.current.rotation.x += delta * xRotSpeed;
      box.current.rotation.y += delta * yRotSpeed;
    },
    [xRotSpeed, yRotSpeed, position]
  );

  return (
    <mesh
      ref={box}
      rotation-x={Math.PI * 0.5}
      scale={scale}
      castShadow
    >
      {/* <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} /> */}
      <RoundedBox args={[1,1,1]} radius={0.05}>
        <meshStandardMaterial  color={color} envMapIntensity={0.15} />
      </RoundedBox>
    </mesh>
  );
}

export function Boxes() {
  const [arr] = useState(() => {
    let a = [];
    for(let i = 0; i < 40; i++) a.push(0);
    return a;
  });

  return <>
    {arr.map((e, i) => <Box key={i} color={i % 2 === 0 ? "rgb(120, 2, 254)": "rgb(54, 229, 144)" }/>)}
  </>
}