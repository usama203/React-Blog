import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router';
import { Link, useParams } from "react-router-dom";

import { blogList } from "../../api";
import EmptyList from "../EmptyList";
const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    Title: "",
    Subtitle: "",
    Image: "",
    Article: "",
  });
  console.log(blog, "hgdshjs");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await blogList.getSingleBlog(id);
    setBlog(res.data);
    console.log(res);
  };

  return (
    <>
      {blog ? (
        <Box sx={{}}>
          <Link sx={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <span> &#8592;</span> <span>Go Back</span>
          </Link>
          <Box sx={{px:{md:40,lg:40,sx:2,sm:3}}}>
          <Typography  sx={{ fontWeight: "bold",fontSize:{lg:'30px',md:'30px',sm:'20px',xs:'15px'} }} align="center">
            {blog.Title}
          </Typography>
          <Typography variant="body1" align="center">
            {blog.Subtitle}
          </Typography>
          </Box>
          
          <Box component="img" src={blog.Image}  sx={{width:'80%',height:'500px',px:20,py:5}} />

   <Typography variant="body1" sx={{px:{md:40,lg:40,sx:2,sm:3}}}> {blog.Article}</Typography>
        </Box>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default SingleBlog;
