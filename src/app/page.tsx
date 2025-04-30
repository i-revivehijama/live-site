
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Topbar from "./components/Topbar";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";
import OurBlog from "./components/OurBlog";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutThree from "./components/aboutthree";

export default function Home() {
  return (
    <>
     

      <div>
        <Topbar />
        <Header />
        <Herosection />
        <AboutUs />
        <WhatWeDo limit={4} />
        <WhyChooseUs />
        <AboutThree />
        <Testimonial />
        <OurBlog limit={3} />
        <Footer />
      </div>
    </>
  );
}
