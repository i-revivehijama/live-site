"use client";


import Link from "next/link";

const AboutTwo = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-gray-800">
        <h2 className="text-4xl md:text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-justify">
          At i-Revive, we are passionate about providing our clients with personalized wellness plans that prioritize their health and well-being. We specialize in Hijama Cupping, Gliding Cupping, and Deep Tissue Stroking techniques, which we use to offer a targeted range of services that are both effective and safe. <br />
          <br />
          As the best Hijama Cupping Therapy clinic in Hyderabad, we pride ourselves on delivering exceptional Hijama treatment. Our approach combines traditional wisdom with modern techniques to ensure optimal health benefits. At i-Revive, we stand out among the top dry cupping therapy centres in Hyderabad by offering expert care in a serene and professional environment.<br />
          <br />
          We are dedicated to improving your well-being through customized treatments that encourage healing and rejuvenation. Experience the difference with i-Revive, where your health is our priority. <br />
          <br />
          Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women. Ladies can benefit from our dedicated Hijama facilities, with treatments performed by experienced female professionals. Enjoy personalized and professional care tailored to your needs, ensuring effective and affordable Islamic cupping therapy for everyone. <br /> <br />
        </p>
        <p>
          Visit{" "}
          <Link
            href="/best-hijama-centre-for-ladies-hyderabad"
            className="text-green-600 underline hover:text-green-700"
          >
            Best Hijama Centre for women in Hyderabad
          </Link>{" "}
        </p>
      </div>

      
    </section>
  );
};

export default AboutTwo;
