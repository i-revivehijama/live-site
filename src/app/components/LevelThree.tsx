import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function LevelOne() {
  return (
    <>
      <section className="bg-primary py-12">
        <h2 className="text-center text-6xl font-bold text-white">
          LEVEL THREE
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
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side: Course Content */}

          <div>
            <h2 className="text-2xl font-montserrat font-bold text-[#264653]">
              Course Name:- <br />{" "}
              <span className="text-[#2A9D8F]">Personal Mentorship</span>
            </h2>
            <p className="text-[#264653]">
              <span className="font-semibold text-[#2A9D8F]">Proficiency:</span>{" "}
              Master
            </p>
            <p className="text-[#264653]">
              <span className="font-semibold text-[#2A9D8F]">Duration:</span> 4
              weeks
            </p>
            <p className="text-[#264653]">
              <span className="font-semibold text-[#2A9D8F]">Format:</span> 15
              Hours of One-on-One Training & Mentoring, Live Cases and Intern
              experience under supervision.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#264653]">
                Personal Intensive Mentorship Program: From a Layman to a Pro
              </h3>

              <p className="mt-4 font-lora text-xl text-[#264653] text-justify">
                Not only will you gain extensive knowledge through this unique
                approach, but you will also apply it practically... If you are
                passionate about Hijama and aspire to build a career in this
                field but lack knowledge of the human body from a medical
                perspective or have no prior experience with Hijama, this
                program is designed for you. Even if you already have a basic
                understanding of the human body or Hijama but seek to achieve
                proficiency and mastery to confidently run your own clinic, this
                mentorship program is your ideal next step.
              </p>

              <p className="mt-4 font-lora text-xl text-[#264653] text-justify">
                Take your Hijama expertise to the next level with our Level
                Three Intensive Personal Mentorship Program. Designed for
                graduates of Level One and Level Two, this advanced program
                offers personalised mentorship, hands-on training, and an
                in-depth exploration of holistic health practices.
              </p>

              <h3 className="text-xl font-bold text-[#264653] mt-6">
                Who Is This Course For?
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 font-lora text-xl text-[#264653] text-justify">
                <li>
                  Individuals with Medical background (Physiotherapist/BUMS or
                  equivalent) intending to set up a clinic and pursue Hijama as
                  a career.
                </li>
                <li>
                  Individuals with no medical background but passionate about
                  learning and setting up a Hijama clinic.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#264653] mt-6">
                What You’ll Learn:
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1 font-lora text-xl text-[#264653]">
                <li>Level 1 + Level 2 Curriculum</li>
                <li>
                  One-on-One enriched syllabus with practical demonstrations and
                  applied learning
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#264653] mt-6">
                Course Highlights
              </h3>
              <ul className="list-inside mt-2 space-y-3 font-lora text-xl text-[#264653] text-justify">
                <li>
                  <strong className="text-[#2A9D8F]">
                    ✔ Personalised Mentorship:
                  </strong>{" "}
                  Gain direct guidance and mentorship from Brother Imran Khan...
                </li>
                <li>
                  <strong className="text-[#2A9D8F]">
                    ✔ Comprehensive Curriculum:
                  </strong>{" "}
                  Review of foundational knowledge from previous levels...
                </li>
                <li>
                  <strong className="text-[#2A9D8F]">
                    ✔ Hands-On Training:
                  </strong>{" "}
                  Be both the practitioner and the recipient...
                </li>
                <li>
                  <strong className="text-[#2A9D8F]">
                    ✔ Holistic Approach:
                  </strong>{" "}
                  Integrating science, metaphysics, and Sunnah-based healing...
                </li>
                <li>
                  <strong className="text-[#2A9D8F]">
                    ✔ Accredited Certification:
                  </strong>{" "}
                  Recognised certification upon completion.
                </li>
                <li>
                  <strong className="text-[#2A9D8F]">
                    ✔ Clinic & Client Management:
                  </strong>{" "}
                  Learn protocols for setup, aftercare, and professional
                  service.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Video & Image */}
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
              src="/class1.jpg"
              width={500}
              height={500}
              className="w-full h-full max-h-[380px] md:max-h-[800px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#264653]">Why Choose Us?</h3>
          <ul className="list-disc list-inside mt-4 space-y-3 font-lora text-xl text-[#264653] text-justify">
            <li>
              <strong className="text-[#2A9D8F]">One-on-One Mentorship:</strong>{" "}
              Tailored guidance that adapts to your individual learning needs,
              ensuring personal growth and mastery.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Expertly Designed Curriculum:
              </strong>{" "}
              Developed under the guidance of leading contemporary medical
              professionals, ensuring a scientifically sound and practical
              approach to Hijama Cupping.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                International Accreditation:
              </strong>{" "}
              Recognised by esteemed international bodies, affirming the quality
              and credibility of our program.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Globally Certified Provider:
              </strong>{" "}
              Certified to offer a course that meets global standards, preparing
              you for professional practice worldwide.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Comprehensive Knowledge Base:
              </strong>{" "}
              Combines contemporary medical science, metaphysical understanding,
              and Hijama practices to provide a holistic perspective on human
              health.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Proven Clinical Success:
              </strong>{" "}
              Learn from the expertise behind i-Revive Wellness Clinic, a highly
              successful clinic known for delivering outstanding results through
              Hijama therapy.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Training by an Acclaimed Author:
              </strong>{" "}
              Learn directly from the author of the best-selling book{" "}
              <em>&quot;Hijama Inside&quot;</em>, offering unparalleled
              expertise and insights into the practice.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">Hands-On Experience:</strong>{" "}
              Participate in practical Hijama sessions — both receiving and
              administering treatments — to build confidence, experience the
              therapy&quot;s effects firsthand, and hone your technique under
              supervision.
            </li>
          </ul>
        </div>
           
        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#264653]">
            Why Choose Our Course?
          </h3>
          <ul className="list-disc list-inside mt-4 space-y-3 font-lora text-xl text-[#264653] text-justify">
            <li>
              <strong className="text-[#2A9D8F]">
                Expertly Designed Curriculum:
              </strong>{" "}
              Developed under the guidance of leading contemporary medical
              professionals, ensuring a scientifically sound and practical
              approach to Hijama Cupping.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                International Accreditation:
              </strong>{" "}
              Recognised by esteemed international bodies, affirming the quality
              and credibility of our program.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Globally Certified Provider:
              </strong>{" "}
              Certified to offer a course that meets global standards, preparing
              you for professional practice worldwide.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Comprehensive Knowledge Base:
              </strong>{" "}
              Combines contemporary medical science, metaphysical understanding,
              and Hijama practices to provide a holistic perspective on human
              health.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Proven Clinical Success:
              </strong>{" "}
              Learn from the expertise behind i-Revive Wellness Clinic, a highly
              successful clinic known for delivering outstanding results through
              Hijama therapy.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">
                Training by an Acclaimed Author:
              </strong>{" "}
              Learn directly from the author of the best-selling book{" "}
              <em>&quot;Hijama Inside&quot;</em>, offering unparalleled
              expertise and insights into the practice.
            </li>
            <li>
              <strong className="text-[#2A9D8F]">Hands-on Experience:</strong>{" "}
              In addition to receiving exceptional theoretical training in
              Hijama, every student participates in practical Hijama sessions,
              both on themselves and on peers. This hands-on experience allows
              students to personally experience the feel and effects of Hijama,
              helping them discern best practices and potential pitfalls.
              Furthermore, by administering sessions to others, students will
              gain valuable practical experience and build the confidence
              necessary to perform Hijama cupping effectively in a clinical
              setting.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
