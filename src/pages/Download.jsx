import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Download = () => {
  const config = seoConfig.downloads;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Islamic Resources & Downloads",
    "description": config.description,
    "author": {
      "@type": "Person",
      "name": "Tajammul Hoque"
    }
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
            Islamic Resources & Downloads
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A growing library of authentic Islamic books, study materials,
            khutbah PDFs, and scholarly resources — carefully curated with sincere intention.
          </p>
        </div>

        <div 
          className="max-w-3xl mx-auto border border-white/10 rounded-3xl p-10
          bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
          text-center"
          itemScope
          itemType="https://schema.org/CollectionPage"
        >
          <div className="inline-flex items-center justify-center w-16 h-16
            rounded-full bg-emerald-500/20 text-emerald-400 mb-6 text-2xl"
          >
            📚
          </div>

          <h2 className="text-2xl font-semibold mb-3" itemProp="name">
            Authentic Islamic Resources
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed" itemProp="description">
            We are carefully preparing a comprehensive collection of beneficial Islamic
            resources including books (PDF), tafsir study notes, khutbah collections,
            and scholarly reference materials. All downloads will be authentic, well-organized,
            and freely accessible to everyone seeking to deepen their Islamic knowledge.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              📖 Islamic Books & Ebooks
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              🕌 Khutbah Collections
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              📝 Tafsir Study Notes
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              📂 Reference Materials
            </span>
          </div>
        </div>

        <div className="my-20 border-t border-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="border border-white/10 rounded-2xl p-6 hover:border-emerald-400/40 transition"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <h3 className="text-lg font-semibold mb-2 text-emerald-400" itemProp="name">
              📖 Islamic Books
            </h3>
            <p className="text-sm text-gray-400" itemProp="description">
              Downloadable PDF books covering Aqeedah (Islamic Beliefs), Fiqh (Islamic Law),
              Qur'anic Tafsir, Islamic History (Seerah), and Islamic Character Development.
            </p>
            <p className="mt-4 text-xs italic text-gray-500">
              Status: In preparation
            </p>
          </div>

          <div 
            className="border border-white/10 rounded-2xl p-6 hover:border-emerald-400/40 transition"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <h3 className="text-lg font-semibold mb-2 text-emerald-400" itemProp="name">
              🕌 Khutbah Collection
            </h3>
            <p className="text-sm text-gray-400" itemProp="description">
              Friday khutbah PDFs and selected sermons organized for easy access,
              personal study, and community sharing.
            </p>
            <p className="mt-4 text-xs italic text-gray-500">
              Status: Coming soon
            </p>
          </div>

          <div 
            className="border border-white/10 rounded-2xl p-6 hover:border-emerald-400/40 transition"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <h3 className="text-lg font-semibold mb-2 text-emerald-400" itemProp="name">
              📝 Study Resources
            </h3>
            <p className="text-sm text-gray-400" itemProp="description">
              Comprehensive study notes, summaries, and reference materials designed
              to support deeper Islamic learning and understanding.
            </p>
            <p className="mt-4 text-xs italic text-gray-500">
              Status: Planned
            </p>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <section className="mt-24 pt-20 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-12 text-center">
            About Our Downloads
          </h2>

          <div itemScope itemType="https://schema.org/FAQPage" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="border border-white/10 rounded-2xl p-6"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="font-semibold mb-3 text-emerald-400"
                itemProp="name"
              >
                Will all downloads be free?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Yes! All downloads including Islamic books, study materials, and resources will be completely 
                  free. We believe authentic Islamic knowledge should be accessible to everyone without financial barriers.
                </p>
              </div>
            </div>

            <div
              className="border border-white/10 rounded-2xl p-6"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="font-semibold mb-3 text-emerald-400"
                itemProp="name"
              >
                What qualifies the materials as authentic?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  All materials are carefully selected and reviewed to ensure they are rooted in the Qur'an, 
                  authentic Sunnah (teachings of Prophet Muhammad), and scholarly Islamic sources. We prioritize 
                  accuracy and authenticity above all else.
                </p>
              </div>
            </div>

            <div
              className="border border-white/10 rounded-2xl p-6"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="font-semibold mb-3 text-emerald-400"
                itemProp="name"
              >
                Can I share these resources with others?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Absolutely! We encourage sharing these materials for the sake of spreading Islamic knowledge. 
                  Please provide proper attribution when sharing with communities, study circles, or online platforms.
                </p>
              </div>
            </div>

            <div
              className="border border-white/10 rounded-2xl p-6"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="font-semibold mb-3 text-emerald-400"
                itemProp="name"
              >
                When will downloads be available?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  We are actively preparing the resource collection and will launch downloads soon. Follow our 
                  WhatsApp channel or email updates for announcements about when resources become available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-24 text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
          "Allah will raise those who have believed among you and those who were
          given knowledge, by degrees." — Qur'an 58:11
        </div>
      </div>
    </>
  );
};

export default Download;