"use client";

import Image from "next/image";
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: "Mohammed Khan",
    qualification: "Visionary Leader & CEO",
    image: "/MohammedKhan2.JPG",
    slug: "mohammed-khan",
  },
  {
    id: 2,
    name: "Imran Khan",
    qualification: "Lead Practitioner",
    image: "/imrankhan.jpg",
    slug: "imran-khan",
  },
  {
    id: 3,
    name: "Dr. Fareeda Nikhat",
    qualification: "Director",
    image: "/drfareeda.jpg",
    slug: "fareeda-nikhat",
  },
  {
    id: 4,
    name: "Dr. Asma Moinuddin",
    qualification: "Director",
    image: "/drasmamoinuddin.jpg",
    slug: "asma-moinuddin",
  },
];

export default function AboutThree() {
  return (
    <div className="py-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
          >
            {/* Image Container */}
            <div className="relative w-full h-72 sm:h-80 md:h-96">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.qualification}`}
                width={500}
                height={500}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={member.id === 1 ? true : false}
              />
            </div>

            {/* Normal Text */}
            <div className="p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.qualification}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-4">{member.name}</h3>
              <Link href={`/profile/${member.slug}`} passHref>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                  See Profile
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
