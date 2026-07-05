import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createKhutba,
  updateKhutba,
  fetchAdminKhutba,
} from "../../api/adminKhutba.api.js";

const AdminKhutbaForm = () => {
  const { id } = useParams(); // edit mode if exists
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    url: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const loadKhutba = async () => {
      try {
        const res = await fetchAdminKhutba(id);
        setForm({
          title: res.data.data.title,
          url: res.data.data.url,
        });
      } catch {
        alert("Failed to load khutba");
      }
    };

    loadKhutba();
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await updateKhutba(id, form);
      } else {
        await createKhutba(form);
      }
      navigate("/admin/khutba");
    } catch {
      alert("Failed to save khutba");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Khutba" : "Add New Khutba"}
      </h1>

      <form onSubmit={submit} className="space-y-6">

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Khutba Title *
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
            Google Drive URL *
          </label>
          <input
            required
            type="url"
            placeholder="https://drive.google.com/..."
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"
            value={form.url}
            onChange={(e) =>
              setForm({ ...form, url: e.target.value })
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
              ? "Update Khutba"
              : "Add Khutba"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/khutba")}
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminKhutbaForm;
