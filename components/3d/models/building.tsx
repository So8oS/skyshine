/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export function Building({ buildingRef, dirtRefs, ...props }) {
  const { scene, nodes } = useGLTF("./building.gltf");

  const dirtGridSize = 5; // 8x8 grid
  const dirtPieceSize = 2; // Size of each dirt piece

  // Store object7Position in state to trigger re-renders when updated
  const [object7Position, setObject7Position] = useState(
    new THREE.Vector3(0, 0, 0)
  );

  useEffect(() => {
    if (nodes.Object_7) {
      const position = new THREE.Vector3();
      nodes.Object_7.getWorldPosition(position);
      setObject7Position(position);
    } else {
      console.warn("Object_7 not found in GLTF!");
    }
  }, [nodes.Object_7]); // Runs when nodes.Object_7 is available

  // Define plane positions
  const planePositions = [
    object7Position.clone().add(new THREE.Vector3(25, 38, 15)),
    object7Position.clone().add(new THREE.Vector3(-25, 38, 15)),
    object7Position.clone().add(new THREE.Vector3(0, 38, 30)),
    object7Position.clone().add(new THREE.Vector3(-25, 37, 60)),
  ];

  // Generate dirt positions
  const dirtMeshes = [];
  for (const pos of planePositions) {
    for (let row = 0; row < dirtGridSize; row++) {
      for (let col = 0; col < dirtGridSize; col++) {
        const position = [
          pos.x + row * dirtPieceSize - (dirtGridSize * dirtPieceSize) / 2,
          pos.y,
          pos.z + col * dirtPieceSize - (dirtGridSize * dirtPieceSize) / 2,
        ];
        dirtMeshes.push({ position });
      }
    }
  }

  // Store refs for all dirt pieces
  const dirtRefsArray = useRef([]);

  // Ensure refs are properly stored after mounting
  useEffect(() => {
    dirtRefs.current = dirtRefsArray.current.filter(Boolean);
  }, [object7Position]); // Run when object7Position updates

  return (
    <>
      <primitive ref={buildingRef} object={scene} {...props} />

      {dirtMeshes.map((dirt, index) => (
        <group key={`dirt-${index}`} rotation={[1.55, 0, 0]}>
          <mesh
            key={`dirt-${index}`}
            ref={(el) => {
              if (el) dirtRefsArray.current[index] = el;
            }}
            position={dirt.position}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[dirtPieceSize, dirtPieceSize]} />
            <meshBasicMaterial
              color="#949494"
              side={THREE.DoubleSide}
              opacity={0.5}
              transparent
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}
    </>
  );
}
