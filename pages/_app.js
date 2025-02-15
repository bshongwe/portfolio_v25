import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import store from "@/Store";
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ThemeAction from "../actions/ThemeAction";
import ChatProvider from "@/message/Context/ChatProvider";
import { SessionProvider } from "next-auth/react";
import Mouse from "./mouse";
import Dropdown from "@/components/Navbar/Dropdown";
import { loadUser } from "@/actions/userAction";
import axios from "axios";
export default function App({ Component, pageProps }) {
  const themeReducer = store.getState("Theme").Theme;
  const user = store.getState().user?.user;

  const [loading, setLoading] = useState(false);

  const [user1, setUser] = useState();
  const fetchUser = async () => {
    const { data } = await axios.get("/api/auth/userDetails");

    setUser(data.user);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    store.dispatch(ThemeAction.setMode(themeClass));

    store.dispatch(ThemeAction.setColor(colorClass));
    let btnmove = document.querySelector(".common-btn");
    console.log("btnmove", btnmove);
    btnmove?.addEventListener("mousemove", (e) => {
      let rect = e.target?.getBoundingClientRect();
      let x = e.clientX - rect.left;
      btnmove.style.setProperty("--x", x + "deg");
    });
    store.dispatch(loadUser());
  }, [store.dispatch]);
  useEffect(() => {
    const buttons = document.querySelectorAll(".common-btn");
    buttons.forEach((button) => {
      button?.addEventListener("mousemove", handleMouseMove);
      return () => button?.removeEventListener("mousemove", handleMouseMove);
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    e.target.style.setProperty("--x", x + "deg");
  };
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setActive(true);
    }
  }, [active]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
<meta name="google-adsense-account" content="ca-pub-5613276644947970"/>
        <meta
          name="og:description"
          content="Welcome to the Ernest Portfolio Website: Where Creativity Meets Technology. Explore the dynamic world of Ernest, a fusion of personal portfolio and captivating blog. Discover stunning projects, insightful articles, and the talents of Ernest in web development, design, coding, and more. Immerse yourself in a digital experience that showcases the intersection of creativity and technology."
        />
        <meta
          name="keywords"
          content="Ernest, Ernest, Ernest, Ernest, ernestshong.me, ernestshong.me, Ernest Bhekizwe, ernest bhekizwe shongwe, ernest.vercel.app, Ernest vercel, Ernest personal portfolio, Ernest portfolio, Ernest blog"
        />
        <meta
          name="keywords"
          content="Ernest, Ernest next.js, ernest, react, node.js, next.js, mern, graphql, typescript, css, html, design, development, education, career, experience, skills, portfolio, blog, facebook/Ernest, fiverr/Ernest, freelancer/Ernest, github/Ernest, Ernest/github"
        />
        <meta
          name="keywords"
          content="Ernest Portfolio and Blog Website, Ernest Portfolio Website, Ernest's Website, Ernest's Portfolio and Blog, Ernest's Personal Website, Ernest's Blog, Ernest Portfolio Website, Ernest's Portfolio and Blog, Ernest Personal Website"
        />
        <meta
          name="keywords"
          content="Ernest portfolio website,Ernest portfolio, portfolio website, blog, personal blog, web developer, software engineer, developer, engineer, computer science, technology, programming, coding, js, next.js, react, node.js, graphql, typescript, css, html, design, development, education, career, experience, skills, Ernest/home, Ernest/portfolio, Ernest/blog, Ernest/account, google, google bird, ai, artificial intelligence, web development, web design, best website, showcase, popular website, facebook authentication, google authentication, full-stack, full-stack developer, next.js, Ernest portfolio and blog website, mern, Ernest personal portfolio and blog website,Ernest blog website"
        />
        <meta
          name="keywords"
          content="Ernest Portfolio Website,Ernest,Ernest portfolio and blog website,Ernest.com, Ernest.vercel.app,Ernest vercel,Ernest portfolio website,Ernest portfolio,Ernest blog,Ernest bhekizwe, ernest, ernestshong.me, Ernest Portfolio Website,ashikur.vercel.app,portfolio website,Ernest portfolio website, ernest portfolio website, ernest portfolio, portfolio ernest"
        />
        <meta name="author" content="Ernest Bhekizwe Shongwe, Ernest, Shongwe" />
        <meta
          name="site_name"
          content="Ernest Portfolio Website | Ernest portfolio and blog website"
        />

        <meta property="og:url" content="https://ernest.vercel.app" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/Ernest/image/upload/c_thumb,w_200,g_face/v1697458521/Screenshot_502_vzrohp.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <meta name="author" content="Bhekizwe, Ernest me, Ernest Bhekizwe Shongwe" />
        <meta property="og:url" content="https://ernestshong.me, https://ernestshong.vercel.app" />
        <meta property="og:type" content="website" data-shuvi-head="true" />
        <meta name="robots" content="index, follow" />
        <meta name="site_name" content="Ernest Portfolio" data-shuvi-head="true" />
        <meta httpEquiv="pragram" content="no-cache" />
        <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="Cache" content="no-cache" />
        <meta name="browsermode" content="application" />
      </Head>

      <SessionProvider session={pageProps.session}>
        <div className={`${themeReducer.mode} ${themeReducer.color}`}>
          {/* {loading ? <Loading /> : */}
          {/* <ChatProvider> */}

          <Provider store={store}>
            <Dropdown
              user={user ? user : user1}
              notification={user?.notification ? user.notification : 0}
              messagenotification={
                user?.messagenotification ? user.messagenotification : 0
              }
            />
            {/* <Navbar /> */} <Component {...pageProps} />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Provider>

          {/* </ChatProvider> */}
          {/* } */}
          <ScrollToTop />
          {!active && <Mouse />}
        </div>
      </SessionProvider>
    </>
  );
}
