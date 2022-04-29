import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import BlogList from '../../components/BlogList/BlogList'
import Header from '../../components/Header/Header'
import BlogScreen from '../BlogPanel/BlogScreen'
import FooterScreen from '../Footer/FooterScreen'

const Home = () => {
  return (
    <>
    <Header />
    <BlogScreen />
    <BlogCard />
    <BlogList />
    <FooterScreen />
    
    </>
  )
}

export default Home