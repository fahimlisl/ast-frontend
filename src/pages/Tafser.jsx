import { useEffect, useRef, useState } from "react";
import { getSurahList, getSurahById } from "../api/surah.api.js";
import SEOHead from "../components/SEOHead";
import { seoConfig } from "../utils/seoConfig";

const Tafser = () => {
  const [surahList, setSurahList] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [jumpAyah, setJumpAyah] = useState(null);

  const searchRef = useRef(null);
  const tafsirRef = useRef(null);

  useEffect(() => {
    const fetchList = async () => {
      const res = await getSurahList();
      setSurahList(res.data.data || []);
      setFilteredSurahs(res.data.data || []);
    };
    fetchList();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredSurahs(surahList);
      return;
    }

    // jump search: 2:255
    if (search.includes(":")) {
      const [surahNo] = search.split(":");
      const found = surahList.find(
        (s) => String(s.number) === surahNo.trim()
      );
      if (found) setFilteredSurahs([found]);
      return;
    }

    const q = search.toLowerCase().trim();
    const filtered = surahList.filter(
      (s) =>
        s.englishName.toLowerCase().startsWith(q) ||
        String(s.number).startsWith(q)
    );

    setFilteredSurahs(filtered);
  }, [search, surahList]);

  const loadSurah = async (id, ayahNo = null) => {
    setLoading(true);
    try {
      const res = await getSurahById(id);
      setSelectedSurah(res.data.data);

      if (ayahNo) setJumpAyah(ayahNo);
      else setJumpAyah(null);

      setTimeout(() => {
        tafsirRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } catch {
      alert("Failed to load surah");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchEnter = () => {
    if (!search.includes(":")) return;

    const [surahNo, ayahNo] = search.split(":").map(Number);
    if (!surahNo || !ayahNo) return;

    const found = surahList.find((s) => s.number === surahNo);
    if (!found) return alert("Surah not found");

    loadSurah(found._id, ayahNo);
  };

  const config = seoConfig.tafsir;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Quranic Tafsir by Abdus Sakur Taimy",
    "description": config.description,
    "author": {
      "@type": "Person",
      "name": "Abdus Sakur Taimy"
    },
    "mainEntity": selectedSurah
      ? {
          "@type": "ScholarlyArticle",
          "headline": `Tafsir of ${selectedSurah.name}`,
          "description": `Detailed Quranic commentary and explanation of Surah ${selectedSurah.name}`,
          "author": {
            "@type": "Person",
            "name": "Abdus Sakur Taimy"
          }
        }
      : null
  };

  return (
    <>
      <SEOHead
        title={selectedSurah ? `Tafsir of ${selectedSurah.name} - Abdus Sakur Taimy` : config.title}
        description={selectedSurah ? `Detailed Quranic commentary and tafsir of Surah ${selectedSurah.name} by Abdus Sakur Taimy.` : config.description}
        keywords={selectedSurah ? `tafsir ${selectedSurah.name.toLowerCase()}, Quran commentary, Islamic interpretation` : config.keywords}
        ogImage={config.ogImage}
        canonical={config.canonical}
        schemaMarkup={schemaMarkup}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
             fsir al-Qur'an by Abdus Sakur Taimy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ayah-by-ayah explanation and scholarly commentary rooted in the Qur'an and authentic Islamic sources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 border border-white/10 rounded-2xl p-4 h-fit">
            <input
              ref={searchRef}
              placeholder="Search (2, baq, 2:255) — press /"
              className="w-full mb-4 bg-black/40 border border-white/10 
              rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-400/50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchEnter()}
              aria-label="Search Surahs"
            />

            <h3 className="text-lg font-semibold mb-4 text-emerald-400">
              Surah List
            </h3>

            <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {filteredSurahs.map((s) => (
                <li
                  key={s._id}
                  onClick={() => loadSurah(s._id)}
                  className="cursor-pointer rounded-lg px-3 py-2 text-sm
                  hover:bg-white/5 transition flex justify-between"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && loadSurah(s._id)}
                >
                  <span>
                    {s.number}. {s.englishName}
                  </span>
                  <span className="text-gray-500">{s.numberOfAyahs}</span>
                </li>
              ))}
            </ul>
          </aside>

          <main ref={tafsirRef} className="lg:col-span-3">
            {!selectedSurah && !loading && (
              <div className="text-center text-gray-400 mt-20">
                Select a Surah to read its Tafsir (e.g., search "2:255" for Ayat al-Kursi)
              </div>
            )}

            {loading && (
              <div className="text-center text-gray-400 mt-20">
                Loading Tafsir…
              </div>
            )}

            {selectedSurah && !loading && (
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedSurah.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Tafsir, reflections, and scholarly commentary
                  </p>
                </div>

                <div className="space-y-12">
                  {selectedSurah.ayahs
                    .filter((_, i) => (jumpAyah ? i + 1 === jumpAyah : true))
                    .map((a, idx) => {
                      const ayahNumber = jumpAyah || idx + 1;

                      return (
                        <article
                          key={ayahNumber}
                          className="border border-white/10 rounded-2xl p-6 bg-black/20"
                          itemScope
                          itemType="https://schema.org/ScholarlyArticle"
                        >
                          <span 
                            className="inline-block mb-4 text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400"
                            itemProp="position"
                          >
                            Ayah {ayahNumber}
                          </span>

                          <p 
                            className="text-2xl leading-loose text-right mb-6"
                            itemProp="description"
                          >
                            {a.ayah}
                          </p>

                          {a.shortMeaning?.length > 0 && (
                            <ul className="mb-4 text-sm text-gray-300 list-disc pl-5">
                              {a.shortMeaning.map((m, i) => (
                                <li key={i}>
                                  {m}
                                  {i === 0 && (
                                    <span className="ml-1 italic text-gray-500">
                                      — Saheeh International
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}

                          {a.explanation ? (
                            <p 
                              className="text-gray-400 text-sm leading-relaxed"
                              itemProp="articleBody"
                            >
                              {a.explanation}
                            </p>
                          ) : (
                            <p className="text-sm italic text-gray-500">
                              Tafsir not added yet.
                            </p>
                          )}

                          {a.reference && (
                            <p className="mt-4 text-xs text-gray-500 italic" itemProp="citations">
                              Reference: {a.reference}
                            </p>
                          )}
                        </article>
                      );
                    })}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Tafser;