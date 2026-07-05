// import { Link } from "react-router-dom";
// import SEOHead from "../components/SEOHead";
// import { seoConfig } from "../utils/seoConfig";

// const Home = () => {
//   const config = seoConfig.home;

//   const schemaMarkup = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "Abdus Sakur Taimy",
//     "url": "https://abdusskaurtaimyofficial.com/",
//     "logo": "https://abdusskaurtaimyofficial.com/logo.png",
//     "description": "A place for authentic Islamic knowledge - articles, khutbas, and resources rooted in the Qur'an and Sunnah",
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": "+91-XXXXXXXXXX",
//       "contactType": "Customer Service",
//       "email": "contact@abdusskaurtaimyofficial.com"
//     },
//     "sameAs": [
//       "https://facebook.com/tajammul",
//       "https://youtube.com/@tajammul"
//     ]
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

//       <section className="relative overflow-hidden">
//         <div
//           className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
//         bg-emerald-500/20 blur-[120px] rounded-full"
//         />
        

//         <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32 text-center">
//           <p className="text-emerald-400 text-sm md:text-base tracking-wide mb-6">
//             وَقُل رَّبِّ زِدْنِي عِلْمًا
//           </p>

//           <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
//             A Place for
//             <span className="block text-emerald-400 mt-2">
//               Authentic Islamic Knowledge
//             </span>
//           </h1>

//           <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
//             Explore well-researched articles, powerful khutbas, and carefully
//             curated resources rooted in the Qur'an and Sunnah — shared with
//             sincerity and clarity. Discover authentic Islamic teachings by Abdus Sakur Taimy.
//           </p>

//           <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link
//               to="/articles"
//               className="px-8 py-4 rounded-full bg-emerald-500 
//               hover:bg-emerald-600 transition font-medium text-lg"
//             >
//               Read Articles
//             </Link>

//             <Link
//               to="/khutba"
//               className="px-8 py-4 rounded-full border border-white/20 
//               hover:bg-white/5 transition font-medium text-lg"
//             >
//               Learn Khutbas
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="relative py-28">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               What You'll Find Here
//             </h2>
//             <p className="mt-4 text-gray-400 text-base">
//               Carefully curated Islamic content grounded in authentic sources —
//               shared with clarity, balance, and sincerity.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div
//               className="group bg-black/40 border border-white/10 
//       rounded-3xl p-8 backdrop-blur-xl transition hover:border-emerald-400/40"
//               itemScope
//               itemType="https://schema.org/Service"
//             >
//               <h3 
//                 className="text-xl font-semibold mb-4 text-emerald-400"
//                 itemProp="name"
//               >
//                 Scholarly Articles
//               </h3>

//               <p 
//                 className="text-gray-400 text-sm leading-relaxed"
//                 itemProp="description"
//               >
//                 Thoughtfully written articles addressing faith, character, and
//                 contemporary issues — rooted in the Qur'an and Sunnah.
//               </p>

//               <Link
//                 to="/articles"
//                 className="inline-block mt-6 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
//               >
//                 Explore Articles →
//               </Link>
//             </div>

//             <div
//               className="group bg-black/40 border border-white/10 
//       rounded-3xl p-8 backdrop-blur-xl transition hover:border-emerald-400/40"
//               itemScope
//               itemType="https://schema.org/Service"
//             >
//               <h3 
//                 className="text-xl font-semibold mb-4 text-emerald-400"
//                 itemProp="name"
//               >
//                 Khutbas & Talks
//               </h3>

//               <p 
//                 className="text-gray-400 text-sm leading-relaxed"
//                 itemProp="description"
//               >
//                 Powerful khutbas and reminders designed to strengthen iman,
//                 provide guidance, and inspire positive change.
//               </p>

//               <Link
//                 to="/khutba"
//                 className="inline-block mt-6 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
//               >
//                 Listen to Khutbas →
//               </Link>
//             </div>

