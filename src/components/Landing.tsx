import FrontImage from "../assets/imgs/front-blob.png";

function Landing() {
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
              Seasoned Full-Stack Software Engineer with 9+ years of experience
              in Web, Android, API Integration, Desktop application development,
              and Data Analytics. Skilled in database management, including MS
              SQL Server, MySQL, PostgreSQL, and Oracle, with 7+ years managing
              SQL databases with replication to enhance data integrity and
              redundancy. Proven success in delivering quality solutions for
              local and international enterprises.
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

      <div className="h-full lg:h-screen md:h-screen flex flex-col md:flex-row lg:flex-row bg-cyan-600 rounded-tr-3xl rounded-bl-3xl p-5"></div>
    </>
  );
}

export default Landing;
