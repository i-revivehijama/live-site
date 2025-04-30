import Head from "next/head";
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
      {/* ✅ SEO Meta Tags Here */}
      <Head>
        <meta
          name="keywords"
          content="Best Hijama Cupping Therapy Centre in Hyderabad, Best Hijama Centre in Hyderabad for Ladies, Ladies Hijama Center in Hyderabad, Best Hijama Specialist in Hyderabad, Certified Hijama Practitioner Hyderabad, Affordable Hijama Therapy in Hyderabad, Top Hijama Specialists in Hyderabad, Hijama Therapy for Women Hyderabad, Pain Relief Hijama Centers Hyderabad, Best Hijama Center for Men and Women in Hyderabad"
        />
      </Head>

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