//             <div
//               className="group bg-black/40 border border-white/10 
//       rounded-3xl p-8 backdrop-blur-xl transition hover:border-emerald-400/40"
//               itemScope
//               itemType="https://schema.org/Service"
//             >
//               <h3 
//                 className="text-xl font-semibold mb-4 text-emerald-400"
//                 itemProp="name"
//               >
//                 Learning Resources
//               </h3>

//               <p 
//                 className="text-gray-400 text-sm leading-relaxed"
//                 itemProp="description"
//               >
//                 Downloadable PDFs, study materials, and references for those
//                 seeking structured and deeper Islamic learning.
//               </p>

//               <Link
//                 to="/downloads"
//                 className="inline-block mt-6 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
//               >
//                 Download Resources →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative py-20 bg-black/40 backdrop-blur-xl">
//         <div className="max-w-3xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div itemScope itemType="https://schema.org/FAQPage">
//             <div
//               className="mb-8 pb-8 border-b border-white/10"
//               itemProp="mainEntity"
//               itemScope
//               itemType="https://schema.org/Question"
//             >
//               <h3 
//                 className="text-lg font-semibold mb-3 text-emerald-400"
//                 itemProp="name"
//               >
//                 Who is Abdus Sakur Taimy?
//               </h3>
//               <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
//                 <p className="text-gray-400" itemProp="text">
//                   Abdus Sakur Taimy is an Islamic scholar dedicated to providing authentic Islamic knowledge and guidance rooted in the Qur'an and Sunnah. Through articles, khutbas, and educational resources, he aims to help people deepen their understanding of Islam.
//                 </p>
//               </div>
//             </div>

//             <div
//               className="mb-8 pb-8 border-b border-white/10"
//               itemProp="mainEntity"
//               itemScope
//               itemType="https://schema.org/Question"
//             >
//               <h3 
//                 className="text-lg font-semibold mb-3 text-emerald-400"
//                 itemProp="name"
//               >
//                 What is the Salafi approach to Islam?
//               </h3>
//               <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
//                 <p className="text-gray-400" itemProp="text">
//                   The Salafi approach emphasizes returning to the teachings of the Qur'an and the authentic Sunnah of the Prophet Muhammad (peace be upon him), as understood by the early generations of Muslims. It focuses on clarity, authenticity, and practical Islamic living.
//                 </p>
//               </div>
//             </div>

