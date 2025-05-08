"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = `At i-Revive Hijama Center in Hyderabad, we offer professional Hijama (cupping therapy) for both women and men, designed to restore health, balance, and overall well-being. Whether you’re struggling with back pain, neck stiffness, migraines, fatigue, or chronic conditions like diabetes, hormonal imbalances, or high blood pressure, our certified Hijama specialists are here to support your healing journey.`;

  const fullText = `At i-Revive Hijama Center in Hyderabad, we offer professional Hijama (cupping therapy) for both women and men, designed to restore health, balance, and overall well-being. Whether you’re struggling with back pain, neck stiffness, migraines, fatigue, or chronic conditions like diabetes, hormonal imbalances, or high blood pressure, our certified Hijama specialists are here to support your healing journey.

We also provide Hijama for female by experienced female therapists, ensuring complete privacy, comfort, and personal care in a safe environment. Our therapy works by removing toxins, improving blood circulation, and stimulating the body’s natural ability to heal itself—gently and effectively.

At i-Revive, we believe in real results and have helped many clients experience relief and transformation through regular sessions. If you're looking for the best Hijama center in Hyderabad or a ladies-only Hijama center near you, we’re here for you.`;

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

          {/* Mobile view: Short text + Read More/Less */}
          <div className="mt-6 text-lg sm:text-xl md:text-2xl text-justify text-gray-600 font-lora block md:hidden">
            {isExpanded ? fullText : shortText}
            <button
              className="text-primary font-semibold ml-2 underline block mt-4"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Desktop view: Full text */}
          <p className="hidden md:block mt-6 text-lg sm:text-xl md:text-2xl text-justify text-gray-600 font-lora">
            At i-Revive Hijama Center in Hyderabad, we offer professional Hijama
            (cupping therapy) for both women and men, designed to restore
            health, balance, and overall well-being. Whether you’re struggling
            with back pain, neck stiffness, migraines, fatigue, or chronic
            conditions like diabetes, hormonal imbalances, or high blood
            pressure, our certified Hijama specialists are here to support your
            healing journey.
            <br />
            <br />
            We also provide Hijama for female by experienced female therapists,
            ensuring complete privacy, comfort, and personal care in a safe
            environment. Our therapy works by removing toxins, improving blood
            circulation, and stimulating the body’s natural ability to heal
            itself—gently and effectively.
            <br />
            <br />
            At i-Revive, we believe in real results and have helped many clients
            experience relief and transformation through regular sessions. If
            you&apos;re looking for the best Hijama center in{" "}
            <a
              href="https://www.wikidata.org/wiki/Q1361"
              target="_blank"
              className="text-inherit no-underline"
            >
              Hyderabad
            </a>{" "}
            or a ladies-only Hijama center near you, we’re here for you.
          </p>

          {/* Optional button area */}
          <div className="mt-8 flex justify-start">
            {/* Future Learn More button */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
