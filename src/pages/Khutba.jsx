import { useEffect, useState } from "react";
import { getKhutbaList, increaseKhutbaView } from "../api/khutba.api";
import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Khutba = () => {
  const [khutbas, setKhutbas] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = seoConfig.khutba;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Islamic Khutbas by Tajammul Hoque",
    "description": config.description,
    "author": {
      "@type": "Person",
      "name": "Tajammul Hoque"
    }
  };

  const fetchKhutbas = async () => {
    try {
      const res = await getKhutbaList();
      setKhutbas(res.data.data || []);
    } catch {
      console.error("Failed to fetch khutbas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKhutbas();
  }, []);

  const handleView = async (id, url) => {
    try {
      await increaseKhutbaView(id);
      window.open(url, "_blank");

      setKhutbas((prev) =>
        prev.map((k) =>
          k._id === id ? { ...k, viewC: k.viewC + 1 } : k
        )
      );
    } catch {
      alert("Failed to register view");
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

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Islamic Khutbas by Abdus Sakur Taimy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Friday sermons and reminders intended to strengthen faith (Iman),
            provide Islamic guidance, and inspire personal reflection and positive change.
          </p>
        </div>

        {loading && (
          <div className="text-center text-gray-400 py-20">
            Loading khutbas…
          </div>
        )}

        {!loading && khutbas.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            No khutbas have been published yet. Check back soon for inspiring sermons!
          </div>
        )}

        {!loading && khutbas.length > 0 && (
          <ul className="space-y-5">
            {khutbas.map((k, index) => (
              <li
                key={k._id}
                className="group flex items-center justify-between 
                border border-white/10 rounded-2xl 
                px-6 py-5 hover:border-emerald-400/40 
                transition"
                itemScope
                itemType="https://schema.org/AudioObject"
              >
                <div className="flex items-center gap-6 flex-grow">
                  <span
                    className="text-sm text-gray-500 font-mono flex-shrink-0"
                    itemProp="position"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-grow">
                    <h2
                      className="text-base md:text-lg font-medium 
                      group-hover:text-emerald-400 transition"
                      itemProp="name"
                    >
                      {k.title}
                    </h2>

                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                      <span itemProp="uploadDate">
                        {k.createdAt ? new Date(k.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        }) : 'Date not available'}
                      </span>
                      <span className="flex items-center gap-1">
                        {k.viewC || 0} views
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleView(k._id, k.url)}
                  className="px-5 py-2 rounded-full text-sm font-medium
                  border border-white/20 hover:bg-white/5 
                  hover:border-emerald-400/40 transition flex-shrink-0"
                  aria-label={`Listen to ${k.title}`}
                >
                  View
                </button>

                <meta itemProp="author" content="Tajammul Hoque" />
                <meta itemProp="description" content={k.title} />
              </li>
            ))}
          </ul>
        )}

        {/* FAQ Section for SEO */}
        <section className="mt-24 pt-20 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-12 text-center">
            About Our Khutbas
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
                What are Khutbas?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Khutbas are Islamic sermons, traditionally delivered during Friday prayers (Jumu'ah)
                  or special occasions. They provide spiritual guidance, strengthen faith, and help Muslims
                  understand and apply Islamic teachings in daily life.
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
                How often are khutbas published?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  New khutbas are published regularly, typically weekly. Each sermon covers important Islamic
                  topics including faith, character, Islamic jurisprudence, and contemporary issues from an
                  Islamic perspective.
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
                Who delivers these khutbas?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  All khutbas are delivered by Tajammul Hoque, an Islamic scholar dedicated to authentic Islamic
                  teaching rooted in the Qur'an and Sunnah. His approach is clear, practical, and beneficial.
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
                Can I use these in my community?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Yes! These khutbas can be shared and used in communities, study circles, and gatherings
                  with proper attribution. We encourage spreading beneficial Islamic knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Khutba;