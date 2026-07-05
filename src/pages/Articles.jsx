import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticleList } from "../api/article.api";
import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = seoConfig.articles;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Islamic Articles by Tajammul Hoque",
    "description": config.description,
    "author": {
      "@type": "Person",
      "name": "Tajammul Hoque"
    }
  };

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const res = await getArticleList();
        setArticles(res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

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

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Islamic Articles by Abdus Sakur Taimy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reflections and writings rooted in authentic Islamic knowledge, 
            the Qur'an, Sunnah, and scholarly Islamic sources.
          </p>
        </div>

        {loading && (
          <div className="text-center text-gray-400 py-20">
            Loading articles…
          </div>
        )}

        {!loading && articles.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            No articles have been published yet. Check back soon!
          </div>
        )}

        {!loading && articles.length > 0 && (
          <ul className="space-y-6">
            {articles.map((article, index) => (
              <li
                key={article._id}
                className="group border border-white/10 
                rounded-2xl px-6 py-5 
                hover:border-emerald-400/40 transition"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link
                  to={`/articles/${article._id}`}
                  className="flex items-center gap-6 hover:no-underline"
                >
                  <span 
                    className="text-sm text-gray-500 font-mono flex-shrink-0"
                    itemProp="position"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-grow">
                    <h2 
                      className="text-lg md:text-xl font-medium 
                      group-hover:text-emerald-400 transition"
                      itemProp="headline"
                    >
                      {article.title}
                    </h2>
                    {article.description && (
                      <p 
                        className="text-gray-400 text-sm mt-1"
                        itemProp="description"
                      >
                        {article.description.substring(0, 100)}...
                      </p>
                    )}
                  </div>

                  {article.createdAt && (
                    <time 
                      className="text-xs text-gray-500 flex-shrink-0"
                      dateTime={article.createdAt}
                      itemProp="datePublished"
                    >
                      {new Date(article.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                </Link>

                <meta itemProp="author" content="Tajammul Hoque" />
                <meta itemProp="articleSection" content="Islamic Knowledge" />
              </li>
            ))}
          </ul>
        )}

        {/* FAQ Section for SEO */}
        <section className="mt-24 pt-20 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Articles by Topic
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
                What types of articles do you cover?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Our articles cover Islamic teachings including Aqidah (Islamic beliefs), Fiqh (Islamic jurisprudence), 
                  Tafsir (Qur'anic commentary), Islamic history, character development, and practical Islamic living 
                  based on the Qur'an and authentic Sunnah.
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
                Can I share these articles?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Yes! All articles are available for sharing with proper attribution. We encourage spreading 
                  authentic Islamic knowledge. Please credit the source when sharing.
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
                How often are new articles published?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  We publish new articles regularly, covering various Islamic topics and contemporary issues. 
                  Subscribe or check back frequently to stay updated with new content.
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
                Are these articles suitable for beginners?
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-400 text-sm" itemProp="text">
                  Yes! Our articles are written to be accessible to all readers, from beginners seeking to understand 
                  Islam to those with deeper knowledge. We aim for clarity while maintaining scholarly accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Articles;