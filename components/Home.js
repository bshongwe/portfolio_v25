import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Common from "../common/Common";
import Contact from "../portfolio/contact/Contact";
import About from "./About/About";
import Blog from "./Blogs/Blogs";
import Experience from "./Experience/Experience";
import Navbar from "./Navbar/Navbar";

import ThemeAction from "../actions/ThemeAction";
import Portfolio from "./portfolio/Portfolio";
import Pricing from "./pricing/Pricing";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./footer/Footer"));
import { LoginWithOtherMethod } from "@/portfolio/contact/LoginWithOtherMethod";
import FAQ from "./faq";
import Study from "./study/Study";
import Service from "./Services/Service";
import MoveRocket from "./magic-section/MoveRocket";
import PortfolioHeader from "@/portfolio/About/Sec2";
const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const themeReducer = useSelector((s) => s.Theme);
  const { user } = useSelector((s) => s.user);
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <div className={`${themeReducer.mode} ${themeReducer.color}`}>
        <Navbar />
        <Common
          ty="Html."
          ty1="Css."
          ty1_1="Bootstrap 5"
          ty2="Tailwind Css."
          ty3="Javascript."
          ty4="React Js."
          ty4_4="Next Js."
          ty5="Node Js."
          ty6="Mongo DB."
          title1="Hello There!"
          title2="Welcome To Ernest"
          span2="2.0"
          title3={
            <>
              <span>Full-Stack</span> Dual Website
            </>
          }
          span3="NEXT.JS"
          title4="I am a Full-Stack Web Application Developer"
          span4="with 4 years of experience."
          span5="Client satisfaction is my first priority, and let me claim that we are best at it. I believe in open communication, transparency, and exceeding expectations."
          btntext="Hire Me"
          btnloc="https://www.facebook.com/shongwe.bhekizwe/"
          img="/home/1.png" //asik3.jpg
        />
        {/* <MoveRocket/> */}

        <About />
        {/* <PortfolioHeader /> */}
        <Study />
        <Service />

        <Experience />
        <Portfolio />
        {/* <Blog /> */}
        {/* <FAQ/> */}
        {/* <Pricing /> */}
        <Contact />
        {/* <LoginWithOtherMethod/> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
