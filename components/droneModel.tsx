/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
"use client";
import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    Bolt001_Black_0: THREE.Mesh;
    Bolt002_Black_0: THREE.Mesh;
    Bolt003_Black_0: THREE.Mesh;
    Bolt004_Black_0: THREE.Mesh;
    Circle002_Black_0: THREE.Mesh;
    Circle003_Black_0: THREE.Mesh;
    Circle004_Black_0: THREE.Mesh;
    Circle005_Black_0: THREE.Mesh;
    Circle_Grey_0: THREE.Mesh;
    Circle_Chrome_0: THREE.Mesh;
    Circle001_Grey_0: THREE.Mesh;
    Circle001_Chrome_0: THREE.Mesh;
    Circle007_Black_0: THREE.Mesh;
    Cube_Black_0: THREE.Mesh;
    Cube_Glass_0: THREE.Mesh;
    Circle006_Black_0: THREE.Mesh;
    Plane_Grey_0: THREE.Mesh;
    Plane001_Black_0: THREE.Mesh;
  };
  materials: {
    Black: THREE.MeshStandardMaterial;
    Grey: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
  };
};

export function Model(props: { [key: string]: any }) {
  const { nodes, materials } = useGLTF(
    "/minimalist_drone_model.glb"
  ) as GLTFResult;

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <group
        name="Sketchfab_model"
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.239}
      >
        <group
          name="4b25c189153f4be0b659a9c719531e98fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="Circle"
            position={[0.596, 0, -9.076]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              name="Circle_Grey_0"
              castShadow
              receiveShadow
              geometry={nodes.Circle_Grey_0.geometry}
              material={materials.Grey}
            />
            <mesh
              name="Circle_Chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.Circle_Chrome_0.geometry}
              material={materials.Chrome}
            />
          </group>
          <group
            name="Circle001"
            position={[0.596, 0, -105.264]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              name="Circle001_Grey_0"
              castShadow
              receiveShadow
              geometry={nodes.Circle001_Grey_0.geometry}
              material={materials.Grey}
            />
            <mesh
              name="Circle001_Chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.Circle001_Chrome_0.geometry}
              material={materials.Chrome}
            />
          </group>
          <group
            name="Cube"
            position={[0.58, -20.833, 104.012]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              name="Cube_Black_0"
              castShadow
              receiveShadow
              geometry={nodes.Cube_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              name="Cube_Glass_0"
              castShadow
              receiveShadow
              geometry={nodes.Cube_Glass_0.geometry}
              material={materials.Glass}
            />
          </group>
          <mesh
            name="Bolt001_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Bolt001_Black_0.geometry}
            material={materials.Black}
            position={[-103.87, 10.86, 79.198]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={96.739}
          />
          <mesh
            name="Bolt002_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Bolt002_Black_0.geometry}
            material={materials.Black}
            position={[-98.226, 10.86, 88.394]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={96.739}
          />
          <mesh
            name="Bolt003_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Bolt003_Black_0.geometry}
            material={materials.Black}
            position={[-98.084, -14.489, -45.502]}
            rotation={[-Math.PI / 2, 0, 2.161]}
            scale={96.739}
          />
          <mesh
            name="Bolt004_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Bolt004_Black_0.geometry}
            material={materials.Black}
            position={[-93.589, -14.489, -55.311]}
            rotation={[-Math.PI / 2, 0, -0.98]}
            scale={96.739}
          />
          <mesh
            name="Circle002_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Circle002_Black_0.geometry}
            material={materials.Black}
            position={[0.596, -0.705, -9.076]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Circle003_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_Black_0.geometry}
            material={materials.Black}
            position={[-202.692, -0.705, 176.669]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            name="Circle004_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Circle004_Black_0.geometry}
            material={materials.Black}
            position={[-229.579, -26.054, -83.116]}
            rotation={[-Math.PI / 2, 0, 2.161]}
            scale={100}
          />
          <mesh
            name="Circle005_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Circle005_Black_0.geometry}
            material={materials.Black}
            position={[37.905, -26.054, -17.697]}
            rotation={[-Math.PI / 2, 0, -0.98]}
            scale={100}
          />
          <mesh
            name="Circle007_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_Black_0.geometry}
            material={materials.Black}
            position={[0.58, -20.833, 104.012]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            name="Circle006_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Circle006_Black_0.geometry}
            material={materials.Black}
            position={[0, 0, 0.413]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="Plane_Grey_0"
            castShadow
            receiveShadow
            geometry={nodes.Plane_Grey_0.geometry}
            material={materials.Grey}
            position={[0.58, 0, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            name="Plane001_Black_0"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Black_0.geometry}
            material={materials.Black}
            position={[0.58, 0, 1.38]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

export default function DroneCanvas() {
  return (
    <Canvas className="w-full h-[500px]">
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minDistance={0.48}
        maxDistance={0.48}
        enableRotate={true}
      />
      <spotLight intensity={1000} position={[0, 10, 10]} />
      <spotLight intensity={1000} position={[0, -10, 10]} />
      <spotLight intensity={1000} position={[-10, 0, 0]} />
      <Model />
    </Canvas>
  );
}

useGLTF.preload("/minimalist_drone_model.glb");
