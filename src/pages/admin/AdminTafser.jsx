import { useEffect, useState } from "react";
import {
  fetchSurahList,
  fetchSurah,
  updateExplanation,
  addShortMeaning,
  editShortMeaning,
  markSurahCompleted,
} from "../../api/adminTafser.api";

const AdminTafser = () => {
  const [surahList, setSurahList] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedSurahId, setSelectedSurahId] = useState("");
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(false);

  const [editingAyahId, setEditingAyahId] = useState(null);
  const [explanationText, setExplanationText] = useState("");

  const [shortMeaningMap, setShortMeaningMap] = useState({});
  const [editingShort, setEditingShort] = useState({ ayahId: null, index: null });
  const [editShortText, setEditShortText] = useState("");

  const [searchAyah, setSearchAyah] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchSurahList();
      setSurahList(res.data.data || []);
      setFilteredSurahs(res.data.data || []);
    };
    load();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredSurahs(surahList);
      return;
    }

    if (search.includes(":")) {
      const [surahNo, ayahNo] = search.split(":");
      const surahObj = surahList.find(
        (s) => String(s.number) === surahNo.trim()
      );

      if (surahObj) {
        loadSurah(surahObj._id, Number(ayahNo));
      }
      return;
    }

    const q = search.toLowerCase();
    setFilteredSurahs(
      surahList.filter(
        (s) =>
          s.englishName.toLowerCase().startsWith(q) ||
          String(s.number).startsWith(q)
      )
    );
  }, [search, surahList]);

  const loadSurah = async (id, ayahNumber = null) => {
    setLoading(true);
    setSelectedSurahId(id);
    try {
      const res = await fetchSurah(id);
      setSurah(res.data.data);
      setSearchAyah(ayahNumber || null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  const saveExplanation = async (ayahId) => {
    if (!explanationText.trim()) return alert("Explanation required");
    await updateExplanation(ayahId, explanationText);
    setEditingAyahId(null);
    setExplanationText("");
    loadSurah(selectedSurahId);
  };

  const saveShortMeaning = async (ayahId) => {
    const text = shortMeaningMap[ayahId];
    if (!text || !text.trim()) return;

    await addShortMeaning(ayahId, text);
    setShortMeaningMap({ ...shortMeaningMap, [ayahId]: "" });
    loadSurah(selectedSurahId);
  };

  const saveEditShortMeaning = async () => {
    if (!editShortText.trim()) return;

    await editShortMeaning(editingShort.ayahId, editingShort.index, editShortText);

    setEditingShort({ ayahId: null, index: null });
    setEditShortText("");
    loadSurah(selectedSurahId);
  };

  const totalAyahs = surah?.ayahs?.length || 0;
  const completedAyahs =
    surah?.ayahs?.filter(
      (a) => a.explanation?.trim() && a.shortMeaning?.length > 0
    ).length || 0;

  const progressPercent =
    totalAyahs > 0 ? Math.round((completedAyahs / totalAyahs) * 100) : 0;

  return (
    <div className="flex gap-8 h-[calc(100vh-120px)]">

      <aside className="w-72 border border-white/10 rounded-2xl p-4 flex flex-col">
        <input
          placeholder="Search: 2, baq, 2:255"
          className="mb-4 bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex-1 overflow-y-auto space-y-1 pr-1">
          {filteredSurahs.map((s) => (
            <button
              key={s._id}
              onClick={() => loadSurah(s._id)}
              className={`relative w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition
              ${
                selectedSurahId === s._id
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "hover:bg-white/5"
              }`}
            >
              {!s.isCompleted && (
                <span className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-l-lg" />
              )}

              <span className={`${!s.isCompleted ? "text-red-300" : ""}`}>
                {s.number}. {s.englishName}
              </span>

              {s.isCompleted ? (
                <span className="text-xs text-green-400">✓</span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
              )}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto pr-4">

        {!surah && !loading && (
          <p className="text-gray-400 mt-20 text-center">
            Select a surah to start editing tafsir
          </p>
        )}

        {loading && (
          <p className="text-gray-400 mt-20 text-center">Loading tafsir…</p>
        )}

        {surah && (
          <>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">{surah.name}</h2>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>
                    Completed {completedAyahs} / {totalAyahs} ayahs
                  </span>
                  <span className="text-emerald-400 font-medium">
                    {progressPercent}%
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {!surah.isCompleted && (
                <div className="mb-8 flex justify-end">
                  <button
                    disabled={progressPercent !== 100}
                    onClick={async () => {
                      await markSurahCompleted(surah._id);
                      loadSurah(selectedSurahId);
                    }}
                    className={`px-6 py-2 rounded-xl text-sm font-medium transition
                    ${
                      progressPercent === 100
                        ? "bg-emerald-500 hover:bg-emerald-600"
                        : "bg-gray-600 cursor-not-allowed"
                    }`}
                  >
                    Mark Surah as Completed
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-14">
              {surah.ayahs
                .filter((_, i) => (searchAyah ? i + 1 === searchAyah : true))
                .map((a, index) => {
                  const ayahNo = searchAyah || index + 1;

                  return (
                    <div
                      key={a._id}
                      className="border border-white/10 rounded-2xl p-6"
                    >
                      <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                        Ayah {ayahNo}
                      </span>

                      <p className="text-2xl text-right leading-loose my-6">
                        {a.ayah}
                      </p>

                      {a.shortMeaning?.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {a.shortMeaning.map((m, i) => (
                            <li key={i} className="flex items-center gap-3">
                              {editingShort.ayahId === a._id &&
                              editingShort.index === i ? (
                                <>
                                  <input
                                    value={editShortText}
                                    onChange={(e) =>
                                      setEditShortText(e.target.value)
                                    }
                                    className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-1"
                                  />
                                  <button
                                    onClick={saveEditShortMeaning}
                                    className="px-3 py-1 bg-emerald-500 rounded"
                                  >
                                    Save
                                  </button>
                                </>
                              ) : (
                                <>
                                  <span className="flex-1 text-sm text-gray-300">
                                    {m}
                                    {i === 0 && (
                                      <span className="ml-1 italic text-gray-500">
                                        — Saheeh International
                                      </span>
                                    )}
                                  </span>
                                  <button
                                    onClick={() => {
                                      setEditingShort({
                                        ayahId: a._id,
                                        index: i,
                                      });
                                      setEditShortText(m);
                                    }}
                                    className="text-xs px-2 py-1 border border-white/20 rounded"
                                  >
                                    Edit
                                  </button>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      {editingAyahId === a._id ? (
                        <>
                          <textarea
                            rows={4}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 mb-3"
                            value={explanationText}
                            onChange={(e) => setExplanationText(e.target.value)}
                          />
                          <button
                            onClick={() => saveExplanation(a._id)}
                            className="px-4 py-2 rounded bg-emerald-500"
                          >
                            Save Explanation
                          </button>
                        </>
                      ) : (
                        <>
                          {a.explanation && (
                            <p className="text-sm text-gray-400 mb-3">
                              {a.explanation}
                            </p>
                          )}
                          <button
                            onClick={() => {
                              setEditingAyahId(a._id);
                              setExplanationText(a.explanation || "");
                            }}
                            className="text-sm px-4 py-2 rounded border border-white/20 hover:bg-white/5"
                          >
                            Edit Explanation
                          </button>
                        </>
                      )}

                      <div className="flex gap-3 mt-6">
                        <input
                          className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2"
                          placeholder="Add short meaning"
                          value={shortMeaningMap[a._id] || ""}
                          onChange={(e) =>
                            setShortMeaningMap({
                              ...shortMeaningMap,
                              [a._id]: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => saveShortMeaning(a._id)}
                          className="px-4 py-2 rounded bg-emerald-500"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminTafser;
