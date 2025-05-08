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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Sunnah Basic
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The Sunnah Basic is a starter plan that covers the basic Sunnah
          Cupping sites which help in general body maintenance and applicable to
          diseases/chronic issues. <br className="hidden sm:block" />
          These include two points on the neck or between scapulas and two on
          upper back (Kahil) respectively.
        </p>

        {/* Image + Content Section */}
        {/* Full Section: Image + Benefits + Duration + Requirement */}

        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Paana Image"
              src="/paana.jpg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>Back and neck pains</li>
                <li>Stiff muscles</li>
                <li>Sore joints</li>
                <li>Encourage blood flow</li>
                <li>Reduces pain and inflammation</li>
                <li>Migraines & Headaches</li>
                <li>Fatigue</li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session goes for approximately 45–60 mins
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">1 Session</p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border  border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Sunnah Plus
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The Sunnah Plus is a more extensive plan covering 9 (10 with 2nd
          Kahil) points including the basic Sunnah points, along with a deep
          tissue stroke and gliding cupping.
        </p>

        {/* Image + Content Section */}
        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Paana Image"
              src="/treat2.jpeg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>Back and neck pains</li>
                <li>Stiff muscles & Sore joints</li>
                <li>Reduces pain and inflammation</li>
                <li>Migraines, Head Aches & Fatigue</li>
                <li>Rheumatic diseases such as arthritis and fibromyalgia</li>
                <li>Fertility and gynecological disorders</li>
                <li>Skin problems such as eczema and acne</li>
                <li>
                  Sedates the nervous system (helps with high blood pressure)
                </li>
                <li>Menstrual cramps, PMS, and other OBGYN issues</li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session goes for approximately 75–90 mins
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">1 Session</p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border  border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Vital Organ Cleanse
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The vital organ cleanse is a body maintenance plan that targets all
          vital bodily systems. It is an exhaustive cleanse targeting all
          organs, addressing multiple conditions and body systems. The cleanse
          also acts like a preventative maintenance for your body’s overall
          wellbeing.
        </p>

        {/* Image + Content Section */}
        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Vital Organ Cleanse Image"
              src="/treat3.jpeg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>
                  Vitalises bodily functions by reinvigorating organs through
                  improved blood flow
                </li>
                <li>Clears blockages and stagnated circulation</li>
                <li>
                  Activates and clears the veins, arteries, and capillaries
                </li>
                <li>Realigns/balances vital energy</li>
                <li>Promotes and improves circulation</li>
                <li>Helps achieve homeostasis</li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session goes for approximately 60–90 mins
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                First-timers: One session every 4 to 6 weeks (total of 3
                sessions). Followed by quarterly sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border  border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Head Cupping
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          Head cupping is highly beneficial and can treat an array of ailments
          related to the head. Performing cupping therapy on the scalp can help
          open the follicles and promote blood circulation to help maintain the
          hair. A 2010 study by the World Family Medicine Journal found that
          patients treated for chronic headaches experienced reduced severity
          after cupping. Key points include the top of the head (Yafookh), back
          of the head (Qamaduwah), and two along the base of the ears
          (Akhda’ain).
        </p>

        {/* Image + Content Section */}
        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Head Cupping Image"
              src="/treat4.jpeg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>Helps treat headaches, sinus issues, and migraines</li>
                <li>Treats metaphysical issues</li>
                <li>Encourages hair growth</li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session goes for approximately 60 mins
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                6–8 sessions depending on individual issues
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border border-black  px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
            <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Lymphatic Cleanse
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The lymphatic system is our body’s ‘sewerage system’. It is
          responsible for collecting and removing wastes, toxins, dead cells
          etc. from the tissues, acting as a systematic garbage collection
          service. When this waste is not collected adequately or effectively,
          it congregates as a localized congestion.
          <br />
          <br />
          This is where Cupping Therapy can assist—in the removal of these
          blockages and stagnant fluids, and in clearing lymph channels to allow
          the lymphatic system to operate freely once again.
        </p>

        {/* Image + Content Section */}
        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Lymphatic Cleanse Image"
              src="/treat5.jpeg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>
                  Stimulates the lymphatic system and releases local toxins
                </li>
                <li>Clears blockages and stagnated circulation</li>
                <li>
                  Activates and clears the veins, arteries, and capillaries
                </li>
                <li>Helps treat blood and neurological disorders</li>
                <li>
                  Reduces anxiety and depression by sedating the central nervous
                  system
                </li>
                <li>
                  Boosts metabolism and immune system; facilitates weight loss
                </li>
              </ul>
            </div>

            {/* Duration */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session goes for approximately 90–120 mins
              </p>
            </div>

            {/* Requirement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                3 sessions — 2 LD (lymphatic drainage) + 1 HLD (LD followed by
                Hijama cupping on nodal sites), weekly once for first-timers;
                more sessions may be needed for noticeable results.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border border-black  px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
            <div className="border border-green-500 p-4 sm:p-6 rounded-lg relative text-center text-sm sm:text-lg italic font-semibold text-gray-800 bg-white max-w-full sm:max-w-2xl">
              <p className="text-base sm:text-lg lg:text-2xl">
                Hijama Cupping: A sure-fire remedy to all your body pains and
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
    image: "/treat3.jpeg",
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Infertility Cupping
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          Infertility Cupping is a therapeutic treatment that helps balance the
          body&apos;s internal pH, chemical, and hormonal levels. It works by
          clearing blockages and improving blood circulation, which is crucial
          for reproductive health. Cupping promotes a healthy flow of blood to
          the reproductive organs, providing essential nutrients, oxygen,
          vitamins, and minerals to help produce healthy sperm and ova. It also
          aids in building a healthy endometrium to nourish and sustain a
          pregnancy. The benefits of Infertility Cupping include inducing
          ovulation, removing blockages and inflammation in the Fallopian tubes,
          and addressing issues like endometriosis, where the lining of the
          uterus forms outside of it. It is also effective in balancing
          hormones, particularly in cases of Ovarian Syndrome (PCOS), and can
          help reposition a misaligned uterus. By increasing circulation to the
          ovaries and testes, it enhances fertility, and may even increase
          libido, as well as the quality and quantity of sperm. Each session of
          Infertility Cupping lasts approximately 60 to 90 minutes, and it is
          recommended to undergo a fertility-focused wet cupping treatment.
          While it is highly recommended, undergoing an iRP Lite session (which
          involves a lymphatic cleanse with wet cupping and a full body cleanse)
          can also be beneficial, though it is not mandatory.
        </p>

        {/* Image + Content Section */}
        {/* Full Section: Image + Benefits + Duration + Requirement */}

        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Paana Image"
              src="/treat6.jpeg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>
                  Induces ovulation and removes blockages and inflammation in
                  the Fallopian tubes.
                </li>
                <li>
                  Addresses endometriosis or issues where the uterine lining
                  forms outside the uterus.
                </li>
                <li>
                  Balances hormones, especially in Ovarian Syndrome (PCOS).
                </li>
                <li>Helps in promoting overall hormonal balance.</li>
                <li>
                  Repositions a misaligned uterus, increasing blood, lymph, and
                  nervous system circulation.n
                </li>
                <li>Brings rich, oxygenated blood to ovaries and testes.</li>
                <li>
                  Can increase libido and improve the quality and quantity of
                  sperm.
                </li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session lasts approximately 60–90 minutes.
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                iRP Lite (Highly recommended but not mandatory): Lymphatic
                cleanse with wet cupping + 3 session full body & vital organ
                cleanse (upper body, torso, and lower body). <br />
                Fertility-focused wet cupping.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border  border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
    id: 7,
    title: "i-Revive Plan",
    image: "/paana.jpg",
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            i-Revive Plan
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The i-Revive Plan is a comprehensive health reset that addresses a
          wide range of diseases, chronic conditions, and imbalances. The plan
          revitalizes the body using a series of cupping sessions, which act as
          a supercharged boost to your overall health. This approach aims to
          bring the body back to an optimal state of health in a short period of
          time before it returns to its diseased state. The plan includes
          lymphatic drainage sessions, sectional cleansing sessions, and a
          21-day diet plan.
        </p>

        {/* Image + Content Section */}
        {/* Full Section: Image + Benefits + Duration + Requirement */}

        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Paana Image"
              src="/paana.jpg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>
                  Revives the body as a whole and enhances its ability to heal
                  itself.
                </li>
                <li>
                  Addresses almost all diseases, allergies, chronic conditions,
                  and health issues.
                </li>
                <li>
                  Aids in achieving homeostasis (balance within the body).
                </li>
                <li>
                  Improves skin health by increasing blood flow to the skin.
                </li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                3 lymphatic cleanse sessions: 2 Lymphatic Drainage (LD) sessions
                and 1 Hijama cupping session on nodal sites. <br />3 full body
                and vital organ cleanse sessions (upper body, torso, and lower
                body).
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                3-4 weeks plan with 6 sessions in total.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border  border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
    id: 8,
    title: "Custom Plan",
    image: "/treat5.jpeg",
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Custom Plan
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The Custom Plan is tailored to meet specific client needs and
          addresses a variety of issues, including chronic conditions, pain
          management, athletic performance enhancement, injury recovery, and
          metaphysical concerns. The focus is on treating personal areas of
          pain, with sessions customized to each client&apos;s unique
          requirements.
        </p>

        {/* Image + Content Section */}
        {/* Full Section: Image + Benefits + Duration + Requirement */}

        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Paana Image"
              src="/paana.jpg"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>Treats muscular and other forms of pain.</li>
                <li>Addresses metaphysical issues.</li>
                <li>
                  Cupping therapy sessions are personalized to meet individual
                  needs and health concerns
                </li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                The duration of each session varies depending on the client,
                typically lasting between 45 to 60 minutes or more.
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                The number of sessions varies for each client, depending on
                their specific needs.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border  border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
    id: 9,
    title: "Sports Plus",
    image: "/treat6.jpeg",
    slug: "why-choose-a-female-hijama-specialist-in-hyderabad",
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
            className="flex items-center text-sm sm:text-base text-black "
          >
            ← Back to All Plans
          </Link>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black ">
            Sports Plus
          </h1>

          {/* Underline Effect */}
          <div className="w-24 h-0.5 bg-green-400 mt-2"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-black leading-relaxed  px-4 sm:px-6 md:px-16 text-justify sm:text-justify mx-auto">
          The Sports Plus plan is a must for athletes and gym-goers who want to
          maximize their performance and recovery. Cupping therapy is popular
          among athletes before and after their activities to alleviate specific
          aches and pains, enhance mobility, and improve overall circulation.
          This plan is designed to relax muscles, ease cramps, and speed up
          recovery, ensuring you&apos;re ready for your next match.
        </p>

        {/* Image + Content Section */}
        {/* Full Section: Image + Benefits + Duration + Requirement */}

        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <Image
              alt="Paana Image"
              src="/treat9.JPEG"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full flex flex-col gap-10">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Benefits
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700  text-base space-y-2">
                <li>
                  Helps decrease limb recovery time after strenuous workouts.
                </li>
                <li>
                  Stimulates the breakdown of toxins in the body, leading to
                  tissue repair.
                </li>
                <li>Improves blood circulation and energizes the body.</li>
                <li>Increases mobility and flexibility.</li>
                <li>
                  Treats conditions like plantar fasciitis, hamstring strains,
                  sore muscles, and back pain.
                </li>
              </ul>
            </div>

            {/* Duration Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Duration
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                Each session typically lasts 60-90 minutes.
              </p>
            </div>

            {/* Requirement Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                Requirement
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-700  text-base">
                The number of sessions varies based on the type of injury or the
                reason for cupping therapy.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action + Quote */}
        <div className="relative z-10 bg-white px-4 sm:px-6 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-24 w-full flex flex-col items-center space-y-10">
          {/* Call for Appointments */}
          <div className="flex justify-center">
            <Link href="tel:800-9944-335">
              <button className="flex items-center space-x-2 border border-black px-5 sm:px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition text-sm sm:text-base">
                <span className="text-xl">📞</span>
                <span>Call for Appointments</span>
              </button>
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col items-center space-y-6  px-2">
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
];
