import { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { AnimeCard } from '@/components/AnimeCard';
import { AnimeModal } from '@/components/AnimeModal';
import { animeData, Anime } from '@/data/animeData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter anime based on search and genre
  const filteredAnime = useMemo(() => {
    return animeData.filter((anime) => {
      const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           anime.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = !selectedGenre || anime.genres.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, selectedGenre]);

  const featuredAnime = useMemo(() => {
    return animeData.filter(anime => anime.score >= 8.5).slice(0, 6);
  }, []);

  const recommendedAnime = useMemo(() => {
    return animeData.filter(anime => anime.status === 'Ongoing').slice(0, 6);
  }, []);

  const handleAnimeClick = (anime: Anime) => {
    setSelectedAnime(anime);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnime(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        onSearch={setSearchQuery}
        onGenreSelect={setSelectedGenre}
        searchQuery={searchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 neon-text">
            Discover Amazing Anime
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the best anime series and movies with our curated collection
          </p>
        </section>

        {/* Search/Filter Results */}
        {(searchQuery || selectedGenre) && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {searchQuery ? `Search results for "${searchQuery}"` : `${selectedGenre} Anime`}
              <span className="text-muted-foreground ml-2">({filteredAnime.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {filteredAnime.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  anime={anime}
                  onClick={() => handleAnimeClick(anime)}
                />
              ))}
            </div>
            {filteredAnime.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No anime found matching your criteria.</p>
              </div>
            )}
          </section>
        )}

        {/* Default Content - Show when no search/filter */}
        {!searchQuery && !selectedGenre && (
          <>
            {/* Featured Anime */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">Featured Anime</span>
                <div className="ml-4 h-px bg-gradient-primary flex-1"></div>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {featuredAnime.map((anime) => (
                  <AnimeCard
                    key={anime.id}
                    anime={anime}
                    onClick={() => handleAnimeClick(anime)}
                  />
                ))}
              </div>
            </section>

            {/* Recommended Anime */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <span className="bg-gradient-accent bg-clip-text text-transparent">Currently Airing</span>
                <div className="ml-4 h-px bg-gradient-accent flex-1"></div>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {recommendedAnime.map((anime) => (
                  <AnimeCard
                    key={anime.id}
                    anime={anime}
                    onClick={() => handleAnimeClick(anime)}
                  />
                ))}
              </div>
            </section>

            {/* All Anime */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-foreground">All Anime</span>
                <div className="ml-4 h-px bg-border flex-1"></div>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {animeData.map((anime) => (
                  <AnimeCard
                    key={anime.id}
                    anime={anime}
                    onClick={() => handleAnimeClick(anime)}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Anime Details Modal */}
      <AnimeModal
        anime={selectedAnime}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
