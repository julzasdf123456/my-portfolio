import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function TopNav() {
  return (
    <>
      <div className="h-14 px-10 flex flex-row">
        <div className="flex-none flex items-center pt-3">
          <h1 className="text-xl text-white font-bold px-3 py-2 rounded-md bg-cyan-700 drop-shadow-md">
            JL
          </h1>

          <h1 className="text-white text-opacity-80 text-xl font-bold pl-3">
            Julio Lopez
          </h1>
        </div>
        <div className="flex-1 hidden sm:block">
          <ul className="h-full flex flex-row items-center justify-center text-white text-opacity-70">
            <li>
              <a
                className="p-4 border-b-2 border-white border-opacity-70"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a className="p-4" href="#">
                Software Development
              </a>
            </li>
            <li>
              <a className="p-4" href="#">
                CGI & VFX
              </a>
            </li>
            <li>
              <a className="p-4" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-none sm:flex-1 flex flex-row items-center justify-end">
          <a href="#" className="p-3">
            <FaFacebook className="text-white text-opacity-75" />
          </a>
          <a href="#" className="p-3">
            <FaLinkedin className="text-white text-opacity-75" />
          </a>
          <a href="#" className="p-3">
            <FaTiktok className="text-white text-opacity-75" />
          </a>
        </div>
      </div>
    </>
  );
}

export default TopNav;
