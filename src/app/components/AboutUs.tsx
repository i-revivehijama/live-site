"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="py-6 lg:py-12 md:py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-12">
        {/* Left Side - Image Animation */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/about01.JPG"
            alt="About Us"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side - Content Animation */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-snug font-serif text-left">
            About <span className="text-primary">Us</span>
          </h2>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-5xl text-gray-800 text-left">
            Best Hijama Centre in Hyderabad
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-justify text-gray-600 md:text-justify">
            Welcome to i-Revive. At i-Revive, we offer a targeted range of
            Hijama Cupping-based wellness plans coupled with the indispensable
            goodness of Gliding Cupping & Deep Tissue Stroking under the most
            hygienic setups while fully honouring the individual&apos;s privacy.
            <br /><br />
            Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women. Ladies can benefit from our dedicated Hijama facilities, with treatments performed by experienced female. Enjoy personalized and professional care tailored to your needs, ensuring effective and affordable Islamic cupping therapy for everyone.
          </p>
          <div className="mt-8 flex justify-start">
            <Link href="/about-us">
              <button className="bg-primary text-white text-xl font-semibold py-4 px-8 rounded-full hover:bg-white border hover:border-hovershed hover:text-hovershed transition">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
