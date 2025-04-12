import Image from "next/image";
import React from "react";

const OurTeamTwo = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
        Meet Our Team
      </h2>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-2 gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              alt="Mohammed Khan"
              src="/mohdkhan.JPG" // Update with the actual image path
              width={600}
              height={600}
              className="w-full h-full max-h-[750px] object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">
                Mohammed Khan – Visionary Leader & CEO
              </h3>
              <p className="mt-2 text-justify">
                Mohammed Khan is a dynamic leader and visionary entrepreneur
                dedicated to creating a meaningful impact beyond conventional
                business success. As the CEO of Delta group of companies, he
                brings a wealth of experience and strategic insight, sitting on
                the board of multiple companies across the Gulf and India.
              </p>
              <p className="mt-2 text-justify">
                With a firm belief that business should be a force for positive
                change, Mohammed Khan has consistently focused on solutions that
                go beyond profit, touching lives and fostering long-term health
                benefits. His dedication to holistic healing and traditional
                therapies reflects his passion for empowering individuals
                through natural and effective healthcare solutions. Under his
                leadership, our clinic stands as a testament to his
                vision—offering quality care, expert guidance, and
                transformative healing experiences that restore health and
                vitality.
              </p>
            </div>
          </div>

 {/* Team Member 3 */}
 <div className="flex flex-col items-center">
            <Image
              alt="Dr. Fareeda Nikhat"
              src="/drfareeda.jpg" // Update with the actual image path
              width={600}
              height={600}
              className="w-full h-full max-h-[750px] object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">
                Dr. Fareeda Nikhat - Director @ i-Revive
              </h3>
              <p className="mt-2 text-justify">
                OB-GYN consultant at Latifa Hospital with a focus on ultrasound
                in feto-maternal medicine and a passion for high-risk pregnancy
                care. Dedicated to advancing maternal and fetal health through
                innovative and compassionate clinical practice. Experience at
                Latifa Hospital for 19 years, Consultant Obstetrics and
                Gynecology.
              </p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              alt="Dr. Asma Moinuddin"
              src="/drasmamoinuddin.jpg" // Update with the actual image path
              width={600}
              height={600}
              className="w-full h-full max-h-[750px] object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">
                Dr. Asma Moinuddin - Director @ i-Revive
              </h3>
              <p className="mt-2 text-justify">
                A dedicated healthcare professional who holds an MBBS degree.
                Later, she pursued her MD in Naturopathic Medicine in the USA.
                Currently, Dr. Moinuddin practices as a Naturopathic doctor,
                where she has had a profound impact on the lives of numerous
                individuals and families.
              </p>
              <p className="mt-2 text-justify">
                With a heartfelt commitment to her patients&apos; well-being,
                Dr. Moinuddin has been instrumental in guiding her patients
                towards positive lifestyle changes, leading to the alleviation
                of longstanding illnesses. Her compassionate approach extends
                beyond physical health, as she values the connection between
                mind and body healing techniques. Driven by her passion for
                natural resources, she advocates for the holistic care of the
                body.
              </p>
            </div>
          </div>

         

          {/* Team Member 4 */}
          <div className="flex flex-col items-center">
            <Image
              alt="Imran Khan"
              src="/imrankhan.jpg" // Update with the actual image path
              width={600}
              height={600}
              className="w-full h-full max-h-[750px] object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold">
                Imran Khan - Lead Practitioner @ i-Revive
              </h3>
              <p className="mt-2 text-justify">
                Lead practitioner at i-Revive. Blessed with an extraordinary
                journey as a Hijama Practitioner, holding multiple
                certifications from Turkey, US & UK. Additionally, as a
                practicing Raqi mentored by Sheikh Abu Nadeer of RuqyaHealing ™
                (UK), he has gained profound knowledge & experience in
                addressing both physical and metaphysical aspects of healing.
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default OurTeamTwo;
