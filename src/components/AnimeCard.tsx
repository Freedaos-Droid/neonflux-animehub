import { Star, Calendar, Tv } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Anime } from '@/data/animeData';

interface AnimeCardProps {
  anime: Anime;
  onClick: () => void;
}

export function AnimeCard({ anime, onClick }: AnimeCardProps) {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-neon"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Score Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-black/70 text-neon-cyan border-neon-cyan/30 backdrop-blur-sm">
            <Star className="h-3 w-3 mr-1 fill-current" />
            {anime.score}
          </Badge>
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 left-2">
          <Badge 
            variant={anime.status === 'Ongoing' ? 'default' : 'secondary'}
            className={`${
              anime.status === 'Ongoing' 
                ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                : 'bg-muted/80 text-muted-foreground border-border/30'
            } backdrop-blur-sm`}
          >
            {anime.status}
          </Badge>
        </div>

        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {anime.releaseDate}
            </div>
            <div className="flex items-center gap-1">
              <Tv className="h-3 w-3" />
              {anime.episodes} EP
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {anime.title}
        </h3>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {anime.genres.slice(0, 2).map((genre) => (
            <Badge
              key={genre}
              variant="outline"
              className="text-xs border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              {genre}
            </Badge>
          ))}
          {anime.genres.length > 2 && (
            <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
              +{anime.genres.length - 2}
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {anime.synopsis}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="bg-muted/50 px-2 py-1 rounded">
            {anime.rating}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}