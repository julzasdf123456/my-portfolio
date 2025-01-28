import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="relative">
        {/* Overlay */}
        {isOpen && (
          <div
            onClick={closeDrawer}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
        )}

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="p-4 space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500"
                onClick={closeDrawer}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500"
                onClick={closeDrawer}
              >
                Software Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500"
                onClick={closeDrawer}
              >
                CGI & VFX
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500"
                onClick={closeDrawer}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-14 px-10 flex flex-nowrap flex-row">
        <div className="flex-none flex items-center pt-3">
          <h1 className="text-xl text-white font-bold px-3 py-2 rounded-md bg-cyan-700 drop-shadow-md">
            JL
          </h1>

          <h1 className="text-white text-opacity-80 text-xl font-bold pl-3">
            Julio Lopez
          </h1>
        </div>
        <div className="flex-none lg:flex-1 px-5 hidden md:block invisible md:visible lg:visible">
          <ul className="h-full flex flex-nowrap flex-row items-center justify-center text-white text-opacity-70">
            <li>
              <Link
                to="/"
                className={`p-4 ${
                  isActive("/")
                    ? "border-b-2 border-white border-opacity-70"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/software-development"
                className={`p-4 ${
                  isActive("/software-development")
                    ? "border-b-2 border-white border-opacity-70"
                    : ""
                }`}
              >
                Software Projects
              </Link>
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
        <div className="flex-1 lg:flex-none md:flex-1 sm:flex-1 flex flex-nowrap flex-row items-center justify-end">
          <a href="#" className="p-3">
            <FaFacebook className="text-white text-opacity-75 hidden md:block" />
          </a>
          <a href="#" className="p-3">
            <FaLinkedin className="text-white text-opacity-75 hidden md:block" />
          </a>
          <a href="#" className="p-3">
            <FaTiktok className="text-white text-opacity-75 hidden md:block" />
          </a>
          <button
            onClick={toggleDrawer}
            className="p-4 text-white z-50 block md:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </>
  );
}

export default TopNav;