//             <div
//               className="mb-8"
//               itemProp="mainEntity"
//               itemScope
//               itemType="https://schema.org/Question"
//             >
//               <h3 
//                 className="text-lg font-semibold mb-3 text-emerald-400"
//                 itemProp="name"
//               >
//                 Is all content free to access?
//               </h3>
//               <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
//                 <p className="text-gray-400" itemProp="text">
//                   Yes! All our articles, khutbas, and learning resources are available for free. We believe that authentic Islamic knowledge should be accessible to everyone seeking to strengthen their faith and understanding of Islam.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Home = () => {
  const config = seoConfig.home;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abdus Sakur Taimy",
    "url": "https://abdusskaurtaimyofficial.com/",
    "logo": "https://abdusskaurtaimyofficial.com/logo.png",
    "description": "A place for authentic Islamic knowledge - articles, khutbas, and resources rooted in the Qur'an and Sunnah",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Service",
      "email": "contact@abdusskaurtaimyofficial.com"
    },
    "sameAs": [
      "https://facebook.com/tajammul",
      "https://youtube.com/@tajammul"
    ]
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

      <section className="relative overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
        bg-amber-500/25 blur-[120px] rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32 text-center">
          <p className="text-amber-400 text-sm md:text-base tracking-wide mb-6">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
            A Place for
            <span className="block text-amber-400 mt-2">
              Authentic Islamic Knowledge
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Explore well-researched articles, powerful khutbas, and carefully
            curated resources rooted in the Qur'an and Sunnah — shared with
            sincerity and clarity. Discover authentic Islamic teachings by Abdus Sakur Taimy.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/articles"
              className="px-8 py-4 rounded-full bg-amber-500 
              hover:bg-amber-600 transition font-medium text-lg text-black"
            >
              Read Articles
            </Link>

            <Link
              to="/khutba"
              className="px-8 py-4 rounded-full border border-white/20 
              hover:bg-white/5 transition font-medium text-lg"
            >
              Learn Khutbas
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold">
              What You'll Find Here
            </h2>
            <p className="mt-4 text-gray-400 text-base">
              Carefully curated Islamic content grounded in authentic sources —
              shared with clarity, balance, and sincerity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="group bg-black/40 border border-white/10 
      rounded-3xl p-8 backdrop-blur-xl transition hover:border-amber-400/40"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 
                className="text-xl font-semibold mb-4 text-amber-400"
                itemProp="name"
              >
                Scholarly Articles
              </h3>

              <p 
                className="text-gray-400 text-sm leading-relaxed"
                itemProp="description"
              >
                Thoughtfully written articles addressing faith, character, and
                contemporary issues — rooted in the Qur'an and Sunnah.
              </p>

              <Link
                to="/articles"
                className="inline-block mt-6 text-amber-400 hover:text-amber-300 text-sm font-medium"
              >
                Explore Articles →
              </Link>
            </div>

            <div
              className="group bg-black/40 border border-white/10 
      rounded-3xl p-8 backdrop-blur-xl transition hover:border-amber-400/40"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 
                className="text-xl font-semibold mb-4 text-amber-400"
                itemProp="name"
              >
                Khutbas & Talks
              </h3>

              <p 
                className="text-gray-400 text-sm leading-relaxed"
                itemProp="description"
              >
                Powerful khutbas and reminders designed to strengthen iman,
                provide guidance, and inspire positive change.
              </p>

              <Link
                to="/khutba"
                className="inline-block mt-6 text-amber-400 hover:text-amber-300 text-sm font-medium"
              >
                Listen to Khutbas →
              </Link>
            </div>

            <div
              className="group bg-black/40 border border-white/10 
      rounded-3xl p-8 backdrop-blur-xl transition hover:border-amber-400/40"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h3 
                className="text-xl font-semibold mb-4 text-amber-400"
                itemProp="name"
              >
                Learning Resources
              </h3>

              <p 
                className="text-gray-400 text-sm leading-relaxed"
                itemProp="description"
              >
                Downloadable PDFs, study materials, and references for those
                seeking structured and deeper Islamic learning.
              </p>

              <Link
                to="/downloads"
                className="inline-block mt-6 text-amber-400 hover:text-amber-300 text-sm font-medium"
              >
                Download Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-black/40 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div itemScope itemType="https://schema.org/FAQPage">
            <div
              className="mb-8 pb-8 border-b border-white/10"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="text-lg font-semibold mb-3 text-amber-400"
                itemProp="name"
              >
                Who is Abdus Sakur Taimy?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400" itemProp="text">
                  Abdus Sakur Taimy is an Islamic scholar dedicated to providing authentic Islamic knowledge and guidance rooted in the Qur'an and Sunnah. Through articles, khutbas, and educational resources, he aims to help people deepen their understanding of Islam.
                </p>
              </div>
            </div>

            <div
              className="mb-8 pb-8 border-b border-white/10"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="text-lg font-semibold mb-3 text-amber-400"
                itemProp="name"
              >
                What is the Salafi approach to Islam?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400" itemProp="text">
                  The Salafi approach emphasizes returning to the teachings of the Qur'an and the authentic Sunnah of the Prophet Muhammad (peace be upon him), as understood by the early generations of Muslims. It focuses on clarity, authenticity, and practical Islamic living.
                </p>
              </div>
            </div>

            <div
              className="mb-8"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="text-lg font-semibold mb-3 text-amber-400"
                itemProp="name"
              >
                Is all content free to access?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400" itemProp="text">
                  Yes! All our articles, khutbas, and learning resources are available for free. We believe that authentic Islamic knowledge should be accessible to everyone seeking to strengthen their faith and understanding of Islam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;