import FrontImage from "../assets/imgs/front-blob.png";
import c from "../assets/logos/lang/c.png";
import csharp from "../assets/logos/lang/csharp.png";
import javascript from "../assets/logos/lang/javascript.png";
import css from "../assets/logos/lang/css.svg";
import html from "../assets/logos/lang/html.png";
import php from "../assets/logos/lang/php.png";
import java from "../assets/logos/lang/java.svg";
import python from "../assets/logos/lang/python.png";
import flutter from "../assets/logos/lang/flutter.png";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import React, { useRef } from "react";
// import * as THREE from "three";

function Landing() {
  //   const AnimatedModel: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  //     const group = useRef<THREE.Group>(null);
  //     const mixer = useRef<THREE.AnimationMixer | null>(null); // Proper typing for mixer
  //     const { scene, animations } = useGLTF(modelPath);

  //     // Initialize the animation mixer
  //     React.useEffect(() => {
  //       if (animations && animations.length > 0) {
  //         mixer.current = new THREE.AnimationMixer(scene);
  //         animations.forEach((clip) => {
  //           const action = mixer.current?.clipAction(clip);
  //           action?.play(); // Play all animations
  //         });
  //       }
  //     }, [scene, animations]);

  //     // Update the animation mixer on each frame
  //     useFrame((_, delta) => {
  //       mixer.current?.update(delta); // Safely update mixer if it exists
  //     });

  //     return <primitive ref={group} object={scene} />;
  //   };

  // Loader
  // const Loader = () => {
  //   const { active, progress } = useProgress();
  //   return active ? (
  //     <Html center>
  //       <div style={{ textAlign: "center" }}>
  //         <p style={{ color: "white" }}>Loading... {Math.round(progress)}%</p>
  //         <div
  //           style={{
  //             width: "100px",
  //             height: "10px",
  //             backgroundColor: "gray",
  //             position: "relative",
  //             overflow: "hidden",
  //             borderRadius: "5px",
  //             margin: "10px auto",
  //           }}
  //         >
  //           <div
  //             style={{
  //               width: `${progress}%`,
  //               height: "100%",
  //               backgroundColor: "lightblue",
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </Html>
  //   ) : null;
  // };

  return (
    <>
      {/* TOP */}
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

      {/* PROGRAMMING SKILLS */}
      <div className="flex flex-col w-full justify-center bg-gray-200 rounded-tr-[200px] rounded-bl-[200px] md:rounded-bl-[100px] lg:rounded-bl-[200px] h-full lg:h-screen md:h-screen lg:min-h-[500px] md:h-screen md:min-h-[100px] min-h-[700px] py-10 px-10">
        <h1 className="text-3xl lg:text-center md:text-center lg:text-3xl md:text-2xl font-bold text-cyan-700 pt-3">
          My Expertise
        </h1>

        <div className="flex-1 flex flex-col lg:flex-row md:flex-row pt-10 gap-5">
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-opacity-50">
              Programming Languages
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-5">
              <img
                src={javascript}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={css}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={html}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={php}
                alt=""
                className="lg:h-[90px] md:h-[70px] h-[50px]"
              />
              <img
                src={java}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={python}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={flutter}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={c}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
              <img
                src={csharp}
                alt=""
                className="lg:h-[120px] md:h-[90px] h-[60px]"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-opacity-50">
              Frameworks and Libraries
            </p>
          </div>
        </div>
      </div>

      {/* VFX */}
      <div className="flex items-center justify-center">
        <div className="relative overflow-hidden bg-black rounded-tr-[200px] rounded-bl-[200px] md:rounded-bl-[100px] lg:rounded-bl-[200px] h-full lg:h-screen md:h-screen lg:min-h-[500px] md:h-screen md:min-h-[100px] min-h-[700px] py-3">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
            src="/vfx/pf-bg.mov" // Update the path to your video
            autoPlay
            loop
            muted
          ></video>

          <div className="relative z-10 flex h-full flex-col md:flex-row lg:flex-row">
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

                <p className="pt-4 text-white">
                  With 7+ years of experience in 3D modeling, sculpting,
                  rigging, texturing, and animation in Blender, Substance
                  Painter, ZBrush, and Maya, and 6+ years of expering in visual
                  effects with Blender, Houdini, Cinema4D, and Adobe After
                  Effects. Worked with several local and international companies
                  in creating artistic and realistic CGI advertisements, short
                  clips, and even movies.
                </p>
                <p className="pt-3 text-white">
                  I have established my fanbase in <strong>TikTok</strong>,
                  which gained me millions of views and likes.
                </p>

                <div className="flex flex-row pt-5 justify-end">
                  <a
                    className="bg-cyan-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-cyan-700"
                    href="#"
                  >
                    Commission Me
                  </a>
                  <a
                    className="ml-3 border-2 border-cyan-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-cyan-600"
                    href="#"
                  >
                    View VFX Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="flex-none flex items-center w-screen md:w-6/12 lg:w-7/12 px-2 md:px-5 lg:px-12 lg:py-8">
              <div className="w-full h-[90vh] bg-gray-400 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[160px] lg:rounded-bl-[160px] md:rounded-bl-[160px] rounded-bl-[200px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col overflow-hidden">
                <h1 className="text-white text-center text-opacity-30 py-4 md:text-xs">
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

                  <Loader />

                  <mesh castShadow>
                    <AnimatedModel modelPath="/3ds/spot-walk/spot.gltf" />
                  </mesh>
                </Canvas>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
