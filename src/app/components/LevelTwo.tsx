import Link from "next/link";
import React from "react";

const LevelTwo = () => {
  return (
    <>
    <section className="bg-primary py-12">
  <h2 className="text-center text-6xl font-bold text-white">
    LEVEL TWO
  </h2>
  <span className="relative block mt-4">
    {/* Underline with dot */}
    <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
      <div className="border-t-2 border-white/60 w-1/6"></div>
      <div className="mx-2 bg-red-500 w-1 h-1"></div>
      <div className="border-t-2 border-white/60 w-1/6"></div>
    </span>
  </span>
</section>
<div className="w-full flex flex-col lg:flex-row text-2xl justify-between items-center gap-4 mt-10 px-10">
  <Link
    href="/courses/level-one"
    className="flex-1 text-center bg-primary text-white px-7 py-3 rounded-full border border-hovershed font-lora hover:bg-white hover:text-hovershed transition"
  >
    Level One
  </Link>
  <Link
    href="/courses/level-two"
    className="flex-1 text-center bg-primary text-white px-7 py-3 rounded-full border border-hovershed font-lora hover:bg-white hover:text-hovershed transition"
  >
    Level Two
  </Link>
  <Link
    href="/courses/level-three"
    className="flex-1 text-center bg-primary text-white px-7 py-3 rounded-full border border-hovershed font-lora hover:bg-white hover:text-hovershed transition"
  >
    Level Three
  </Link>
</div>
<div className="container mx-auto px-6 py-10">
  {/* First Row: Content + Video */}
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Left Side: Course Content */}
    <div>
      <h2 className="text-2xl font-bold font-montserrat text-[#264653]">
        Course Name: <br /> Hijama Practitioner Pro
      </h2>
      <p className="text-[#2A9D8F]">
        <span className="font-semibold">Proficiency:</span> Level 2
      </p>
      <p className="text-[#2A9D8F]">
        <span className="font-semibold">Duration:</span> 4 days + 7 days as
        intern at i-Revive Wellness Clinic
      </p>
      <p className="text-[#2A9D8F]">
        <span className="font-semibold">Format:</span> Hands-on practice +
        Advanced theory
      </p>
      <p className="font-lora text-xl text-[#264653] mt-4">
        Building upon Level One, this course advances practitioners&apos; proficiency in Hijama therapy...
      </p>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-[#264653]">
          By the conclusion of Level Two, participants will:
        </h3>
        <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
          <li>Accurately diagnose and treat various conditions.</li>
          <li>Manage pain and provide relief effectively.</li>
          <li>Implement dry gliding & facial cupping techniques.</li>
          <li>Integrate complementary procedures.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#264653] mt-6">Who Is This Course For?</h3>
        <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
          <li>Those who have completed Level 1.</li>
          <li>Practitioners looking to master advanced Hijama techniques.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#264653] mt-6">What You’ll Learn:</h3>
        <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
          <li>Extended Anatomy & Physiology</li>
          <li>Advanced disease diagnosis & treatment</li>
          <li>Pain Management strategies</li>
          <li>Facial & Gliding Cupping Techniques</li>
        </ul>

        <h3 className="text-xl font-bold text-[#264653] mt-6">Why Choose Our Course?</h3>
        <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
          <li>
            <strong className="text-[#E9C46A]">Expertly Designed Curriculum:</strong> Advanced training
            backed by medical professionals.
          </li>
          <li>
            <strong className="text-[#E9C46A]">Hands-on Experience:</strong> Intern at a real wellness clinic.
          </li>
          <li>
            <strong className="text-[#E9C46A]">Globally Certified:</strong> Meets international standards.
          </li>
        </ul>
      </div>
    </div>

    {/* Right Side: Video */}
    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/8hjUOqhcVd8"
        title="Hijama Practitioner Course"
        allowFullScreen
        className="w-full h-full rounded-lg shadow-lg"
      ></iframe>
    </div>
  </div>

  {/* Second Row: Full-width Course Details */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-[#264653]">
      By the conclusion of Level Two, participants will:
    </h3>
    <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
      <li>Accurately diagnose and treat various conditions.</li>
      <li>Manage pain and provide relief effectively.</li>
      <li>Implement dry gliding & facial cupping techniques.</li>
      <li>Integrate complementary procedures.</li>
    </ul>

    <h3 className="text-xl font-bold text-[#264653] mt-6">Who Is This Course For?</h3>
    <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
      <li>Those who have completed Level 1.</li>
      <li>Practitioners looking to master advanced Hijama techniques.</li>
    </ul>

    <h3 className="text-xl font-bold text-[#264653] mt-6">What You’ll Learn:</h3>
    <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
      <li>Extended Anatomy & Physiology</li>
      <li>Advanced disease diagnosis & treatment</li>
      <li>Pain Management strategies</li>
      <li>Facial & Gliding Cupping Techniques</li>
    </ul>

    <h3 className="text-xl font-bold text-[#264653] mt-6">Why Choose Our Course?</h3>
    <ul className="list-disc list-inside space-y-2 mt-2 font-lora text-xl text-[#264653]">
      <li>
        <strong className="text-[#E9C46A]">Expertly Designed Curriculum:</strong> Advanced training
        backed by medical professionals.
      </li>
      <li>
        <strong className="text-[#E9C46A]">Hands-on Experience:</strong> Intern at a real wellness clinic.
      </li>
      <li>
        <strong className="text-[#E9C46A]">Globally Certified:</strong> Meets international standards.
      </li>
    </ul>
  </div>
</div>

    </>
  );
};

export default LevelTwo;