import Tooltip from "./Tooltip";

import c from "../assets/logos/lang/c.png";
import csharp from "../assets/logos/lang/csharp.png";
import javascript from "../assets/logos/lang/javascript.png";
import css from "../assets/logos/lang/css.svg";
import html from "../assets/logos/lang/html.png";
import php from "../assets/logos/lang/php.png";
import java from "../assets/logos/lang/java.svg";
import python from "../assets/logos/lang/python.png";
import flutter from "../assets/logos/lang/flutter.png";
import ts from "../assets/logos/lang/typescript.png";

import react from "../assets/logos/frameworks/react.webp";
import vue from "../assets/logos/frameworks/vue.png";
import laravel from "../assets/logos/frameworks/laravel.png";
import node from "../assets/logos/frameworks/node.png";
import angular from "../assets/logos/frameworks/angular.webp";
import jquery from "../assets/logos/frameworks/jquery.webp";
import wordpress from "../assets/logos/frameworks/wordpress.png";
import bootstrap from "../assets/logos/frameworks/bootstrap.png";
import tailwind from "../assets/logos/frameworks/tailwind.png";

import mssql from "../assets/logos/db/mssql.svg";
import mysql from "../assets/logos/db/mysql.png";
import postgresql from "../assets/logos/db/postgresql.png";
import mongodb from "../assets/logos/db/mongodb.png";
import maridb from "../assets/logos/db/mariadb.png";
import sqlite from "../assets/logos/db/sqlite.svg";

import apache from "../assets/logos/other-svcs/apache.png";
import nginx from "../assets/logos/other-svcs/nginx.webp";
import git from "../assets/logos/other-svcs/git.png";
import postman from "../assets/logos/other-svcs/postman.png";
import kubernetes from "../assets/logos/other-svcs/kubernetes.png";
import docker from "../assets/logos/other-svcs/docker.webp";

import powerbi from "../assets/logos/analytics/power-bi.png";
import sql from "../assets/logos/analytics/sql.png";
import googleAnalytics from "../assets/logos/analytics/google-analytics.png";
import excel from "../assets/logos/analytics/excel.png";
import tableau from "../assets/logos/analytics/tableau.png";

import make from "../assets/logos/automations/make.png";
import monday from "../assets/logos/automations/monday.avif";
import openai from "../assets/logos/automations/openai.png";
import llama from "../assets/logos/automations/llama.png";
import tensorflow from "../assets/logos/automations/tensorflow.png";
import opencv from "../assets/logos/automations/opencv.png";

