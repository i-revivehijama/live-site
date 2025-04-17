import Image from "next/image";
import Link from "next/link";

export const treatmentPlansData = [
  {
    id: 1,
    title: "Sunnah Basic",
    image: "/paana.jpg",
    slug: "sunnah-basic",
    content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>

          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Sunnah Basic
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl">
          The Sunnah Basic is a starter plan that covers the basic Sunnah
          Cupping sites which help in general body maintenance and applicable to
          diseases/chronic issues. <br className="hidden sm:block" />
          These include two points on the neck or between scapulas and two on
          upper back (Kahil) respectively.
        </p>

        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              alt="paana"
              src="/paana.jpg"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto rounded-2xl"
            />
          </div>

          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>

              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 dark:text-white text-sm sm:text-base">
                  <li>• Back and neck pains</li>
                  <li>• Stiff muscles</li>
                  <li>• Sore joints</li>
                  <li>• Encourage blood flow</li>
                  <li>• Reduces pain and inflammation</li>
                  <li>• Migraines & Head Aches</li>
                  <li>• Fatigue</li>
                </ul>
              </div>
            </div>

            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm dark:text-white sm:text-base flex justify-center">
                Each session goes for approximately 45–60 mins
              </p>
            </div>

            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm dark:text-white sm:text-base flex justify-center">
                1 Session
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>

  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        Hijama Cupping – The only therapy which affects both{" "}
        <strong>Body & Soul.</strong>
      </p>
    </div>
  </div>
</div>


        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 2,
      title: "Sunnah Plus",
      image: "/treat2.jpeg",
      slug: "sunnah-plus",
      content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white font-montserrat">
            Sunnah Plus 
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          The Sunnah Plus is a more extensive plan that covering 9 (10 with 2nd Kahil) points including the basic Sunnah points, along with a deep tissue stroke and gliding cupping.
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
                alt="paana"
                src="/treat2.jpeg"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto rounded-2xl"
              />
          </div>
  
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 text-sm dark:text-white sm:text-base font-lora">
                  <li>• Back and neck pains</li>
                  <li>• Stiff muscles & Sore joints</li>
                  <li>• Reduces pain and inflammation</li>
                  <li>• Migraines, Head Aches & Fatigue</li>
                  <li>• Rheumatic diseases such as arthritis andfibromyalgia.</li>
                  <li>• Fertility and gynecological disorders.</li>
                  <li>• Skin problems such as eczema and acne.</li>
  
                  <li>
                    • Sedate the nervous system (which makes it anexcellent
                    treatment for high blood pressure).
                  </li>
                  <li>• Menstrual cramps,PMS and other OBGYN issues</li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                Each session goes for approximately 75-90 mins
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm dark:text-white sm:text-base flex justify-center">
                1 Session
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        Hijama Cupping – The only therapy which affects both{" "}
        <strong>Body & Soul.</strong>
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 3,
      title: "Vital Organ Cleanse",
      image: "/treat3.jpeg",
      slug: "vital-organ-cleanse",
      content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Vital Organ Cleanse
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          The vital organ cleanse is a body maintenance plan that targets all
              vital bodily systems. It is an exhaustive cleanse targeting all
              organs, addressing multiple conditions and body systems. The cleanse
              also acts like a preventative maintenance for your body’s overall
              wellbeing.
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
                alt="paana"
                src="/treat2.jpeg"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto rounded-2xl"
              />
          </div>
  
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 text-sm dark:text-white sm:text-base font-lora">
                  <li>
                    • Vitalises bodily functions by reinvigorating organsthrough
                    improved blood flow.
                  </li>
                  <li>• Clear blockages and stagnated circulation</li>
                  <li>
                    • Activate and clear the veins, arteries and capillaries
                  </li>
                  <li>• Realign/balance vital energy</li>
                  <li>• Promote and improve circulation</li>
                  <li>• Helps achieve homeostasis</li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base flex dark:text-white justify-center">
                Each session goes for approximately 60 -90 mins
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dadark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                First timers one Session every 4 to 6 weeks, requiring 3
                sessions. Followed by quarterly sessions.
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        The most beneficial Hijama cupping is that applied while the
        individual is healthy.
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 4,
      title: "Head Cupping",
      image: "/treat4.jpeg",
      slug: "head-cupping",
      content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Head Cupping
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          Head cupping is a very beneficial and can treat an array of ailments
              related to the head. Performing cupping therapy on the scalp, can
              help open the follicles and promote blood circulation to help
              maintain the hair. A 2010 study by the World Family Medicine Journal
              found that patients treated for chronic headaches said the headaches
              were less severe after cupping therapy. The points include top of
              the head (Yafookh), back of the head (Qamaduwah) and two along
              adjoining bottom line of the ears (Akhda’ain).
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              alt="paana"
              src="/treat4.jpeg"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto rounded-2xl"
            />
          </div>
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 text-sm dark:text-white sm:text-base font-lora">
                  <li>• Helps treat headaches, sinus issues and migraines</li>
                  <li>• Treats metaphysical issues</li>
                  <li>• Encourages hair growth</li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 dark:text-white text-sm sm:text-base flex justify-center">
                Each session goes for approximately 60 mins
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm dark:text-white sm:text-base flex justify-center">
                6-8 sessions depending upon issues
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border border-black dark:text-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg  relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        If you don’t pick a day for your body, then the body will surely
                  pick some for you!
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 5,
      title: "Lymphatic Cleanse",
      image: "/treat5.jpeg",
      slug: "lymphatic-cleanse",
      content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Lymphatic Cleanse
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          The lymphatic system is our body’s ‘sewerage system’. It is
          responsible for collecting and removing wastes, toxins, dead cells
          etc from the tissues, acting as a systematic garbage collection
          service. When this waste is not collected adequately or effectively,
          it congregates as a localized congestion. <br />
          <br />
          This is where Cupping Therapy can assist; in the removal of these
          blockages and stagnant fluids and having the lymph channels clear to
          allow the lymphatic system to operate freely once again.
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              alt="paana"
              src="/treat5.jpeg"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto rounded-2xl"
            />
          </div>
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 text-sm dark:text-white sm:text-base font-lora">
                  <li>
                    • Stimulate the lymphatic system and release local toxins
                  </li>
                  <li>• Clear blockages and stagnated circulation</li>
                  <li>
                    • Activate and clear the veins, arteries and capillaries
                  </li>
                  <li>
                    • Helps treat blood disorders and neurological disorders
                  </li>
                  <li>
                    • Reduces anxiety & depression by sedating central nervous
                    system
                  </li>
                  <li>
                    • Boosts metabolism and immune system. Facilitates weight loss
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                Each session goes for approximately 90-120 mins
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                3 Sessions - 2 LD (lymphatic drainage)+ 1 HLD (LD followed by
                Hijama cupping on nodal sites), weekly once for first timers;
                may take more sessions to show up quantifiable/noticeable
                results.
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        Hijama Cupping: A sure fire remedy to all your body pains and
        migraines. Say goodbye to stressful living.
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 6,
    title: "Infertility Cupping",
    image: "/treat6.jpeg",
    slug: "infertility-cupping",
    content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Infertility Cupping
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          Cupping helps body’s internal Ph / chemical / hormonal balances,
          ridding toxins, clearing blockages and improve blood circulation. It
          facilitates a healthy flow of blood to the reproductive organs
          giving them all the nutrients, oxygen, vitamins and minerals they
          need to produce healthy sperm and ovum, and also building a healthy
          endometrium to nourish & sustain a pregnancy.
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              alt="paana"
              src="/treat6.jpeg"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto rounded-2xl"
            />
          </div>
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 text-sm dark:text-white sm:text-base font-lora">
                  <li>
                    • Induce ovulation. Removes blockages and inflammation in the
                    Fallopian tube
                  </li>
                  <li>
                    • Addresses endometriosis or problems where the lining of the
                    uterus forms outside of it
                  </li>
                  <li>• Balances hormones in Ovarian Syndrome (PCOS)</li>
                  <li>• Helps in promoting hormonal balance</li>
                  <li>
                    • It helps to reposition a misaligned uterus, which itself
                    helps to increase circulation of blood, lymph, nervous system.
                  </li>
                  <li>• Brings rich, oxygenated blood to ovaries & testes.</li>
                  <li>
                    • Can increase libido. Can increase the quality and quantity
                    of sperm
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                Each session goes for approximately 60-90 mins
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                1. iRP Lite (Highly recommended but not mandatory): Lymphatic
                  cleanse with wet cupping + 3 session full body & vital organ
                  cleanse (upper body + Torso + lower body) <br />
                  <br />
                  2. Fertility focused wet cupping
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        Hijama Cupping: A sure fire remedy to all your body pains and
                  migraines. Say goodbye to stressful living.
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 7,
      title: "i-Revive Plan",
      image: "/treat7.jpeg",
      slug: "i-revive-plan",
      content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            i-Revive Plan
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          The i-Revive Plan is a master plan that resets the whole body
              addressing almost all diseases & conditions, chronic issues, various
              imbalances etc. It kickstarts the body back to optimum health using
              a series of cupping sessions acting as a super charged boost to the
              body in a short period of time before the body goes back to its
              DIS-eased state. The plan consists of lymphatic drainage sessions,
              sectional cleansing sessions. The 3 week plan comes with a 21 day
              diet plan.
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              alt="paana"
              src="/treat7.jpeg"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto rounded-2xl"
            />
          </div>
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base font-lora dark:text-white">
                  <li>
                    • Revives your body as a whole and it’s ability to healitself
                  </li>
                  <li>
                    • Addresses almost all diseases, allergies, conditionsand
                    chronic issues.
                  </li>
                  <li>• Aids the body in achieving homeostasis</li>
                  <li>• Keeps skin healthy by increasing skin blood flow</li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                3 Lymphatic cleanse session 3 Sessions - 2 LD (lymphatic
                  drainage)+ 1 HLD (LD followed by Hijama cupping on nodal sites)
                  + 3 session full body & vital organ cleanse (Upper body + Torso
                  + Lower body)
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm dark:text-white sm:text-base flex justify-center">
                3-4 weeks plan; 6 sessions
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        Hijama Cupping: A sure fire remedy to all your body pains and
                  migraines. Say goodbye to stressful living.
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 8,
      title: "Custom Plan",
      image: "/paana.jpg",
      slug: "custom-plan",
      content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-16 text-black">
          <div className="py-4"></div>
  
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm sm:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>
  
          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Custom Plan
          </h1>
  
          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>
  
        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed dark:text-white px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto max-w-4xl font-lora">
          The custom plan targets client specific issues and requirements the
          varying from chronic issues related follow up sessions, pains,
          athletic performance enhancement, injury recoveries, Metaphysical
          issues focused sessions. Personal areas of pain are concentrated
          upon.
        </p>
  
        {/* Image + Content Section */}
        <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              alt="paana"
              src="/treat7.jpeg"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto rounded-2xl"
            />
          </div>
          {/* Right - Text Content */}
          <div className="w-full lg:w-1/2 ">
            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
  
              <div className="flex items-center justify-center min-h-screen">
                <ul className="mt-3 space-y-2 text-gray-700 dark:text-white text-sm sm:text-base font-lora">
                  <li>• Treats areas of muscular (and otherwise) painf</li>
                  <li>• Treats metaphysical issues</li>
                  <li>
                    • Cupping therapy sessions are tailored to your personal
                    issues and needs
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Duration */}
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm dark:text-white sm:text-base flex justify-center">
                Duration of each session varies with every client, approximately
                45 to 60 minutes and above
              </p>
            </div>
  
            {/* Requirement */}
            <div className="mt-8 mb-8 ">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white flex justify-center">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700 text-sm sm:text-base dark:text-white flex justify-center">
                Number of sessions vary with every client
              </p>
            </div>
          </div>
        </div>
  
        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-24 w-full flex flex-col items-center space-y-10">
  {/* Call for Appointments */}
  <div className="flex justify-center">
    <Link href="tel:800-9944-335">
      <button className="flex items-center space-x-2 border dark:text-black border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
        <span className="text-xl">📞</span>
        <span>Call for Appointments</span>
      </button>
    </Link>
  </div>
  
  {/* Quote */}
  <div className="flex flex-col items-center space-y-6 dark:text-black px-2">
    <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
      <p className="text-base sm:text-lg lg:text-2xl">
        Hijama Cupping – The only therapy which affects both Body &
        Soul.
      </p>
    </div>
  </div>
  </div>
  
  
        {/* Other Plans Section */}
        <div className="relative z-10 bg-gray-100 py-6 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 9,
    title: "Sports Plus",
    image: "/SportPlan.jpg",
    slug: "why-choose-a-female-hijama-specialist-in-hyderabad",
    content: (
      <section className="relative">
        {/* Overlay */}
        <div className="absolute w-full h-full"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-black">
          {/* Back Link */}
          <Link
            href="/treatment-plans"
            className="flex items-center text-sm md:text-base text-black dark:text-white"
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-black dark:text-white">
            Sports Plus
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>

          {/* Description */}
          <p className="mt-4 text-sm md:text-lg text-white/80 leading-relaxed font-lora dark:text-white">
            The Sports Plus plan is the go-to treatment for every athlete and
            gym-goer. Athletes generally choose to have cupping therapy done
            before participating in their sport, as well as after. Most have a
            goal of addressing specific aches and pains within their body, as
            well as increase mobility. <br />
            <br />
            The plan is designed specially to improve circulation, relax muscles
            and ease out cramps – all adding up to quicker recovery – just in
            time for your next match.
          </p>
          <div className="container mx-auto max-w-6xl">
            <Image
              alt="paana"
              src="/treat9.jpeg"
              width={500}
              height={500}
              className="w-full h-full rounded-y-2xl"
            />
          </div>
        </div>
        <div className="relative z-10 bg-white px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-24">
          {/* Left Section (Text Content) */}
          <div>
            {/* Benefits */}
            <div className="mb-8">
              <h2 className="text-xl font-bold dark:text-black">
                Benefits
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <ul className="mt-3 space-y-2 text-gray-700 font-lora">
                <li>
                  • Helps decrease limb recovery time after strenuous workouts
                </li>
                <li>
                  • Stimulates chemical breakdown of toxins within the body,
                  leading to tissue repair
                </li>
                <li>• Improves blood circulation and energizes the body</li>
                <li>• Increases mobility and flexibility</li>
                <li>
                  • Treats conditions such as plantar fasciitis, hamstring
                  strains, sore muscles and back pain
                </li>
              </ul>
            </div>

            {/* Duration */}
            <div className="mb-8">
              <h2 className="text-xl font-bold dark:text-black">
                Duration
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700">
                Each session may take approximately 60-90 mins
              </p>
            </div>

            {/* Requirement */}
            <div>
              <h2 className="text-xl font-bold dark:text-black">
                Requirement
                <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
              </h2>
              <p className="mt-3 text-gray-700">
                Number of sessions depend on type of injury or reason for
                cupping
              </p>
            </div>
          </div>

          {/* Right Section (Call Button & Quote) */}
          <div className="flex flex-col items-center space-y-6">
            {/* Call for Appointments Button */}
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 dark:text-black border border-black px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>

            {/* Quote Box */}
            <div className="border border-green-500 p-6 rounded-lg relative text-center text-lg italic font-semibold text-gray-800 bg-white max-w-2xl">
              {/* Top Quote Decoration */}

              <p className="text-lg lg:text-3xl">
                For sure one needs to spare time for his body, if not for
                wellness then unfortunately it would be for illness
              </p>
              {/* Bottom Quote Decoration */}
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-gray-100 py-6 lg:py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {/* Section Title */}
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Our Other Plans
              <div className="w-16 h-0.5 bg-green-500 mt-1"></div>
            </h2>
          </div>
        </div>
      </section>
    ),
  },
];
