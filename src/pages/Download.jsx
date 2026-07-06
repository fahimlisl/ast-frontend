import { useEffect, useState } from "react";
import { getDownloadList, increaseDownloadView } from "../api/downloads.api";
import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Download = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = seoConfig.downloads; 

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Islamic Books & Resources by Abdus Sakur Taimy",
    "description": config.description,
    "author": {
      "@type": "Person",
      "name": "Abdus Sakur Taimy"
    }
  };

  const fetchDownloads = async () => {
    try {
      const res = await getDownloadList();
      setDownloads(res.data.data || []);
    } catch {
      console.error("Failed to fetch downloads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDownloads();
  }, []);

  const handleView = async (id, url) => {
    try {
      await increaseDownloadView(id);
      window.open(url, "_blank");

      setDownloads((prev) =>
        prev.map((d) =>
          d._id === id ? { ...d, viewC: d.viewC + 1 } : d
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
            Islamic Books & Resources
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Downloadable Islamic books and resources shared by Abdus Sakur Taimy
            to support learning, reflection, and personal growth.
          </p>
        </div>

        {loading && (
          <div className="text-center text-gray-400 py-20">
            Loading downloads…
          </div>
        )}

        {!loading && downloads.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            No downloads have been added yet. Check back soon!
          </div>
        )}

        {!loading && downloads.length > 0 && (
          <ul className="space-y-5">
            {downloads.map((d, index) => (
              <li
                key={d._id}
                className="group flex items-center justify-between 
                border border-white/10 rounded-2xl 
                px-6 py-5 hover:border-amber-400/40 
                transition"
                itemScope
                itemType="https://schema.org/Book"
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
                      group-hover:text-amber-400 transition"
                      itemProp="name"
                    >
                      {d.title}
                    </h2>

                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                      <span itemProp="datePublished">
                        {d.createdAt ? new Date(d.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        }) : 'Date not available'}
                      </span>
                      <span className="flex items-center gap-1">
                        {d.viewC || 0} views
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleView(d._id, d.url)}
                  className="px-5 py-2 rounded-full text-sm font-medium
                  border border-white/20 hover:bg-white/5 
                  hover:border-amber-400/40 transition flex-shrink-0"
                  aria-label={`Download ${d.title}`}
                >
                  Download
                </button>

                <meta itemProp="author" content="Abdus Sakur Taimy" />
                <meta itemProp="description" content={d.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Download;