function MyExpertise() {
  const languages = [
    {
      name: "Javascript",
      logo: javascript,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "10 years of experience",
    },
    {
      name: "CSS 3",
      logo: css,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "10 years of experience",
    },
    {
      name: "HTML 5",
      logo: html,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "10 years of experience",
    },
    {
      name: "Typescript",
      logo: ts,
      cssClass: "lg:h-[70px] md:h-[60px] h-[60px]",
      description: "6 years of experience",
    },
    {
      name: "PHP",
      logo: php,
      cssClass: "lg:h-[65px] md:h-[70px] h-[50px]",
      description: "10 years of experience",
    },
    {
      name: "Java",
      logo: java,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "10 years of experience",
    },
    {
      name: "Python",
      logo: python,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "8 years of experience",
    },
    {
      name: "Flutter/Dart",
      logo: flutter,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "4 years of experience",
    },
    {
      name: "C",
      logo: c,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "5 years of experience",
    },
    {
      name: "C#",
      logo: csharp,
      cssClass: "lg:h-[90px] md:h-[70px] h-[60px]",
      description: "5 years of experience",
    },
  ];

  const frameworks = [
    {
      name: "React.JS",
      logo: react,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "5 years of experience",
    },
    {
      name: "Vue.JS",
      logo: vue,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "4 years of experience",
    },
    {
      name: "Laravel",
      logo: laravel,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "6 years of experience",
    },
    {
      name: "NodeJS",
      logo: node,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "8 years of experience",
    },
    {
      name: "Angular",
      logo: angular,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "3 years of experience",
    },
    {
      name: "jQuery",
      logo: jquery,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
    {
      name: "WordPress",
      logo: wordpress,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
    {
      name: "Bootstrap CSS",
      logo: bootstrap,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
    {
      name: "Tailwind CSS",
      logo: tailwind,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "3 years of experience",
    },
  ];

  const dbs = [
    {
      name: "MS SQL",
      logo: mssql,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "8 years of experience",
    },
    {
      name: "MySQL",
      logo: mysql,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
    {
      name: "PostgreSQL",
      logo: postgresql,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "3 years of experience",
    },
    {
      name: "MongoDB",
      logo: mongodb,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "4 years of experience",
    },
    {
      name: "MariaDB",
      logo: maridb,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "2 years of experience",
    },
    {
      name: "SQLite",
      logo: sqlite,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
  ];

  const otherSvcs = [
    {
      name: "Apache",
      logo: apache,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
    {
      name: "Nginx",
      logo: nginx,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "6 years of experience",
    },
    {
      name: "Git",
      logo: git,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "8 years of experience",
    },
    {
      name: "Postman",
      logo: postman,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "6 years of experience",
    },
    {
      name: "Kubernetes",
      logo: kubernetes,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "2 years of experience",
    },
    {
      name: "Docker",
      logo: docker,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "3 years of experience",
    },
  ];

  const analytics = [
    {
      name: "Power BI",
      logo: powerbi,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "4 years of experience",
    },
    {
      name: "Python",
      logo: python,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "8 years of experience",
    },
    {
      name: "SQL",
      logo: sql,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "10 years of experience",
    },
    {
      name: "Google Analytics",
      logo: googleAnalytics,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "3 years of experience",
    },
    {
      name: "MS Excel",
      logo: excel,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "12 years of experience",
    },
    {
      name: "Tableau",
      logo: tableau,
      cssClass: "lg:h-[80px] md:h-[60px] h-[55px]",
      description: "2 years of experience",
    },
  ];

  const aiauto = [
    {
      name: "Make.com (Integromat)",
      logo: make,
      cssClass: "lg:h-[70px] md:h-[50px] h-[45px]",
      description: "3 years of experience",
    },
    {
      name: "Monday.com CRM & Automations",
      logo: monday,
      cssClass: "lg:h-[70px] md:h-[50px] h-[45px]",
      description: "2 years of experience",
    },
    {
      name: "Open AI Integrations",
      logo: openai,
      cssClass: "lg:h-[70px] md:h-[50px] h-[45px]",
      description: "1.5 years of experience",
    },
    {
      name: "Llama 3 by Meta",
      logo: llama,
      cssClass: "lg:h-[50px] md:h-[40px] h-[35px]",
      description: "1 year of experience",
    },
    {
      name: "Tensorflow",
      logo: tensorflow,
      cssClass: "lg:h-[70px] md:h-[50px] h-[45px]",
      description: "3 years of experience",
    },
    {
      name: "Open CV",
      logo: opencv,
      cssClass: "lg:h-[70px] md:h-[50px] h-[45px]",
      description: "4 years of experience",
    },
  ];

  return (
    <>
      {/* PROGRAMMING SKILLS */}
      <div className="flex flex-col w-full justify-center bg-gray-200 rounded-tr-[200px] rounded-bl-[200px] md:rounded-bl-[100px] lg:rounded-bl-[200px] h-full md:h-full lg:min-h-screen lg:min-h-[500px] md:min-h-[100px] min-h-[700px] py-10 px-10">
        <h1 className="text-3xl lg:text-center md:text-center lg:text-3xl md:text-2xl font-bold text-cyan-700 pt-3">
          My Expertise
        </h1>

        {/* TOP */}
        <div className="flex-1 flex flex-col lg:flex-row md:flex-row pt-10 gap-16">
          {/* Languages */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-center text-opacity-90">
              Programming Languages
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-x-8 gap-y-2">
              {languages.map((icon) => (
                <Tooltip
                  text={icon.name}
                  shouldShow={true}
                  otherClass="text-white font-bold"
                  description={icon.description}
                >
                  <div className="hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    <img
                      src={icon.logo}
                      alt={icon.name}
                      className={icon.cssClass}
                      title={icon.name}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-center text-opacity-90">
              Frameworks and Libraries
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-x-8 gap-y-2">
              {frameworks.map((icon) => (
                <Tooltip
                  text={icon.name}
                  shouldShow={true}
                  otherClass="text-white font-bold"
                  description={icon.description}
                >
                  <div className="hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    <img
                      src={icon.logo}
                      alt={icon.name}
                      className={icon.cssClass}
                      title={icon.name}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* MID */}
        <div className="flex-1 flex flex-col lg:flex-row md:flex-row pt-10 gap-16">
          {/* Backend Databases */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-center text-opacity-90">
              Backend Databases
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-x-8 gap-y-2">
              {dbs.map((icon) => (
                <Tooltip
                  text={icon.name}
                  shouldShow={true}
                  otherClass="text-white font-bold"
                  description={icon.description}
                >
                  <div className="hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    <img
                      src={icon.logo}
                      alt={icon.name}
                      className={icon.cssClass}
                      title={icon.name}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-center text-opacity-90">
              Backend Services, Integration, and Others
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-x-8 gap-y-2">
              {otherSvcs.map((icon) => (
                <Tooltip
                  text={icon.name}
                  shouldShow={true}
                  otherClass="text-white font-bold"
                  description={icon.description}
                >
                  <div className="hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    <img
                      src={icon.logo}
                      alt={icon.name}
                      className={icon.cssClass}
                      title={icon.name}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex-1 flex flex-col lg:flex-row md:flex-row pt-10 gap-16">
          {/* Data Science and Analytics */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-center text-opacity-90">
              Data Science and Analytics
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-x-8 gap-y-2">
              {analytics.map((icon) => (
                <Tooltip
                  text={icon.name}
                  shouldShow={true}
                  otherClass="text-white font-bold"
                  description={icon.description}
                >
                  <div className="hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    <img
                      src={icon.logo}
                      alt={icon.name}
                      className={icon.cssClass}
                      title={icon.name}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Automation */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-800 text-center text-opacity-90">
              Automation, Machine Learning, and AI
            </p>

            <div className="flex-1 flex flex-wrap justify-center pt-10 gap-x-8 gap-y-2">
              {aiauto.map((icon) => (
                <Tooltip
                  text={icon.name}
                  shouldShow={true}
                  otherClass="text-white font-bold"
                  description={icon.description}
                >
                  <div className="hover:drop-shadow-xl transition-all duration-500 ease-in-out">
                    <img
                      src={icon.logo}
                      alt={icon.name}
                      className={icon.cssClass}
                      title={icon.name}
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyExpertise;
