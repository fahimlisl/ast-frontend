import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../api/article.api";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const res = await getArticleById(id);
        setArticle(res.data.data);
      } catch (err) {
        console.error("Failed to fetch article");
      }
    };
    loadArticle();
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
        Loading article…
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">

      <Link
        to="/articles"
        className="text-sm text-gray-400 hover:text-emerald-400 transition"
      >
        ← Back to Articles
      </Link>

      <h1 className="mt-8 text-3xl md:text-4xl font-bold leading-tight">
        {article.title}
      </h1>

      <p className="mt-3 text-xs text-gray-500">
        Published on{" "}
        {new Date(article.createdAt).toLocaleDateString()}
      </p>

      <article className="mt-12 text-gray-300 text-base leading-relaxed space-y-6 whitespace-pre-line">
        {article.description}
      </article>

      {article.sources && (
        <div className="mt-16 border-t border-white/10 pt-6">
          <h4 className="text-sm font-semibold mb-2 text-white">
            References
          </h4>
          <p className="text-sm text-gray-400">
            {article.sources}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
