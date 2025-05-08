"use client";
import Image from "next/image";

interface TeamProfileProps {
  name: string;
  qualification: string;
  description: string;
  image: string;
}

export default function TeamProfile({
  name,
  qualification,
  description,
  image,
}: TeamProfileProps) {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={image}
            alt={name}
            width={250} // Adjusted to a smaller size for a better circular shape
            height={250} // Same size for height to maintain the circular shape
            className="rounded-full object-cover w-full h-full shadow-xl"
          />
        </div>

        {/* Content on the right */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 font-montserrat">
            {name}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-3xl text-green-600 mb-4 font-lora">
            {qualification}
          </p>
          {/* Display description in paragraph form */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed text-justify font-lora">
            <strong>{name}</strong>, {description}
          </p>
        </div>
      </div>
    </div>
  );
}
