"use client";
import React, { useState } from "react";
import { faqData } from "../../data/faqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 md:px-4 py-4 bg-white dark:bg-white">
      <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-primary mb-6">
        FAQs
      </h2>
      <div className="border-t border-primary w-16 mb-8"></div>
      <div className="space-y-4 text-black font-lora">
        {faqData.map((faq, index) => (
          <div key={faq.id} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between bg-gray-50 px-4 md:px-6 py-3 md:py-4 text-left text-2xl md:text-2xl lg:text-2xl font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center">
                <span className="text-primary font-bold mr-3 md:mr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xl md:text-xl lg:text-2xl sm:text-sm">
                  {faq.question}
                </span>
              </span>
              <span className="text-primary text-lg md:text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                className="bg-white px-4 md:px-6 py-3 md:py-4 text-gray-700 text-lg sm:text-xl md:text-2xl text-justify"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
