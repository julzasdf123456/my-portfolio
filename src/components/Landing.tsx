import FrontImage from "../assets/imgs/front-blob.png";

function Landing() {
  return (
    <>
      <div className="h-screen flex">
        <div className="flex-none flex items-center w-screen md:w-6/12 lg:w-5/12 px-2 md:px-5 lg:px-12">
          <img src={FrontImage} alt="" className="w-screen" />
        </div>

        <div className="flex-1 flex items-center px-2 md:px-5 lg:px-12">
          <h1>Hi, I'm a</h1>
        </div>
      </div>
    </>
  );
}

export default Landing;
