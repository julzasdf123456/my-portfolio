import FrontImage from "../assets/imgs/front-blob.png";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

function Landing() {
  // const { scene, animations } = useGLTF("/3ds/spot-walk/spot.gltf");

  const AnimatedModel: React.FC<{ modelPath: string }> = ({ modelPath }) => {
    const group = useRef<THREE.Group>(null);
    const mixer = useRef<THREE.AnimationMixer | null>(null); // Proper typing for mixer
    const { scene, animations } = useGLTF(modelPath);

    // Initialize the animation mixer
    React.useEffect(() => {
      if (animations && animations.length > 0) {
        mixer.current = new THREE.AnimationMixer(scene);
        animations.forEach((clip) => {
          const action = mixer.current?.clipAction(clip);
          action?.play(); // Play all animations
        });
      }
    }, [scene, animations]);

    // Update the animation mixer on each frame
    useFrame((_, delta) => {
      mixer.current?.update(delta); // Safely update mixer if it exists
    });

    return <primitive ref={group} object={scene} />;
  };

  return (
    <>
      <div className="h-full lg:h-screen lg:min-h-[700px] md:h-screen md:min-h-[740px] flex flex-col md:flex-row lg:flex-row">
        <div className="flex-none flex items-center w-screen md:w-6/12 lg:w-5/12 px-2 md:px-5 lg:px-12">
          <img src={FrontImage} alt="" className="w-screen" />
        </div>

        <div className="flex-1 h-full px-10 md:px-5 lg:px-12 py-4">
          <div className="flex h-full flex-col justify-center">
            <h1 className="text-l lg:text-2xl md:text-2xl font-bold text-white pt-5">
              Hi, I'm a
            </h1>
            <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold text-white pt-3">
              <span className="text-cyan-300">Full-Stack</span>
            </h1>
            <h1 className="text-5xl lg:text-7xl md:text-6xl font-bold text-white">
              Software Engineer
            </h1>

            <p className="pt-4 text-white text-opacity-75">
              With 9+ years of experience in Web, Android, API Integration,
              Desktop application development, and Data Analytics. Skilled in
              database management, including MS SQL Server, MySQL, PostgreSQL,
              and Oracle, with 7+ years managing SQL databases with replication
              to enhance data integrity and redundancy. Proven success in
              delivering quality solutions for local and international
              enterprises.
            </p>
            <p className="pt-3 text-white text-opacity-75">
              Currently based in the Philippines. Available to relocate to any
              country immediately if necessary.
            </p>

            <div className="flex flex-row pt-5">
              <a
                className="bg-cyan-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-cyan-700"
                href="#"
              >
                Hire Me
              </a>
              <a
                className="ml-3 border-2 border-cyan-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-cyan-600"
                href="#"
              >
                Dowload CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full lg:h-screen md:h-screen lg:min-h-[500px] md:h-screen md:min-h-[100px] flex flex-col md:flex-row lg:flex-row bg-cyan-600 rounded-tr-[200px] rounded-bl-[200px] py-3 bg-opacity-50">
        <div className="flex-1 h-full px-10 md:px-5 lg:px-12 py-4">
          <div className="flex h-full flex-col justify-center">
            <h1 className="text-l lg:text-2xl md:text-2xl font-bold text-white pt-5">
              I'm also a
            </h1>
            <h1 className="text-5xl lg:text-7xl md:text-6xl font-bold text-white pt-3">
              <span className="text-cyan-300">CGI & VFX</span>
            </h1>
            <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold text-white">
              Artist
            </h1>

            <p className="pt-4 text-white text-opacity-75">
              With 9+ years of experience in Web, Android, API Integration,
              Desktop application development, and Data Analytics. Skilled in
              database management, including MS SQL Server, MySQL, PostgreSQL,
              and Oracle, with 7+ years managing SQL databases with replication
              to enhance data integrity and redundancy. Proven success in
              delivering quality solutions for local and international
              enterprises.
            </p>
            <p className="pt-3 text-white text-opacity-75">
              Currently based in the Philippines. Available to relocate to any
              country immediately if necessary.
            </p>

            <div className="flex flex-row pt-5 justify-end">
              <a
                className="ml-3 border-2 border-cyan-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-cyan-600"
                href="#"
              >
                Commission Me
              </a>
            </div>
          </div>
        </div>

        <div className="flex-none flex items-center w-screen md:w-6/12 lg:w-7/12 px-2 md:px-5 lg:px-12 lg:py-8">
          <div className="w-full h-[90vh] bg-gray-400 rounded-l-[80px] rounded-br-[80px] rounded-tr-[160px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col overflow-hidden">
            <h1 className="text-white text-center text-opacity-30 py-4">
              Scroll or Drag Mr. Spot to Walk
            </h1>
            <Canvas
              frameloop="demand"
              camera={{
                position: [-15, 0, 20],
                fov: 45,
                near: 0.1,
                far: 200,
              }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={2} />
              <pointLight intensity={50} position={[10, 10, 10]} />
              <OrbitControls
                autoRotate={false}
                enableZoom={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enablePan={true}
              />

              {/* Custom Primitive */}
              <mesh castShadow>
                <AnimatedModel modelPath="/3ds/spot-walk/spot.gltf" />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
