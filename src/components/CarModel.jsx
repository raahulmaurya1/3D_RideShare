import { useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { a } from "@react-spring/three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function CarModel({ url, id }) {
  const { scene, animations } = useGLTF(url);
  const modelRef = useRef();
  const mixerRef = useRef(null);

  // Set separate scale & position for each model
  const modelSettings = {
    "model-1": { scale: 1.5, position: [0, -0.8, 0] }, // Bike
    "model-2": { scale: 0.9, position: [0, -0.3, 0] }, // Car
    "model-3": { scale: 1.2, position: [0, -0.6, 0] }, // Auto
  };

  const maxScale = 1.3; // Maximum allowed scale
  const [scale, setScale] = useState(modelSettings[id]?.scale);
  const position = modelSettings[id]?.position || [0, -0.9, 0];

  // Play default animation for the car (model-2)
  useEffect(() => {
    if (id === "model-2" && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [id, scene, animations]);

  // Apply auto-rotation ONLY for the bike (model-1)
  useFrame((_, delta) => {
    if (id === "model-1" && modelRef.current) {
      modelRef.current.rotation.y += 0.5 * delta;
    }
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <a.primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
      onPointerOver={() => setScale((prev) => Math.min(prev * 1.05, maxScale))} // Limit max scale
      onPointerOut={() => setScale(modelSettings[id]?.scale)}
    />
  );
}
