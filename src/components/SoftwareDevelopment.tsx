import TopNav from "./TopNav";
import { useState } from "react";
import { motion } from "framer-motion";

import hrsPromo from "../assets/imgs/hrs/promo-bg.png";
import batchEduPromo from "../assets/imgs/batch/promo1.png";

interface Card {
  id: number;
  img: string;
  title: string;
  description: string;
  blue: string;
  white: string;
  exerpt: string;
}

function SoftwareDevelopment() {
  const cards: Card[] = [
    {
      id: 1,
      img: hrsPromo,
      title: "EMS",
      description: "Employee Management System - HR & Payroll",
      blue: "Employee",
      white: "Management System",
      exerpt:
        "An integrated system comprised of HR, Payroll, and Employee Management modules. It's a full-stack system, run by Laravel (PHP), Node, and Python in the backend, Vue.js and ReactJS in frontend, and MS SQL as it's database. It also has a mobile app bundled, made with Flutter (Dart), for the users (employees) to easily access the full capabilities of the system in mobile. The system can connect to any Fingerprint Biometric devices in the means of retrieving an employees attendance through Python API.",
    },
    {
      id: 2,
      img: batchEduPromo,
      title: "Batch.edu",
      description: "Enrollment, Cashiering and Grading system for Schools",
      blue: "Batch.edu",
      white: "School Management System",
      exerpt:
        "A system particularly tailored for High Schools that offers Enrollment, Cashiering, and Grading systems for the ease of teachers and parents alike. It runs mainly on Laravel, with Vue.js and ReactJS in the frontend, and MS SQL as it's main database. The system is already capable of producing reports formatted through the Philippines' Department of Education requirements like SF1, SF2, SF10, and others.",
    },
    {
      id: 3,
      img: "null",
      title: "Card 3",
      description: "This is card 3",
      blue: "",
      white: "",
      exerpt: "",
    },
    {
      id: 4,
      img: "null",
      title: "Card 4",
      description: "This is card 4",
      blue: "",
      white: "",
      exerpt: "",
    },
    {
      id: 5,
      img: "null",
      title: "Card 5",
      description: "This is card 5",
      blue: "",
      white: "",
      exerpt: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Index of the first visible card
  const cardWidth = 250; // Width of each card (in pixels)

  const handleNext = () => {
    if (currentIndex < cards.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <TopNav />

      {/* LANDING */}
      <div className="h-full lg:h-screen lg:min-h-[700px] md:h-screen md:min-h-[740px] flex flex-col md:flex-row lg:flex-row">
        <div className="relative overflow-hidden h-full lg:h-screen md:h-screen lg:min-h-[500px] md:h-screen md:min-h-[100px] min-h-[700px]">
          <motion.img
            className="absolute top-0 left-0 h-[2/6] object-cover opacity-10"
            src={cards[currentIndex].img}
            key={cards[currentIndex].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* CONTENT */}
          <div className="h-full lg:h-screen lg:min-h-[700px] md:h-screen md:min-h-[740px] flex flex-col md:flex-row lg:flex-row">
            {/* TITLES */}
            <div className="flex-none z-10 flex flex-col justify-center w-screen md:w-6/12 lg:w-5/12 px-2 md:px-5 lg:px-12">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={cards[currentIndex].blue}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-6xl md:text-6xl font-bold text-white pt-3"
              >
                <span className="text-cyan-300">
                  {cards[currentIndex].blue}
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={cards[currentIndex].white}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-5xl md:text-6xl font-bold text-white"
              >
                {cards[currentIndex].white}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={cards[currentIndex].id}
                transition={{ duration: 0.6 }}
                className="pt-4 text-white text-opacity-75"
              >
                {cards[currentIndex].exerpt}
              </motion.p>

              <div className="flex flex-row pt-5 justify-start">
                <a
                  className="ml-3 border-2 border-cyan-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-cyan-600"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* CARDS */}
            <div className="flex-1 h-full px-10 md:px-5 lg:px-12 py-4">
              <div className="flex h-full flex-col justify-center">
                <div className="relative min-h-[50dvh] h-full w-full flex flex-col items-start justify-center">
                  {/* Wrapper */}
                  <div className="flex overflow-hidden w-full max-w-3xl h-[58dvh] min-h-[350px]">
                    {/* Slider */}
                    <div
                      className="flex h-full items-center justify-center transition-transform duration-500 gap-x-8"
                      style={{
                        transform: `translateX(${
                          -(currentIndex * cardWidth) + (15 - currentIndex * 30)
                        }px)`,
                      }}
                    >
                      {cards.map((card, index) => {
                        const isActive = index === currentIndex;

                        return (
                          <div
                            key={card.id}
                            className={`flex-shrink-0 h-5/6 transform transition-all duration-500 ${
                              isActive
                                ? "scale-110 z-10"
                                : "scale-100 opacity-50"
                            }`}
                            style={{ width: `${cardWidth}px` }}
                          >
                            <div className="bg-white h-full shadow-lg rounded-2xl overflow-hidden flex flex-col">
                              <div className="flex-1 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                                <img
                                  src={card.img}
                                  alt=""
                                  className="w-full h-48 object-cover"
                                />
                              </div>

                              <div className="p-4 flex-1">
                                <h2 className="text-lg text-purple-900 font-bold">
                                  {card.title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-row gap-1">
                    {/* Controls */}
                    <button
                      className={`bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow w-[40px] h-[40px] transition-all duration-300 ease-in-out ${
                        currentIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                    >
                      &#8249;
                    </button>
                    <button
                      className={`bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow w-[40px] h-[40px] transition-all duration-300 ease-in-out ${
                        currentIndex >= cards.length
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={handleNext}
                      disabled={currentIndex >= cards.length}
                    >
                      &#8250;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareDevelopment;
