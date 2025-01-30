import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Torus, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const { viewport } = useThree();
  const data = useScroll();
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const scroll = data.scroll.current;
    
    if (sphereRef.current && torusRef.current) {
      // Rotate based on scroll position
      sphereRef.current.rotation.x = scroll * Math.PI * 2;
      sphereRef.current.rotation.y += 0.01;
      
      torusRef.current.rotation.x = scroll * Math.PI;
      torusRef.current.rotation.y += 0.02;
      
      // Move objects based on scroll
      sphereRef.current.position.y = THREE.MathUtils.lerp(0, -5, scroll);
      torusRef.current.position.y = THREE.MathUtils.lerp(0, -3, scroll);
    }
  });

  return (
    <>
      <color attach="background" args={['#111827']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Sphere
        ref={sphereRef}
        args={[1, 32, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#4ade80"
          wireframe
          transparent
          opacity={0.5}
        />
      </Sphere>
      <Torus
        ref={torusRef}
        args={[2, 0.2, 16, 100]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#22c55e"
          transparent
          opacity={0.3}
        />
      </Torus>
    </>
  );
}