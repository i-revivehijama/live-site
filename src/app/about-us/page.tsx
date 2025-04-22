import React from "react";
import Header from "../components/Header";
import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
// import OurTeamTwo from "../components/OurTeamTwo";
import AboutThree from "../components/aboutthree";

const page = () => {
  return (
    <>
      <Header/>
      
      <AboutTwo />
      {/* <OurTeamTwo /> */}
      <AboutThree />
      <Footer />

      
    </>
  )
}

export default page
