import Image from "next/image";
import Link from "next/link";

export default function LevelOne() {
  return (
    <>
      <section className="bg-primary py-12">
        <h2 className="text-center text-6xl font-bold text-white">LEVEL ONE</h2>
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

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side: Course Content */}
          <div>
            <h2 className="text-2xl font-montserrat font-bold text-[#264653]">
              Course Name:- <br /> Hijama Practitioner Launchpad
            </h2>
            <p className="text-[#2A9D8F]">
              <span className="font-semibold">Proficiency:</span> Level 1
            </p>
            <p className="text-[#2A9D8F]">
              <span className="font-semibold">Duration:</span> 5 days
            </p>
            <p className="text-[#2A9D8F]">
              <span className="font-semibold">Format:</span> 3 days Theory + 2
              days Hands-on & Practical Training
            </p>
            <p className="mt-4 font-lora text-xl text-[#264653]">
              Learn Hijama with our comprehensive Level One course, designed for
              beginners and aspiring practitioners...
            </p>
            <p className="mt-4 font-lora text-xl text-[#264653]">
              Unlike most courses that focus only on history, geography, and
              basic Hijama procedures, we provide you with a solid foundation...
            </p>
            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#264653]">
                Our curriculum goes beyond the ordinary by covering:
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 font-lora text-xl text-[#264653]">
                <li>The human body from a contemporary medical perspective.</li>
                <li>The metaphysical aspects of the human body.</li>
                <li>All essential and core components of Hijama.</li>
              </ul>
              <p className="mt-4 font-lora text-xl text-[#264653]">
                Not only will you gain extensive knowledge through this unique
                approach, but you will also apply it practically...
              </p>

              <h3 className="text-xl font-bold text-[#264653] mt-6">
                Who Is This Course For?
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 font-lora text-xl text-[#264653]">
                <li>Individuals with no prior experience...</li>
                <li>Individuals aspiring to establish a Hijama clinic...</li>
                <li>
                  Individuals interested in learning and applying Hijama...
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#264653] mt-6">
                Why Choose Our Course?
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 font-lora text-xl text-[#264653]">
                <li>
                  <strong className="text-[#E9C46A]">
                    Expertly Designed Curriculum:
                  </strong>{" "}
                  Developed under the guidance of leading professionals.
                </li>
                <li>
                  <strong className="text-[#E9C46A]">
                    International Accreditation:
                  </strong>{" "}
                  Recognised by esteemed international bodies.
                </li>
                <li>
                  <strong className="text-[#E9C46A]">
                    Globally Certified Provider:
                  </strong>{" "}
                  Meets global standards for professional practice.
                </li>
                <li>
                  <strong className="text-[#E9C46A]">
                    Comprehensive Knowledge Base:
                  </strong>{" "}
                  Combines medical science, metaphysical understanding, and
                  Hijama practices.
                </li>
                <li>
                  <strong className="text-[#E9C46A]">
                    Proven Clinical Success:
                  </strong>{" "}
                  Learn from the expertise behind i-Revive Wellness Clinic.
                </li>
                <li>
                  <strong className="text-[#E9C46A]">
                    Training by an Acclaimed Author:
                  </strong>{" "}
                  Learn from the best-selling author of &quot;Hijama
                  Inside&quot;.
                </li>
                <li>
                  <strong className="text-[#E9C46A]">
                    Hands-on Experience:
                  </strong>{" "}
                  Every student participates in practical Hijama sessions.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#264653] mt-6">
                What You’ll Learn:
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 font-lora text-xl text-[#264653]">
                <li>Human Body, Health & Disease</li>
                <li>Metaphysical aspect affecting Wellness</li>
                <li>
                  Anatomy & Physiology (from a Hijama practitioner’s
                  perspective)
                </li>
                <li>Hijama Know-How</li>
                <li>Hijama Insights</li>
                <li>Preventative Maintenance through Hijama</li>
                <li>Essential tools, equipment, and preparation techniques</li>
                <li>Practical application of Sunnah points</li>
                <li>Hygiene, sterilization, and safety protocols</li>
              </ul>
              <p className="mt-4 text-[#264653]">
                By choosing this course, you’re not just gaining theoretical
                knowledge but embarking on a transformative learning journey...
              </p>
            </div>
          </div>

          {/* Right Side: Video */}
          <div>
            <div className="aspect-video mb-6">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/8hjUOqhcVd8"
                title="Hijama Practitioner Course"
                allowFullScreen
              ></iframe>
            </div>
            <Image
              alt="class"
              src="/class1.jpg" // Update with the actual image path
              width={500}
              height={500}
              className="w-full h-full max-h-[380px] md:max-h-[800px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
