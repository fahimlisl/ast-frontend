import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createArticle,
  updateArticle,
  fetchAdminArticle,
} from "../../api/adminArticle.api";

const AdminArticleForm = () => {
  const { id } = useParams(); // edit mode if exists
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    sources: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const loadArticle = async () => {
      try {
        const res = await fetchAdminArticle(id);
        setForm({
          title: res.data.data.title,
          description: res.data.data.description,
          sources: res.data.data.sources || "",
        });
      } catch {
        alert("Failed to load article");
      }
    };

    loadArticle();
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await updateArticle(id, form);
      } else {
        await createArticle(form);
      }
      navigate("/admin/articles");
    } catch {
      alert("Failed to save article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Article" : "New Article"}
      </h1>

      <form onSubmit={submit} className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Title *
          </label>
          <input
            required
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Description *
          </label>
          <textarea
            required
            rows={10}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 resize-none"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Sources (optional)
          </label>
          <input
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"
            value={form.sources}
            onChange={(e) =>
              setForm({ ...form, sources: e.target.value })
            }
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-medium"
          >
            {loading
              ? "Saving..."
              : id
              ? "Update Article"
              : "Publish Article"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/articles")}
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminArticleForm;
