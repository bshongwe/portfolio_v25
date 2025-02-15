import { BadgeDelta, Card, Divider, Metric, Title } from "@tremor/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const PortfolioHeader = () => {
  const projects = [
    {
      title: "Artrium",
      url: "https://artrium.vercel.app",
    },
    {
      title: "Amazon E-Commerce App",
      url: "https://amazonecommerceapp.vercel.app",
    },

    {
      title: "Ernest Portfolio Website",
      url: "https://Ernest.vercel.app",
    },
    {
      title: "Donate",
      url: "https://donateuk.vercel.app/",
    },
    {
      title: "Transaction Form",
      url: "https://transactionform.vercel.app/",
    },
    {
      title: "Jhenaidah Polytechnic Institute",
      url: "https://jhenaidahpolyasik.netlify.app",
    },
    {
      title: "Demo website - Duolancer",
      url: "https://www.duolancer.com",
    },
    {
      title: "Ernest Dual Web React",
      url: "https://Ernestdualweb.vercel.app",
    },

    {
      title: "E-Commerce React Project",
      url: "https://ecommerce9hourporject.netlify.app",
    },
    {
      title: "Place to Stay",
      url: "https://place-to-stay11.netlify.app",
    },
    {
      title: "Ernest Portfolio",
      url: "https://Ernestportfolio.netlify.app",
    },
 {
      title: "Chatiaa -a realtime chatapp like whatsapp|messenger",
      url: "https://chatiaa.vercel.app",
    },
    {
      title: "GitHub",
      url: "https://github.com/awebcode",
    },
  ];

  const getStyles = () => {
    return {
      whileHover: { scale: 1.08, opacity: 0.9 },
      whileTap: { scale: 1.1 },
      transition: {
        duration: 0.3,
       
        
        ease: "easeInOut",
      },
    };
  };

  return (
    <div className="p-2 m-2">
      <div className="container mx-auto p-2 md:p-8  rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
          <div className="">
            <h1 className="text-2xl md:text-4xl text-white font-bold mt-8 mb-4">
              Projects <Divider />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {projects.map((project, index) => (
                <motion.Card
                  key={index}
                  className="bg-gray-900 dark:bg-gray-900 p-2 md:p-4 my-3px md:my-[6px] rounded-lg shadow-lg text-white"
                  {...getStyles()}
                >
                  {/* <Metric className="text-xl font-bold mb-2">{project.title}</Metric> */}
                  <Divider>{project.title}</Divider>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-[13px]"
                  >
                    {project.url}
                  </Link>
                </motion.Card>
              ))}
            </div>
          </div>
          <div>
            {/* Experience */}

            <h1 className="text-2xl md:text-4xl text-white font-bold mt-8 mb-4">
              Experience <Divider />
            </h1>
            <p className="text-gray-400 mb-4">
              I have accumulated over 3 years of professional experience as a Full-Stack
              Software engineer. During this time, I have had the privilege of
              working with esteemed South African clients and international
              companies, contributing to cloud-based solutions and initiatives.
            </p>
            <p className="text-gray-400 mb-4">
              My responsibilities have comprise cloud computing, DevOps,
              front-end, back-end development, database management, mobile (iOS
              and android) app development and project architecture. I also
              have experience with LLM RAG SaaS product solutions.
            </p>
            {/* Education */}
            <h1 className="text-2xl md:text-4xl text-white font-bold mt-8 mb-4">
              Education <Divider />
            </h1>
            <BadgeDelta
              className="float-right  mx-[2px] my-[2px]"
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size={"xs"}
            >
              ALX Africa
            </BadgeDelta>
            <p className="text-gray-400 mb-4 text-sm">
              - Software Engineering: Applied Ai, JHB, RSA, Sept 2024
            </p>
            <BadgeDelta
              className="float-right  mx-[2px] my-[2px]"
              deltaType="unchanged"
              isIncreasePositive={true}
              size={"xs"}
            >
              Headstarter
            </BadgeDelta>
            <p className="text-gray-400 mb-4 text-sm">
              - Ai Full Stack Software Engineering: Accelerator, NYC, USA, Oct 2024 - Feb 2025
            </p>
            <BadgeDelta
              className="float-right  mx-[2px] my-[2px]"
              deltaType="unchanged"
              isIncreasePositive={true}
              size={"xs"}
            >
              Headstarter
            </BadgeDelta>
            <p className="text-gray-400 mb-4 text-sm">
              - Ai Full Stack Software Engineering: Fellowship, NYC, USA, 2024
            </p>
            <BadgeDelta
              className="float-right  mx-[2px] my-[2px]"
              deltaType="unchanged"
              size={"xs"}
            >
              ALX Africa
            </BadgeDelta>
            <p className="text-gray-400 mb-4 text-sm">
              - Software Engineering: Full Stack Web Development, JHB, RSA, Jun 2023 - Jul 2024
            </p>
            {/* Contact */}
            <h1 className="text-2xl md:text-4xl text-white font-bold mt-8 mb-4">
              Contact | HIRE <Divider />
            </h1>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-gray-400"
                  href="https://www.facebook.com/shongwe.bhekizwe/"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="text-gray-400" href="https://github.com/bshongwe">
                  Github -Previous
                </Link>
                <Link
                  className="text-gray-400"
                  href="https://github.com/bshongwe"
                >
                  Github -Latest
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400"
                  href="https://www.fiverr.com/<user>"
                >
                  Fiverr
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400"
                  href="https://www.freelancer.com/u/<user>"
                >
                  Freelancer
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400"
                  href="https://www.upwork.com/freelancers/~<user>"
                >
                  Upwork
                </Link>
              </li>
              <li className="text-sm md:text-base text-gray-400">
                <b>Phone/Whatsapp:</b> 083-431-xxxx
              </li>
              <li className="text-sm md:text-base text-gray-400">
                <b>Email:</b> shongwe.bhekizwe@gmail.com
              </li>
            </ul>
            {/* Resume */}
            <h1 className="text-2xl md:text-4xl text-white font-bold mt-8 mb-4">
              Resume <Divider />
            </h1>
            <a
              href="/cv.pdf"
              className="text-blue-500 block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </div>
          {/* <div className="text-center">
            <img
              src="/about-final.png"
              alt="Ernest Image"
              className="rounded-full mx-auto"
              style={{ maxWidth: "300px" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
  


export default PortfolioHeader;
