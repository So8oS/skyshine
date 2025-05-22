/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  active: boolean;
  lifetime: number;
  maxLifetime: number;
}

interface ParticlesProps {
  nozzleRef: React.RefObject<THREE.Group>;
  emitterName: string;
  emitterActive: boolean;
  removableObjects: React.RefObject<THREE.Object3D[]>;
}

const Particles: React.FC<ParticlesProps> = ({
  nozzleRef,
  emitterActive,
  removableObjects,
}) => {
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = 500;
  const particles = useRef<Particle[]>([]);
  let frameSkip = 0; // **Frame skipping counter**

  const GRAVITY = -0.1;
  const INITIAL_SPEED = 15;
  const SPREAD = 1;
  const PARTICLE_SIZE = 0.15;
  const emissionRate = 7;

  useEffect(() => {
    initializeParticles();
  }, []);

  useFrame(() => {
    if (frameSkip % 2 !== 0) {
      // **Skip every other frame**
      frameSkip++;
      return;
    }
    frameSkip++;
    updateParticles();
  });

  const initializeParticles = () => {
    const tempParticles: Particle[] = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < particleCount; i++) {
      tempParticles.push({
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        active: false,
        lifetime: 0,
        maxLifetime: 1.5 + Math.random(), // ✅ Keeping original lifetime!
      });

      dummy.position.set(0, 0, 0);
      dummy.scale.setScalar(0);
      dummy.updateMatrix();
      instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
    }

    particles.current = tempParticles;
    instancedMeshRef.current!.instanceMatrix.needsUpdate = true;
  };

  const raycaster = new THREE.Raycaster();
  const dummy = new THREE.Object3D();

  const updateParticles = () => {
    const nozzlePosition = new THREE.Vector3();
    nozzleRef.current?.getWorldPosition(nozzlePosition);

    const nozzleQuaternion = new THREE.Quaternion();
    nozzleRef.current?.getWorldQuaternion(nozzleQuaternion);

    const baseDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
      nozzleQuaternion
    );

    let particlesEmittedThisFrame = 0;
    const objectsToRemove = new Set<THREE.Object3D>();

    for (let i = 0; i < particleCount; i++) {
      const particle = particles.current[i];

      if (
        emitterActive &&
        !particle.active &&
        particlesEmittedThisFrame < emissionRate
      ) {
        particle.active = true;
        particle.lifetime = 0;
        particlesEmittedThisFrame++;
        particle.position.copy(nozzlePosition);

        const spreadVector = new THREE.Vector3(
          (Math.random() - 0.5) * SPREAD,
          (Math.random() - 0.5) * SPREAD,
          1
        ).normalize();

        particle.velocity.copy(baseDirection).multiplyScalar(INITIAL_SPEED);
        particle.velocity.add(spreadVector);
      }

      if (!particle?.active) continue;

      particle.lifetime += 1 / 30; // ✅ Adjusted lifetime increase to match frame skipping

      if (particle.lifetime > particle.maxLifetime) {
        particle.active = false;
        dummy.position.set(0, 0, 0);
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
        continue;
      }

      particle.velocity.y += GRAVITY / 30; // ✅ Adjusted gravity per-frame
      particle.position.addScaledVector(particle.velocity, 1 / 30); // ✅ Adjusted movement

      // **Collision Detection**
      raycaster.set(
        particle.position.clone(),
        particle.velocity.clone().normalize()
      );

      const validObjects = removableObjects.current.filter(
        (obj) => obj !== null
      );

      const intersects = raycaster.intersectObjects(validObjects);

      if (
        intersects.length > 0 &&
        intersects[0].distance < particle.velocity.length() / 5 // ✅ Adjusted for skipping frames
      ) {
        const hitObject = intersects[0].object;
        if (removableObjects.current.includes(hitObject)) {
          objectsToRemove.add(hitObject);
        }
        particle.active = false;
        continue;
      }

      dummy.position.copy(particle.position);
      dummy.scale.setScalar(PARTICLE_SIZE);
      dummy.updateMatrix();
      instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
    }

    objectsToRemove.forEach((object) => {
      object.parent?.remove(object);
      removableObjects.current = removableObjects.current.filter(
        (o) => o !== object
      );
    });

    instancedMeshRef.current!.instanceMatrix.needsUpdate = true;
  };

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[null, null, particleCount]}
      frustumCulled={false}
    >
      <sphereGeometry args={[1, 8, 8]} />
      <meshPhysicalMaterial
        color="#065fc9"
        transparent
        opacity={1}
        depthWrite={false} // ✅ Best GPU Optimization
        metalness={0.2}
        roughness={0.1}
        envMapIntensity={1.5}
        emissive="#2060ff"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
};

export default Particles;
