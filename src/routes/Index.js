import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../screen/Home/Home'
import SingleBlogScreen from '../screen/SingleBlogScreen/SingleBlogScreen';

const Index = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route  path="/blog/:id" element={<SingleBlogScreen />} />      
    </Routes>
    </>
  )
}

export default Index