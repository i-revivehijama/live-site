import Image from "next/image";
 import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";

const reviews = [
  {
    name: "Muskaan Nisar",
    content:
      "Dr. Mohammed Imran was great! Was Knowledgeable, informative and explained me about my health and hijama procedures very well. I immediately felt at ease and felt confident to proceed for hijama. Staff was great and friendly too, very impressed experience. HIGHLY recommend",
  },
  {
    name: "Irfan Syed",
    content:
      "I recently had an excellent experience with a hijama cupping session at i-revive! The practitioners were highly skilled, and the consultation with Dr. Imran was particularly outstanding. Dr. Imran provided thorough and insightful advice during the consultation, ensuring I was well-informed about the procedure and its potential.",
  },
  {
    name: "Adiba Fatima",
    content:
      "Came across a place where privacy is maintained, professional service, hygienic beds, ...myself felt comfortable sessions alhamdulillah... I can say A1 service by the practitioners ... little bit costly though I felt... Rest is great one can have satisfying sessions . go ahead and enroll an appointment",
  },
  {
    name: "Muskan kausar",
    content:
      "Alhamdulilah done with my First Hijama Session at i-Revive Centre. Love the the way Therapist handle carefully starting till the end ensuring If we are feeling pressure, pain or burning. Awesome equipments, Thank you for your great service",
  },
  {
    name: "Anjum Fatima",
    content:
      "Asalamualaikum. Had a wonderful experience of hijama for myself and ruqyah for my child. Excellent staff, very cooperative. Strongly recommend to all for peaceful experience of this sunnat.",
  },
  {
    name: "Ramlatha Ramla",
    content:
      "Am from Andaman and Nicobar Islands. Recently experienced a relaxing hijama therapy with i-revive. Doctor and staffs are really compassionate to their work. I really feel relaxed and happy. I recommend to everyone for hijama therapy.",
  },
  {
    name: "Latha T",
    content:
      "So Hygienic, Very Gud Treatment, very very friendly Staff. We can feel top most Hygienic clinic. Ones you should visit and you should feel the treatment. Words and reviews cant make u happy only walking and getting treatment only will tell u how the best they are.",
  },
  {
    name: "Abdul Hameed",
    content:
      "I recently visited iRevive Cupping Hijama in Hyderabad, and my experience was exceptional. Dr. Imran is incredibly talented and takes the time to listen to his patients carefully, offering the best suggestions tailored to individual needs. The hijama technicians are highly professional, performing the procedure with great care and precision. The entire process was smooth and",
  },
  {
    name: "Shaik Zaiduddin",
    content:
      "Assalamualaikum this is dr ziauddin. I consulted here regarding autoimmune issues. Underwent 2 sessions till now, alhamdulillah have noticed some change. Dr imran is very good n he is very patient with us regarding our issues and questions. The team is very well trained and sessions are of adequate time.",
  },
  {
    name: "Mohammed Sayeed",
    content:
      "Alhamdulillah... a completely different experience. Honestly I loved the presentation and maintenance... blood related procedures could be vulnerable to secondary infections... and here you don't have to worry about it... in short... definitely recommend this place...!!! I'm glad that these guys took hijama to another level.",
  },
  {
    name: "Ali Akber",
    content:
      "Alhamdulillah done with my First Hijama Session at i-Recover Centre. Love the way Therapist handles carefully starting till the end ensuring if we are feeling pressure, pain or burning. Awesome equipment, Thank you for your great service.",
  },
  {
    name: "Mohd Imranuddin",
    content:
      "Cupping therapy exceeded my expectations! After just one session, Alhamdulillah I felt an incredible sense of relief from pains. The therapist was knowledgeable and attentive, ensuring a comfortable experience throughout. The slight bruising afterward was worth the immediate tension release and overall relaxation. I highly recommend cupping therapy for anyone seeking.",
  },
  {
    name: "Ash Tqr",
    content:
      "I was seen promptly, diagnosed quickly! Very professional staff. The place was immaculate. I was very impressed! I was treated with respect and staff had professional attitude. I would recommend i-revive to anyone who is looking for hijama.",
  },
  {
    name: "Zeenith Zia",
    content:
      "It is one of the best Hijama center in town, I've recommended alot of people already.All sunnahs are followed, Hygiene is maintained ,customers are Dealt with humility and patience. I am currently going for Ruqya sessions aswell and completed 3 sessions till date. The process is going pretty smooth and progressive",
  },
  {
    name: "Abdullah Naser",
    content:
      "Excellent care and attention all the way from entering into the center, performing cupping, cleanup after and end of session snacks. Alhamdulillah, very good experience. Came with my dad who is 82 and they took good care of my dad. In Sha Allah will come back everytime we visit India. Definitely recommend it for everyone seeking for holistic health benefits and to follow.",
  },
  {
    name: "Nishat Fatima",
    content:
      "The services provided by I revive are mashallah very good, very neat, the dr makes you understand the entire procedure and advise sessions accordingly, we have taken all the sessions and are satisfied alhamdulillah, and recommend others too to opt for this cupping centre.",
  },
  {
    name: "Arshia Tasneen",
    content:
      "I came here for the first time after seeing reviews on Instagram. It was such a great experience consulting Imran sir and he suggested to take few sessions and discussed our physical issues very patently.Staff is also very polite and friendly",
  },
  {
    name: "Afroz mohammed",
    content:
      "Delighted hospitality Experienced Doctors for Consultation with proper explanation for Cupping and Right points for Cupping explained. Hygienic Process Over all one stop is only I REVIVE",
  },
  {
    name: "Muneeb Ahmed",
    content:
      "I highly recommend this place to everyone looking to get their body detoxed. The staff is qualified, place is hygienic and the disposables used are new. The procedures and overall process is carefully designed to ensure maximum comfort and soothing experience. Areas of improvement: Parking a car is a challenge, designated place for i revive customers will help alot!",
  },
  {
    name: "Syed Afsar",
    content:
      "My experience with Hijama was nothing short of amazing.I was warmly welcomed by the attentive staff. The facility was very clean, highly hygienic with calming atmosphere. The treatment I received was expertly performed, leaving me feeling relaxed and rejuvenated. Highly recommended!!",
  },
  {
    name: "Afnan naweed",
    content:
      "Alhamdulillah\nI got my hijama done\nI myself am a hijama practitioner and personally I approve this place as one of the best places to get hijama done in Hyderabad\nAnd I will highly recommend this place to my family and friends",
  },
  {
    name: "Mohammed Khader",
    content:
      "Highly recommended based on following:\n1. Qualified Practitioners\n2. Hygiene and safety\n3. Aftercare guidances",
  },
  {
    name: "Mohammed irshaad",
    content:
      "I have visited i-Revive Hijama center and was thoroughly impressed. The staff was very professional, ensuring a comfortable and informative experience. The cleanliness standards were impeccable, which immediately put me at ease. Moreover, the soothing minimalistic atmosphere enhanced the relaxation during the session. Highly recommend for anyone seeking a",
  },
  {
    name: "Shaik Arsalan",
    content:
      "Pleasantly surprised! Wasn't expecting this 5 star treatment but this hidden gem just blew me away! All the therapists and consultants are super professional and definitely know what they are doing! Already booked my next session with them!!",
  },
  {
    name: "Md. Ali",
    content:
      "Very clean environment and the people are very professional. I was very nervous doing this for the first time after almost 13 years but the people there made me very comfortable. Would recommend this place for Hijama",
  },
  {
    name: "Sareen Sana",
    content:
      "I recently had a pleasure of experiencing hijama session at i-revive, and I am thrilled to share how exceptional it was. From start to finish the entire experience exceeded my expectations in every way.\nThe atmosphere was incredibly calming and professional. From the time you step into the clinic you get a vibe of positivity and healing. Trust me i",
  },
  {
    name: "Mazhar Mohammad",
    content:
      "Alhamdulillah had good Experience with Hijama Experts. 2 years back also I done with Hijama in other place, but here in i-revive Hijama center is good. they diagnose the first and after done the cupping therapy.. I will suggest everybody done service here.",
  },
  {
    name: "Mohd imranddin",
    content:
      "Cupping therapy exceeded my expectations! After just one session, Alhamdulilah I felt an incredible sense of relief from pains. The therapist was knowledgeable and attentive, ensuring a comfortable experience throughout. The slight bruising afterward was worth the immediate tension release and overall relaxation. I highly recommend cupping therapy for anyone seeking",
  },
  {
    name: "Abdul Muqtadir",
    content:
      "An Excellent centre for hijama in the city's centre. The staff was courteous, Ambience is relaxing, Dr is quite knowledgeable explained things in detail and he knows what he is doing, over all an excellent experience. Would definitely recommend it to my family and friends.",
  },
  {
    name: "Faiz Faiz",
    content:
      "I recently had the pleasure of experiencing a Hijama session, and I must say, it was truly rejuvenating. The practitioner was incredibly knowledgeable and took the time to explain the process thoroughly, ensuring I felt comfortable every step of the way. The ambiance of the clinic was soothing, creating the perfect environment for relaxation. After the session, I felt an immediate",
  },
  {
    name: "Nousheen fatima",
    content:
      "I am so pleased with the service I received from I revive hijama centre. They went above and beyond to provide the best possible service. I am very impressed with the ambience, hygiene, and polite and friendly staff. The whole process went very smooth, starting from the appointment till the completion of hijama, lastly they served dates with fresh water which was a great experience. The",
  },
  {
    name: "Shabana Begum",
    content:
      "I recently attended a cupping and hijama session and wanted to share my positive experience. The session was incredibly relaxing, and I felt immediate benefits for both my mental and physical health. The doctors were professional and attentive, ensuring that I was comfortable throughout the process.\nThank you for providing such a valuable service. I",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#F2F4F7] py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/google-logo.png"
              alt="Google Logo"
              width={80}
              height={80}
              className="mb-2"
            />
            <h2 className="text-5xl md:text-6xl font-bold">5.0</h2>
            <div className="flex justify-center text-yellow-400 my-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <IoIosStar key={i} className="md:w-12 md:h-12 text-yellow-400 fill-current" />
                ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-xl h-64 flex flex-col justify-between"
            >
              <div className="text-[#99CC66] text-3xl leading-none mb-2">
                <RiDoubleQuotesR />
              </div>
              <div className="overflow-y-auto scrollbar-hide text-sm text-gray-800 flex-1 pb-6 leading-relaxed">
                {review.content}
              </div>

              <p className="font-semibold text-gray-900 mt-2">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}