import { X, Star, Calendar, Tv, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Anime } from '@/data/animeData';

interface AnimeModalProps {
  anime: Anime | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AnimeModal({ anime, isOpen, onClose }: AnimeModalProps) {
  if (!isOpen || !anime) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-xl shadow-card max-w-4xl max-h-[90vh] overflow-y-auto mx-4 w-full">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Header Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-xl">
          <img
            src={anime.banner || anime.image}
            alt={anime.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 neon-text">
              {anime.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-neon-cyan" />
                <span className="font-semibold text-neon-cyan">{anime.score}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {anime.releaseDate}
              </div>
              <div className="flex items-center gap-1">
                <Tv className="h-4 w-4" />
                {anime.episodes} Episodes
              </div>
              <Badge 
                variant={anime.status === 'Ongoing' ? 'default' : 'secondary'}
                className={`${
                  anime.status === 'Ongoing' 
                    ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                    : 'bg-muted/80 text-muted-foreground border-border/30'
                }`}
              >
                {anime.status}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Poster */}
            <div className="md:col-span-1">
              <img
                src={anime.image}
                alt={anime.title}
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-card"
              />
            </div>

            {/* Details */}
            <div className="md:col-span-3">
              {/* Genres */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre) => (
                    <Badge
                      key={genre}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Synopsis */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Synopsis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {anime.synopsis}
                </p>
              </div>

              {/* Additional Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Rating</h4>
                  <Badge variant="secondary" className="bg-muted/50">
                    {anime.rating}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Status</h4>
                  <Badge 
                    variant={anime.status === 'Ongoing' ? 'default' : 'secondary'}
                    className={`${
                      anime.status === 'Ongoing' 
                        ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                        : 'bg-muted/80 text-muted-foreground border-border/30'
                    }`}
                  >
                    {anime.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}