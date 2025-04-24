"use client";

import React, { useEffect, useRef } from "react";
import { blogPosts } from "../../data/ourBlogData";
import Image from "next/image";
import { FaRegCalendarAlt, FaRegComment } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

// Add a prop to limit the number of blog posts
interface OurBlogProps {
  limit?: number;
}

const OurBlog: React.FC<OurBlogProps> = ({ limit }) => {
  const isAOSInitialized = useRef(false);

  useEffect(() => {
    if (!isAOSInitialized.current) {
      AOS.init({ duration: 1000 });
      isAOSInitialized.current = true;
    }
  }, []);

  // Limit the displayed posts
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="px-6 md:px-16 py-6 lg:py-16 bg-white text-center">
      <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold font-serif">OUR BLOG</h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto font-lora text-2xl font-bold">
        Stay informed and inspired with our blog, where we share expert
        insights, wellness tips, and the latest trends in Hijama therapy.
        Explore topics to support your journey toward better health and
        well-being.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {displayPosts.map((post) => (
          <div
            data-aos="fade-up"
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-hovershed"
          >
            <Image
              src={post.image}
              width={450} // Increased width slightly
              height={320} // Increased height more
              alt={post.title}
              className="w-full h-64 object-center object-cover" // Increased Tailwind height
            />
            <div className="p-4">
              <p className="text-primary text-sm flex justify-between font-lora">
                <span className="flex items-center">
                  <FaRegCalendarAlt className="mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <FaRegComment className="mr-1" /> {post.comments} Comments
                </span>
              </p>
              <h3 className="text-3xl text-gray-900 mt-4 text-left font-montserrat">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-6 text-lg text-left font-lora">
                {post.description}
              </p>

              {/* "Read More" button with descriptive title */}
              <Link href={`/post/${post.slug}`}>
                <button
                  className="mt-4 bg-primary text-white text-left px-4 py-2 rounded-full shadow-md hover:bg-hovershed transition font-lora"
                  title={`Learn more about the ${post.title} blog post`} // Descriptive title added here
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show "View All" button only if we're showing a limited set */}
      {limit && (
        <div className="mt-8">
          <Link href="/blog">
            <button className="bg-primary text-white py-3 px-6 rounded-full hover:bg-white hover:text-primary border hover:border-primary transition font-lora">
              View All Blog Posts
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default OurBlog;
