import axios from "axios";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [articleCount, setArticleCount] = useState(0);
  const [khutbaCount, setKhutbaCount] = useState(0);
  const [surahCount, setSurahCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/calculate`,
          { withCredentials: true }
        );

        const [articles, khutbas, surahs] =
          response.data.data.data;

        setArticleCount(articles);
        setKhutbaCount(khutbas);
        setSurahCount(surahs);
      } catch (err) {
        console.error("Failed to load dashboard counts", err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border border-white/10 rounded-xl p-6">
          <p className="text-sm text-gray-400">Articles</p>
          <h2 className="text-2xl font-semibold mt-2">
            {articleCount}
          </h2>
        </div>

        <div className="border border-white/10 rounded-xl p-6">
          <p className="text-sm text-gray-400">Khutbas</p>
          <h2 className="text-2xl font-semibold mt-2">
            {khutbaCount}
          </h2>
        </div>

        <div className="border border-white/10 rounded-xl p-6">
          <p className="text-sm text-gray-400">Completed Surahs</p>
          <h2 className="text-2xl font-semibold mt-2">
            {surahCount}
          </h2>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
