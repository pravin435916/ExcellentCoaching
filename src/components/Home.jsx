// src/components/Home.js
import React from 'react';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import TopperList from './TopperList';
import Header from './Header';
import About from './About';
import Courses from './Courses';
import Reviews from './Reviews';
import FAQs from './FAQs';
// import Main from './Main';
const Home = () => {

  return (
    <>
      {/* <BlogNavbar/> */}
      <Header/>
      <About/>
      <Reviews/>
      <Courses/>
      <FAQs/>
      {/* <TopperList/> */}
      <Footer/>
    </>
  );
};

export default Home;
