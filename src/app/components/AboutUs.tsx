"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import Link from "next/link";

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
  quality={100}
  className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[900px] object-cover rounded-lg shadow-lg"
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-snug font-Montserrat text-left">
            WHAT WE DO
          </h2>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-3xl text-gray-800 text-left font-Montserrat">
            Healing Through Hijama – Natural Wellness for Your Body
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-justify text-gray-600 md:text-justify font-lora">
            At i-Revive, we offer professional Hijama (cupping therapy) sessions
            to support individuals in restoring their health and overall
            well-being. We help people dealing with a variety of concerns -
            whether it&apos;s pain in the neck, back, knees, or frequent
            headaches and migraines, or chronic conditions like high blood
            pressure, diabetes, hormonal imbalances, fatty liver, or low energy
            and fatigue.
            <br />
            <br />
            Hijama works by stimulating healthy blood circulation, removing
            stagnation, and allowing the body to reset itself. This process
            helps the body return to its natural state - where it can
            self-diagnose, repair, and heal without external intervention.
            Hijama creates the internal balance and environment needed for true
            healing to begin. <br />
            <br />
            We&apos;ve successfully helped many individuals find relief and
            improvement in their health through consistent Hijama sessions -
            real results, real stories, and ongoing transformations.
          </p>
          <div className="mt-8 flex justify-start">
            {/* <Link href="/about-us">
              <button className="bg-primary text-white text-xl font-semibold font-lora py-4 px-8 rounded-full hover:bg-white border hover:border-hovershed hover:text-hovershed transition">
                Learn More
              </button>
            </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
