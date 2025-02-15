import PageTransition from "@/components/pageTransition";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import "./about.css";
import Tilt from "react-parallax-tilt";
const About = () => {
   const [btn, setBtn] = useState(false);
   useEffect(() => {
     if (window.innerWidth <= 768) {
       setBtn(true);
     }
   }, [btn]);
  return (
    <>
      {btn ? (
        <div className="about" id="about">
          <div className="container">
            <Tilt>
              <motion.h1
                className="main-title main-title-about"
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
                <span>About</span> Me<span>!</span>
              </motion.h1>
            </Tilt>
            <div className="about-main">
              <motion.div
                className="about-img-port"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  opacity: { duration: 1 },
                  y: { type: "spring", stiffness: 60 },
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              >
                <Tilt>
                  {" "}
                  <img src="/about-final.png" alt="" />
                </Tilt>
                <div className="about-completed-sec">
                  <motion.div
                    className="about-completed"
                    whileHover={{ scale: 0.8, transition: "none" }}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      opacity: { duration: 1 },
                      y: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  >
                    <h1>Experience.</h1>
                    <p>
                      4Years + <span>Experience</span>
                    </p>
                  </motion.div>
                  <motion.div
                    className="about-completed"
                    whileHover={{ scale: 0.8, transition: "none" }}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      opacity: { duration: 1 },
                      y: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  >
                    <h1>Completed.</h1>
                    <p>
                      1000 + <span>Projects</span>
                    </p>
                  </motion.div>
                  <motion.div
                    className="about-completed"
                    whileHover={{ scale: 0.8, transition: "none" }}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7,
                      opacity: { duration: 1 },
                      y: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  >
                    <h1>Support</h1>
                    <p>
                      24/ <span>7 online support</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              <div className="about-content-port">
                <p>
                  Hello I <span> Am</span>
                </p>
                <h3>Ernest Bhekizwe Shongwe</h3>
                <h1>
                  Full-Stack Software Engineer <span>AWS | Azure</span>
                </h1>

                <p className="normal-case">
                  I am a Certified Full Stack Software Engineer with 3+ years
                  work experience and core expertise in developing
                  high-quality, responsive web and mobile applications using
                  Next js, React.js and other frontend frameworks, Node.js,
                  FastAPI, Flask, Nest.js, and other backend frameworks. I also
                  have experience in cloud computing platforms like AWS, Azure,
                  and Google Cloud Platform, working on LLM RAG SaaS solutions.
                </p>

                  <ul>
                  <li><span>My Development Process.</span></li>
                  <li>100% customer satisfaction.</li>
                  <li>Responsive design.</li>
                  <li>Well formatted code.</li>
                  <li>Well structured code.</li>
                  <li>Reusable components.</li>
                  <li> High-Quality and Pixel Perfect Design.</li>
                  <li>24/7 availability</li>
                  <li>Excellent customer support</li>
                </ul>
                <ul>
                  <li><span>Why choose me?</span></li>
                  <li>High customer satisfaction rate</li>
                  <li>Seamless responsive designs with advanced SEO ratings</li>
                  <li>Clean, structured and maintainable code</li>
                  <li>Affordable rates</li>
                  <li>Record time product delivery</li>
                  <li>24/7 availability</li>
                  <li>Excellent customer support</li>
                </ul>
                <p className="warn">
                  <span>Note:</span> Kindly describe your project before
                  confirming an order. Use the contact form below to reach me.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="about" id="about">
          <div className="container">
            <Tilt>
              {" "}
              <motion.h1
                className="main-title main-title-about"
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
                <span>About</span> Me<span>!</span>
              </motion.h1>
            </Tilt>
            <div className="about-main">
              <div className="about-img-port">
                <Tilt>
                  <motion.img
                    src="/about-final.png"
                    alt=""
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      opacity: { duration: 1 },
                      x: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                  />
                </Tilt>
                <div className="about-completed-sec">
                  <motion.div
                    className="about-completed"
                    whileHover={{ scale: 0.8, transition: "none" }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      opacity: { duration: 1 },
                      x: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  >
                    <h1>Experience</h1>
                    <p>
                      3 Years + <span>Experience</span>
                    </p>
                  </motion.div>
                  <motion.div
                    className="about-completed"
                    whileHover={{ scale: 0.8, transition: "none" }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      opacity: { duration: 1 },
                      x: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  >
                    <h1>Completed and Delivered</h1>
                    <p>
                      200 + <span>Client Projects</span>
                    </p>
                  </motion.div>
                  <motion.div
                    className="about-completed block"
                    whileHover={{ scale: 0.8, transition: "none" }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      opacity: { duration: 1 },
                      x: { type: "spring", stiffness: 60 },
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  >
                    <h1>Support</h1>
                    <p>
                      24/ <span>7 online support</span>
                    </p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="about-content-port"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  opacity: { duration: 1 },
                  x: { type: "spring", stiffness: 60 },
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              >
                <Tilt>
                  <p>
                    Hello I <span> Am</span>
                  </p>
                  <h3>Ernest Bhekizwe Shongwe</h3>
                  <h1>
                    Full-Stack Software Engineer <span>AWS | Azure</span>
                  </h1>

                  <p className="normal-case text-gray-300">
                    I am a Certified Full Stack Software Engineer with 3+ years
                    work experience and core expertise in developing
                    high-quality, responsive web and mobile applications using
                    Next js, React.js and other frontend frameworks, Node.js,
                    FastAPI, Flask, Nest.js, and other backend frameworks. I also
                    have experience in cloud computing platforms like AWS, Azure,
                    and Google Cloud Platform, working on LLM RAG SaaS solutions.
                  </p>
                  
                  <ul>
                  <span>My Development Process.</span>
                  <li>100% customer satisfaction.</li>
                  <li>Responsive design.</li>
                  <li>Well formatted code.</li>
                  <li>Well structured code.</li>
                  <li>Reusable components.</li>
                  <li> High-Quality and Pixel Perfect Design.</li>
                  <li>24/7 availability</li>
                  <li>Excellent customer support</li>
                </ul>
                <ul>
                  <span>Why choose me?</span>
                  <li>High customer satisfaction rate</li>
                  <li>Seamless responsive designs with advanced SEO ratings</li>
                  <li>Clean, structured and maintainable code</li>
                  <li>Affordable rates</li>
                  <li>Record time product delivery</li>
                  <li>24/7 availability</li>
                  <li>Excellent customer support</li>
                </ul>
                <p className="warn">
                  <span>Note:</span> Kindly describe your project before
                  confirming an order. Use the contact form below to reach me.
                </p>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
