"use client";

import Link from "next/link";
import Image from "next/image";

const AboutTwo = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat text-primary">
            ABOUT US
          </h2>
          <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold font-montserrat">
            i-Revive – Restoring Health, Transforming Lives
          </h4>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-justify font-lora text-gray-700">
            Our journey with Hijama began through personal experiences across
            different parts of the world. We witnessed its incredible potential
            to improve quality of life, yet saw how underutilized and poorly
            applied it often was. Despite its powerful healing properties,
            Hijama was frequently practiced without proper knowledge or
            technique, leading to average or ineffective outcomes. <br />
            Recognizing this gap, we saw a meaningful opportunity to elevate
            Hijama to the standard it truly deserves. With a shared vision to
            make a lasting difference, core members from diverse fields -
            including medicine - came together to establish iRevive. Our goal
            was clear: to create a professional, research-driven Hijama clinic
            that delivers effective, natural, and sustainable healthcare.
            <br />
            i-Revive is more than a clinic - it is a mission-led initiative
            committed to holistic healing. We are focused on bringing real value
            to individuals and families by offering well-informed, expertly
            applied Hijama treatments. Our priority is your wellbeing, not
            profits. Through i-Revive, we aim to redefine wellness by setting a
            new benchmark in Hijama therapy
          </p>
          <p>
            Visit{" "}
            <Link
              href="/best-hijama-centre-for-ladies-hyderabad"
              className="text-green-600 underline hover:text-green-700"
            >
              Best Hijama Centre for women in Hyderabad
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src="/about1.JPG"
            alt="About i-Revive Hijama Cupping"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
