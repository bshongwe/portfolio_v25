import Login from '@/portfolio/contact/Login'
import Head from 'next/head'
import React from 'react'

const login = () => {
  return (
    <>
      <Head>
        <title>Log in | Sign In - Ernest Portfolio Website</title>
        <meta
          name="description"
          content="Log in | Sign In - Ernest Portfolio Website . Sign in to Ernest's captivating portfolio website. Explore the world of web development, design, coding, and technology. Access exclusive content, projects, and insights. Join the creative community behind the website. Optimized for seamless user experience."
        />
      </Head>
      <Login />
    </>
  );
}

export default login