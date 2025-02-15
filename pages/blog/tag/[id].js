import { getComments } from "@/actions/commentAction";
import { getAllProducts, getAllProductsTag } from "@/actions/productAction";
import { loadUser } from "@/actions/userAction";
import BlogCard from "@/blog/Home/BlogCard";
import Sidebar from "@/blog/sidebar/Sidebar";
import SideRight from "@/blog/sideright/SideRight";
import Loading from "@/components/Loading/Loading";
import Pagination from "@/components/pagination/Pagination";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeAction from "@/actions/ThemeAction";
import Head from "next/head";
const Hello = (props) => {
  const dispatch = useDispatch();
  const { products,loading } = useSelector((state) => state.allProducts);
  const [data, setData] = useState([]);
  const router = useRouter();
    const { id } = router.query;
   console.log("data", props)
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(3);
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = data && data.slice(firstPostIndex, lastPostIndex);
   // const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
   const [showComments, setShowComments] = useState([]);
   const comments = useSelector((state) => state.comments);
   useEffect(() => {
     const id = data.map((c) => c._id);
     dispatch(getComments(id, 1));
     setShowComments(comments?.data);
   }, [dispatch, comments?.data]);
     useEffect(() => setData(products));

  useEffect(() => {
    dispatch(loadUser())
    dispatch(getAllProductsTag(id));
    // setData(products)
  }, [dispatch,id]);
 const themeReducer = useSelector((s) => s.Theme);

 useEffect(() => {
   const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

   const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

   dispatch(ThemeAction.setMode(themeClass));

   dispatch(ThemeAction.setColor(colorClass));
 }, [dispatch]);
 
  return (
    <>
      <Head>
        <title>Blog Details By Tags -Asikur Portfolio Website</title>
        <meta
          name="description"
          content={`Blog  Details By Tags -Asikur Portfolio Website | Read the insightful blog post "${data?.title}" on the Asikur Portfolio Website and delve into a world of knowledge and inspiration. Explore in-depth articles, thought-provoking content, and expert perspectives on topics ranging from web development to design trends. Designed for a seamless user experience and accessible to Google bot count, our blog details page provides valuable insights and fosters meaningful discussions in the creative and technology community.`}
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div className={`${themeReducer.mode} ${themeReducer.color}`}>
          {" "}
          <div className="blog">
            <Sidebar />
            <div className="blog-container">
              <div className="blog-main">
                {currentPosts?.map((v, i) => {
                  return (
                    <>
                      <BlogCard v={v} key={v.id} showComments={showComments} />
                    </>
                  );
                })}
              </div>
              <Pagination
                totalPosts={products?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
            <SideRight />
          </div>
        </div>
      )}
    </>
  );
};

export default Hello;
