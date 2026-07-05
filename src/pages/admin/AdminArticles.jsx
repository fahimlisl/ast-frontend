import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAdminArticles,
  deleteArticle,
} from "../../api/adminArticle.api.js";

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadArticles = async () => {
    try {
      const res = await fetchAdminArticles();
      setArticles(res.data.data || []);
    } catch (err) {
      alert("Failed to load articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this article permanently?")) return;
    try {
      await deleteArticle(id);
      loadArticles();
    } catch {
      alert("Failed to delete article");
    }
  };

  if (loading) {
    return <p className="text-gray-400">Loading articles...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Articles</h1>

        <Link
          to="/admin/articles/new"
          className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition"
        >
          + New Article
        </Link>
      </div>

      {articles.length === 0 && (
        <p className="text-gray-400">No articles created yet.</p>
      )}

      <div className="space-y-4">
        {articles.map((a, index) => (
          <div
            key={a._id}
            className="flex justify-between items-center border border-white/10 rounded-xl px-6 py-4"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-medium">{a.title}</h2>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Created: {new Date(a.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to={`/admin/articles/edit/${a._id}`}
                className="px-4 py-1.5 text-sm rounded border border-white/20 hover:bg-white/5"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(a._id)}
                className="px-4 py-1.5 text-sm rounded border border-red-400/40 text-red-400 hover:bg-red-400/10"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminArticles;
