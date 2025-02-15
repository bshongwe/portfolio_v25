import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "@/actions/userAction";
import ThemeAction from "../actions/ThemeAction";
import Home from "@/components/Home";
import { getComments } from "@/actions/commentAction";
import { getAllProducts } from "@/actions/productAction";
import { getCategories } from "@/actions/categoryAction";
import { getTags } from "@/actions/tagAction";
import PageTransition from "@/components/pageTransition";

export default function Index() {
  const dispatch = useDispatch();

  const themeReducer = useSelector((s) => s.Theme);

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
    dispatch(loadUser());
    // dispatch(getComments());
    dispatch(getAllProducts());
    dispatch(getCategories());
    dispatch(getTags());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Ernest | Home -Ernest Portfolio Website</title>
        <meta
          name="description"
          content="Ernest | Home -Ernest Portfolio Website.Welcome to the Ernest Portfolio Website: Where Creativity Meets Technology. Explore the dynamic world of Ernest, a fusion of personal portfolio and captivating blog. Discover stunning projects, insightful articles, and the talents of Ernest in web development, design, coding, and more. Immerse yourself in a digital experience that showcases the intersection of creativity and technology.Ashikur Portfolio Website"
        />

        <meta
          name="keywords"
          content="Ernest Portfolio Website,Ernest,Ernest portfolio and blog website,Ernest.com, Ernest.vercel.app,Ernest vercel,Ernest portfolio website,Ernest portfolio,Ernest blog,Ernest rahman,ashikur,ashikur.com,Ashikur Portfolio Website,ashikur.vercel.app,portfolio website,Ernest portfolio website,ashikur portfolio website"
        />

        <meta name="author" content="Ernest bhekizwe Shongwe, Ernest, Shongwe" />
        <meta name="site_name" content="Ernest Portfolio Website" />
        <meta property="og:url" content="https://ernestshong.me, https://ernest.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Ashikur,Ernest me,Ernest Rahman" />

        <meta property="og:type" content="website" data-shuvi-head="true" />
        <meta name="robots" content="index, follow" />
        <meta name="site_name" content="Ernest Portfolio" data-shuvi-head="true" />
        <meta httpEquiv="pragram" content="no-cache" />
        <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="Cache" content="no-cache" />
        <meta name="browsermode" content="application" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/Ernest/image/upload/c_thumb,w_200,g_face/v1697458521/Screenshot_502_vzrohp.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link rel="icon" type="image/png" href="/icon1.png" />
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
        ></link>
      </Head>
      <PageTransition />
      <main className={`${themeReducer.mode} ${themeReducer.color}`}>
        <Home />
      </main>
    </>
  );
}
