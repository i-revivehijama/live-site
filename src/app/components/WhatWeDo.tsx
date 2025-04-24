"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatWeDoData } from "../../data/whatWeDoData";
import Link from "next/link";

// ✅ Add proper type definition
interface WhatWeDoProps {
  limit?: number;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ limit }) => {
  const displayData = limit ? whatWeDoData.slice(0, limit) : whatWeDoData;

  return (
    <section className="text-center py-6 lg:py-16 px-6 md:px-20 bg-white">
      <div className="flex justify-center items-center text-green-700 text-sm font-semibold tracking-wide">
        <span className="w-16 h-0.5 bg-blue-400 mr-4"></span>
        <span className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold">
          TREATMENT PLANS
        </span>
        <span className="w-16 h-0.5 bg-blue-400 ml-4"></span>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className="relative flex flex-col group cursor-pointer rounded-lg overflow-hidden shadow-custom-shadow transition-all duration-500 dark:text-black border-b-8 border-primary card-container"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="overlay-top"></div>
              <div className="overlay-bottom"></div>
            </div>

            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="relative bg-white text-black p-6 overflow-hidden flex flex-col flex-1 justify-between">
              <h3 className="text-2xl text-center font-semibold font-Montserrat relative z-10 transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-xl text-left flex-1 relative z-10 group-hover:text-white font-lora">
                {service.description}
              </p>
              <Link href={`/treatment-plans/${service.slug}`}>
                <button
                  className="mt-4 bg-primary text-white py-3 px-5 rounded-full hover:bg-white hover:text-hovershed border hover:border-hovershed transition relative z-10 hover:text-primary font-lora"
                  title={`Learn more about the ${service.title} Treatment Plan`}
                >
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show "View All" button only if we're showing a limited set */}
      {limit && (
        <div className="mt-8">
          <Link href="/treatment-plans">
            <button className="bg-primary text-white py-3 px-6 rounded-full hover:bg-white hover:text-primary border hover:border-primary transition font-lora">
              View All Treatment Plans
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;
