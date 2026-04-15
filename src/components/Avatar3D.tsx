import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, useAnimations } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 1) {
      // Play the second animation (index 1) if available, otherwise play the first
      const animationArray = Object.values(actions);
      const animationToPlay = animationArray[1] || animationArray[0];
      if (animationToPlay) {
        animationToPlay.play();
      }
    } else if (actions && Object.keys(actions).length > 0) {
      // If only one animation exists, play it
      const firstAction = Object.values(actions)[0];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);
  
  return (
    <primitive 
      object={scene} 
      scale={1.0}
      position={[0, -0.8, 0]}
    />
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full max-w-[450px] min-h-[600px] relative mx-auto overflow-visible">
      <Canvas 
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <Suspense fallback={null}>
          <Model url="/models/avatar.glb" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={true}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
      
      {/* Border effect */}
      <div className="absolute inset-0 border-b border-accent pointer-events-none"></div>
    </div>
  );
}
