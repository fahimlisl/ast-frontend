// import { Facebook } from "lucide-react";
// import SEOHead from "../components/SEOHead";
// import { seoConfig } from "../utils/seoConfig";

// const Contact = () => {
//   const config = seoConfig.contact;

//   const schemaMarkup = {
//     "@context": "https://schema.org",
//     "@type": "ContactPoint",
//     "telephone": "+91-XXXXXXXXXX",
//     "contactType": "Customer Service",
//     "email": "editorsaralpath@gmail.com",
//     "areaServed": "IN",
//     "availableLanguage": "en"
//   };

//   return (
//     <>
//       <SEOHead
//         title={config.title}
//         description={config.description}
//         keywords={config.keywords}
//         ogImage={config.ogImage}
//         canonical={config.canonical}
//         schemaMarkup={schemaMarkup}
//       />

//       <div className="max-w-7xl mx-auto px-6 py-24">
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Contact & Connect with Abdus Sakur Taimy
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             For questions, feedback, or beneficial collaboration,
//             feel free to reach out through the channels below.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div 
//             className="border border-white/10 rounded-3xl p-8 text-center
//             hover:border-emerald-500/40 transition"
//             itemScope
//             itemType="https://schema.org/ContactPoint"
//           >
//             <div className="text-3xl mb-4">📧</div>
//             <h3 className="text-xl font-semibold mb-2" itemProp="name">Email</h3>
//             <p className="text-gray-400 text-sm mb-4">
//               For personal queries, corrections, or suggestions.
//             </p>

//             <a
//               href="mailto:editorsaralpath@gmail.com"
//               className="inline-block text-emerald-400 hover:underline"
//               itemProp="email"
//             >
//               editorsaralpath@gmail.com
//             </a>
//           </div>

//           <div 
//             className="border border-white/10 rounded-3xl p-8 text-center
//             hover:border-emerald-500/40 transition"
//             itemScope
//             itemType="https://schema.org/ContactPoint"
//           >
//             <div className="text-3xl mb-4">💬</div>
//             <h3 className="text-xl font-semibold mb-2" itemProp="name">WhatsApp Channel</h3>
//             <p className="text-gray-400 text-sm mb-4">
//               Receive updates, reminders, and beneficial knowledge directly.
//             </p>

//             <a
//               href="https://whatsapp.com/channel/YOUR_CHANNEL_ID"
//               className="inline-block px-5 py-2 rounded-xl
//               bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
//               itemProp="url"
//             >
//               Join Channel
//             </a>
//           </div>

//           <div 
//             className="border border-white/10 rounded-3xl p-8 text-center
//             hover:border-emerald-500/40 transition"
//           >
//             <div className="text-3xl mb-4">🌐</div>
//             <h3 className="text-xl font-semibold mb-2">Social Platforms</h3>
//             <p className="text-gray-400 text-sm mb-4">
//               Follow and stay connected on social platforms.
//             </p>

//             <div className="flex justify-center gap-4 text-sm">
//               <a 
//                 href="https://www.facebook.com/mdtuzzammel.haq"
//                 className="px-4 py-2 rounded-full bg-blue-700 border border-white/10 hover:bg-blue-600 transition"
//                 rel="noopener noreferrer"
//                 aria-label="Visit our Facebook page"
//               >
//                 <Facebook size={20} />
//               </a>
//               <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400">
//                 YouTube (soon)
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="mt-24 max-w-4xl mx-auto border border-white/10 rounded-3xl p-10">
//           <h2 className="text-2xl font-semibold mb-4 text-center">
//             WhatsApp Study Groups
//           </h2>

//           <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
//             Join our WhatsApp study groups to participate in structured learning,
//             discussions, and reminders related to Islamic knowledge and Qur'anic studies.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div 
//               className="border border-white/10 rounded-2xl p-6"
//               itemScope
//               itemType="https://schema.org/Thing"
//             >
//               <h4 className="font-medium mb-2" itemProp="name">General Islamic Studies</h4>
//               <p className="text-sm text-gray-400 mb-4" itemProp="description">
//                 Daily reminders, short explanations, and reflections on Islamic teachings.
//               </p>
//               <a
//                 href="#"
//                 className="text-emerald-400 hover:underline text-sm"
//               >
//                 Join Group →
//               </a>
//             </div>

