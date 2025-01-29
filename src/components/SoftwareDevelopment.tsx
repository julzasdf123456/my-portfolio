import TopNav from "./TopNav";
import { useState } from "react";
import { motion } from "framer-motion";

import hrsPromo from "../assets/imgs/hrs/promo-bg.png";
import batchEduPromo from "../assets/imgs/batch/promo1.png";
import batchIDPromo from "../assets/imgs/batch/promo-batch.png";
import batchEDMSPromo from "../assets/imgs/edms/promo-edms.png";

import blci from "../assets/imgs/clients/blci.webp";
import boheco1 from "../assets/imgs/clients/boheco1.png";
import hca from "../assets/imgs/clients/hca.png";
import svi from "../assets/imgs/clients/svi.png";

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
      img: batchEDMSPromo,
      title: "EDMS",
      description:
        "Integrated System for Electric Distribution Utilities and Companies",
      blue: "Electricity Distribution",
      white: "Management System",
      exerpt:
        "An integrated system which includes a full CRM, Billing, Cashiering, APIs, and several mobile apps, tailored for Electric Companies and Cooperatives. Mainly runs on Laravel, NodeJS, and Java as the backend, MS SQL for the database, and Vue.js and ReactJS on the frontend. It's made to be modular for the companies to have the ability to only purchase the modules that they need and afford.",
    },
    {
      id: 2,
      img: hrsPromo,
      title: "EMS",
      description:
        "Employee Management System - HR & Payroll, with a thin mobile app",
      blue: "Employee",
      white: "Management System",
      exerpt:
        "An integrated system comprised of HR, Payroll, and Employee Management modules. It's a full-stack system, run by Laravel (PHP), NodeJS, and Python in the backend, Vue.js and ReactJS in frontend, and MS SQL as it's database. It also has a mobile app bundled, made with Flutter (Dart), for the users (employees) to easily access the full capabilities of the system in mobile. The system can connect to any Fingerprint Biometric devices in the means of retrieving an employees attendance through Python API.",
    },
    {
      id: 3,
      img: batchEduPromo,
      title: "Batch.edu",
      description: "Enrollment, Cashiering and Grading system for Schools",
      blue: "Batch.edu",
      white: "School Management System",
      exerpt:
        "A system particularly tailored for High Schools that offers Enrollment, Cashiering, and Grading systems for the ease of teachers and parents alike. It runs mainly on Laravel, with Vue.js and ReactJS in the frontend, and MS SQL as it's main database. The system is already capable of producing reports formatted through the Philippines' Department of Education requirements like SF1, SF2, SF10, and others.",
    },
    {
      id: 4,
      img: batchIDPromo,
      title: "batch.ID",
      description: "ID Attendance System with SMS information capabilities",
      blue: "batch.ID",
      white: "ID Attendance",
      exerpt:
        "An ID system that integrates with Batch.edu or the EMS. This system can scan Barcodes, QR Codes, and RFID, through dedicated scanning devices. The kiosk (machine itself), which is also part of the system, and is mainly a DIY project composed of a modular mini-PC and a thin monitor slapped into a custom-fabricated standee. The system runs on Dart (Flutter), which connects to the Laravel backend of the Batch.edu or the EMS.",
    },
    // {
    //   id: 5,
    //   img: "null",
    //   title: "Card 5",
    //   description: "This is card 5",
    //   blue: "",
    //   white: "",
    //   exerpt: "",
    // },
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
        <div className="relative overflow-hidden h-full lg:h-screen md:h-screen lg:min-h-full md:h-screen md:min-h-full min-h-[700px]">
          <motion.img
            className="absolute top-0 left-0 h-[2/6] object-cover opacity-5 hidden sm:block"
            src={cards[currentIndex].img}
            key={cards[currentIndex].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />

          {/* CONTENT */}
          <div className="h-full lg:h-screen lg:min-h-[700px] md:h-screen md:min-h-[740px] flex flex-col md:flex-row lg:flex-row">
            {/* TITLES - shown on LG */}
            <div className="flex-none z-10 lg:flex md:flex flex-col min-h-full justify-center w-screen md:w-6/12 lg:w-5/12 px-2 md:px-5 lg:px-12 hidden sm:block">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={cards[currentIndex].blue}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-6xl md:text-4xl font-bold text-white pt-3"
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
                className="text-5xl lg:text-5xl md:text-4xl font-bold text-white"
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
            <div className="flex-1 h-full pl-10 md:pl-5 lg:pl-12 py-4">
              <div className="flex h-full flex-col justify-center">
                <div className="relative min-h-[50dvh] h-full w-full flex flex-col items-start justify-center">
                  {/* Wrapper */}
                  <div className="flex overflow-hidden w-full h-[58dvh] min-h-[360px]">
                    {/* Slider */}
                    <div
                      className="flex h-full items-center justify-center transition-transform duration-[1s] gap-x-8"
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
                            className={`flex-shrink-0 h-5/6 transform transition-all duration-[0.8s] ${
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

            {/* TITLES - shown on SM */}
            <div className="flex-none z-10 flex flex-col justify-center w-screen px-10 block sm:hidden">
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
          </div>
        </div>
      </div>

      {/* CLIENTS */}
      <div className="flex flex-col w-full justify-center bg-gray-200 rounded-tr-[200px] rounded-bl-[200px] md:rounded-bl-[100px] lg:rounded-bl-[200px] lg:py-14 py-10 lg:px-16 px-10">
        <h1 className="text-3xl lg:text-center md:text-center lg:text-3xl md:text-2xl font-bold text-cyan-700 pt-3">
          Clients
        </h1>

        <div className="flex flex-wrap justify-center pt-10 gap-x-20 gap-y-2">
          <img src={blci} className="lg:h-[90px] md:h-[70px] h-[60px]" />
          <img src={boheco1} className="lg:h-[95px] md:h-[70px] h-[60px]" />
          <img src={hca} className="lg:h-[98px] md:h-[70px] h-[60px]" />
          <img src={svi} className="lg:h-[90px] md:h-[70px] h-[60px]" />
        </div>
      </div>
    </>
  );
}

export default SoftwareDevelopment;
