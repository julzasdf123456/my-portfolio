import FrontImage from "../assets/imgs/front-blob.png";

function Landing() {
  return (
    <>
      <div className="h-screen relative flex items-center px-2 md:px-10 lg:px-20">
        <img src={FrontImage} alt="" className="w-full md:w-6/12 lg:w-5/12" />
      </div>
    </>
  );
}

export default Landing;
