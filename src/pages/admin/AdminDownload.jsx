import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAdminDownloads,
  deleteDownload,
} from "../../api/adminDownload.api.js";

const AdminDownload = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDownloads = async () => {
    try {
      const res = await fetchAdminDownloads();
      setDownloads(res.data.data || []);
    } catch {
      alert("Failed to load downloads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDownloads();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this download permanently?")) return;
    try {
      await deleteDownload(id);
      loadDownloads();
    } catch {
      alert("Failed to delete download");
    }
  };

  if (loading) {
    return <p className="text-gray-400">Loading downloads...</p>;
  }

  return (
    <div>

      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Downloads</h1>

        <Link
          to="/admin/download/new"
          className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition"
        >
          + Add Download
        </Link>
      </div>

      {downloads.length === 0 && (
        <p className="text-gray-400">No downloads added yet.</p>
      )}

      <div className="space-y-4">
        {downloads.map((d, index) => (
          <div
            key={d._id}
            className="flex flex-col md:flex-row md:items-center justify-between 
            border border-white/10 rounded-xl px-6 py-4 gap-4"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="font-medium text-base md:text-lg">
                  {d.title}
                </h2>
              </div>

              <p className="text-xs text-gray-200 mt-1">
                Added on {new Date(d.createdAt).toLocaleDateString()} •  {"  "} 
                {d.viewC || 0} views
              </p>
            </div>


            <div className="flex gap-3">
              <Link
                to={`/admin/download/edit/${d._id}`}
                className="px-4 py-1.5 text-sm rounded border border-white/20 hover:bg-white/5 transition"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(d._id)}
                className="px-4 py-1.5 text-sm rounded border border-red-400/40 text-red-400 hover:bg-red-400/10 transition"
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

export default AdminDownload;