//             <div 
//               className="border border-white/10 rounded-2xl p-6"
//               itemScope
//               itemType="https://schema.org/Thing"
//             >
//               <h4 className="font-medium mb-2" itemProp="name">Qur'an & Tafsir Discussions</h4>
//               <p className="text-sm text-gray-400 mb-4" itemProp="description">
//                 Ayah-by-ayah learning, tafsir discussions, and Quranic insights.
//               </p>
//               <a
//                 href="#"
//                 className="text-emerald-400 hover:underline text-sm"
//               >
//                 Join Group →
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-24 text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
//           "The most beloved of people to Allah are those who are most beneficial
//           to others." — Islamic Hadith
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import { Facebook,Youtube } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Contact = () => {
  const config = seoConfig.contact;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "Customer Service",
    "email": "abdussakurtaimy8436@gmail.com",
    "areaServed": "IN",
    "availableLanguage": "en"
  };

  return (
    <>
      <SEOHead
        title={config.title}
        description={config.description}
        keywords={config.keywords}
        ogImage={config.ogImage}
        canonical={config.canonical}
        schemaMarkup={schemaMarkup}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact & Connect with Abdus Sakur Taimy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            For questions, feedback, or beneficial collaboration,
            feel free to reach out through the channels below.
          </p>
        </div>

        <div className="mb-24 max-w-4xl mx-auto border border-white/10 rounded-3xl p-10 bg-black/40 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-amber-400">
            About the Writer
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Shaikh Abdus Sakur Taimy is a resident of Panditpur village under
            Nadia district. He completed his primary education from Panditpur
            Primary School and passed eighth class from Salehdanga Madrasah
            Darul Uloom Ehiya Us Sunnah, Bezpara, Murshidabad. He passed Alem
            from Hossain Nagar D.O Senior Madrasa, and Fazil from Beldanga
            Senior Madrasa.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
            He went on to complete his B.A in Arabic Honours from Alia
            University, a B.Ed from Kabiguru College of Education, and an M.A
            by distance from Madras University. He also completed a computer
            diploma course, and edited the annual magazine "Al-Furqan".
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
            He served as the headmaster at Hossain Nagar Rahmania Darul Uloom
            Madrasa in Murshidabad district, and later at Barbakpur
            Madrasatul Banat in Nadia district. Currently, he serves as the
            headmaster at Salehdanga Madrasah Darul Uloom Ehiya Us Sunnah, in
            Murshidabad district.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="border border-white/10 rounded-3xl p-8 text-center
            hover:border-amber-500/40 transition"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2" itemProp="name">Email</h3>
            <p className="text-gray-400 text-sm mb-4">
              For personal queries, corrections, or suggestions.
            </p>

            <a
              href="mailto:editorsaralpath@gmail.com"
              className="inline-block text-amber-400 hover:underline"
              itemProp="email"
            >
              abdussakurtaimy8436@gmail.com
            </a>
          </div>

          {/* <div 
            className="border border-white/10 rounded-3xl p-8 text-center
            hover:border-amber-500/40 transition"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2" itemProp="name">WhatsApp Channel</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receive updates, reminders, and beneficial knowledge directly.
            </p>

            <a
              href="https://whatsapp.com/channel/YOUR_CHANNEL_ID"
              className="inline-block px-5 py-2 rounded-xl
              bg-amber-500 text-black font-medium hover:bg-amber-400 transition"
              itemProp="url"
            >
              Join Channel
            </a>
          </div> */}

          <div 
            className="border border-white/10 rounded-3xl p-8 text-center
            hover:border-amber-500/40 transition"
          >
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Social Platforms</h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow and stay connected on social platforms.
            </p>

            <div className="flex justify-center gap-4 text-sm">
              <a 
                href="https://www.facebook.com/share/14h85B2gS8J/"
                className="px-4 py-2 rounded-full bg-blue-700 border border-white/10 hover:bg-blue-600 transition"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com/@abdussakurtaimy?si=xhraClloYvz3fxHF"
                className="px-4 py-2 rounded-full  border border-white/10  transition"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Youtube className="text-red-500" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="mt-24 max-w-4xl mx-auto border border-white/10 rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            WhatsApp Study Groups
          </h2>

          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Join our WhatsApp study groups to participate in structured learning,
            discussions, and reminders related to Islamic knowledge and Qur'anic studies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="border border-white/10 rounded-2xl p-6"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <h4 className="font-medium mb-2" itemProp="name">General Islamic Studies</h4>
              <p className="text-sm text-gray-400 mb-4" itemProp="description">
                Daily reminders, short explanations, and reflections on Islamic teachings.
              </p>
              <a
                href="#"
                className="text-amber-400 hover:underline text-sm"
              >
                Join Group →
              </a>
            </div>

            <div 
              className="border border-white/10 rounded-2xl p-6"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <h4 className="font-medium mb-2" itemProp="name">Qur'an & Tafsir Discussions</h4>
              <p className="text-sm text-gray-400 mb-4" itemProp="description">
                Ayah-by-ayah learning, tafsir discussions, and Quranic insights.
              </p>
              <a
                href="#"
                className="text-amber-400 hover:underline text-sm"
              >
                Join Group →
              </a>
            </div>
          </div>
        </div> */}

        <div className="mt-24 text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
          "The most beloved of people to Allah are those who are most beneficial
          to others." — Islamic Hadith
        </div>
      </div>
    </>
  );
};

export default Contact;