import { motion } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import "./about.css";
import Tilt from "react-parallax-tilt";
import MobileRockt from "../magic-section/MobileRok";
import PortfolioHeader from "@/portfolio/About/Sec2";
const About = () => {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBtn(true);
    }
  }, [btn]);

  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",

    "Figma",
    "jQuery",
    "Ember.js",
    "Three.js",
    "Material-UI",
    "Ant Design",
    "Styled Components",
    "Emotion",
    "Semantic UI",
    "Chakra UI",
    "ShadCN UI",
    "Tremor",
    "Swiper",
    "React Spring",
    "Aos",
    "Framer Motion",
    "GSAP",
    "Anime.js",
    "React Transition Group",
    "React-Motion",

    "Lottie for React",
    "Chart.Js",

    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Next.js",

    "React",
    "Node.js",
    "Express.js",
    "Socket.Io",
    "ChatEngine.Io",
    "Sass",
    "Redux",
    "React-Query",
    "Rtk-Query",
    "Crypto",
    "Tron-Trc20",
    "Firebase",
    "Cloudinary",
    "Google Cloud",
    "Git",
    "Github",
    "TypeScript",
    "RESTful APIs",
    "Jest",
    "Webpack",
    "AWS",
    "Heroku",
    "Netlify",
    "Vercel",
    "Cyclic",
    "Render",
    "Cpanel",
    "Hostinger",
    "Vps",
    // Add more skills as needed
  ];
  const getDesktopAnimationStyles = (index) => {
    const delay = 0.1 * index; // Adjust the delay based on the index

    return {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 1.2 },
      initial: {
        opacity: 0,
        scale: 0,
        // y: btn ? 50 : 0, // Apply y: 50 if btn is true, otherwise y: 0
        y: 10, // Apply y: 50 if btn is true, otherwise y: 0
        x: 10, // Apply x: 0 if btn is true, otherwise x: 500
      },
      animate: {
        //add whileInview And see magic
        opacity: 1,
        scale: 1,
        y: btn ? 40 : 0,
        x: btn ? 0 : 20,
        transition: {
          delay, // Use the calculated delay
          duration: 0.5, // Added duration for whileInView transition
          type: "spring", // Added spring animation
          stiffness: 200, // Adjust spring stiffness
          damping: 10, // Adjust spring damping
        },
      },
      transition: {
        duration: 0.5, // Adjust duration for initial and whileTap transitions
        type: "spring", // Added spring animation
        stiffness: 200, // Adjust spring stiffness
        damping: 10, // Adjust spring damping
      },
    };
  };
  const getMobileAnimationStyles = (index, btn) => {
    const delay = 0.1 * index;

    return {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 1.2 },
      initial: {
        opacity: 0,
        scale: 0,
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          delay,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 10,
        },
      },
    };
  };

  const getAnimationStyles = btn ? getMobileAnimationStyles : getDesktopAnimationStyles;

  return (
    <>
      {/* <Head>
        <title>Ernest -About</title>
      </Head> */}
      {btn ? (
        <div className="about">
          <div className="container">
            <MobileRockt />
            <Tilt>
              {" "}
              <motion.h1
                className="main-title"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scaleX: 1.2 }}
              >
                {" "}
                <span>Who</span> AM I<span>?</span>
              </motion.h1>
            </Tilt>

            <div className="about-main">
              <motion.div
                className="about-img"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.06 }}
              >
                {/* <img src="/blob1.svg" alt="" className="asik-blob" /> */}
                <Tilt>
                  <img src="/gif/3.gif" alt="" className="asik-img" />
                </Tilt>{" "}
                {/*asik6.jpg*/}
              </motion.div>
              <Tilt>
                <div className="about-content">
                  <p>Hi I Am.</p>
                  <h3>Ernest Bhekizwe Shongwe</h3>
                  <h1>
                    <span>Full-Stack</span> Software Engineer <span>AWS | Azure</span>
                  </h1>

                  <p className="normal-case text-gray-300">
                    I am an experienced full-stack software engineer and SaaS
                    developer with 3+ years of experience. I have worked with
                    multiple tech stacks to build web and mobile, cloud-based
                    solutions. As a professional Software Dev, learning new
                    technology is a passion. I am currently working on GenAi
                    LLM RAG cloud-based fintech solutions.
                  </p>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      ) : (
        <div className="about">
          <div className="container">
            <Tilt>
              {" "}
              <motion.h1
                className="main-title"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ scaleX: 1.2 }}
              >
                <span>Who</span> AM I<span>?</span>
              </motion.h1>
            </Tilt>
            <div className="about-main">
              <motion.div
                className="about-img"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  opacity: { duration: 1 },
                  x: { type: "spring", stiffness: 60 },
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {/* <img src="/blob1.svg" alt="" className="asik-blob" /> */}
                <Tilt>
                  {" "}
                  <img src="/gif/3.gif" alt="" className="asik-img" />
                </Tilt>{" "}
                {/*asik6.jpg*/}
              </motion.div>

              <motion.div
                className="about-content"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  opacity: { duration: 1 },
                  x: { type: "spring", stiffness: 60 },
                  duration: 0.9,
                  ease: "easeOut",
                }}
              >
                <Tilt>
                  <p>Hi I Am.</p>
                  <h3>Ernest Bhekizwe Shongwe</h3>
                  <h1>
                    <span>Full-Stack</span> Software Engineer <span>AWS | Azure</span>
                  </h1>

                  <p className="normal-case text-gray-300">
                    I am an experienced full-stack software engineer and SaaS
                    developer with 3+ years of experience. I have worked with
                    multiple tech stacks to build web and mobile, cloud-based
                    solutions. As a professional Software Dev, learning new
                    technology is a passion. I am currently working on GenAi
                    LLM RAG cloud-based fintech solutions.
                  </p>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
      )}
      <PortfolioHeader />
      <motion.h1
        className={`main-title`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          opacity: { duration: 1 },
          y: { type: "spring", stiffness: 60 },
          duration: 0.9,
          ease: "easeInOut",
        }}
        whileHover={{ scaleX: 1.2 }}
      >
        <span>My Skills.</span>
      </motion.h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div key={index} className="skillX" {...getAnimationStyles(index, btn)}>
            {skill}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
