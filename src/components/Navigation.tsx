import { useState, useEffect } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { animeGenres } from '@/data/animeData';

interface NavigationProps {
  onSearch: (query: string) => void;
  onGenreSelect: (genre: string | null) => void;
  searchQuery: string;
}

export function Navigation({ onSearch, onGenreSelect, searchQuery }: NavigationProps) {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-card/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent neon-text">
              AnimeFlux
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search anime..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Genres Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsGenreDropdownOpen(!isGenreDropdownOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Genres
              </Button>
              {isGenreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-popover border border-border rounded-lg shadow-card z-50">
                  <div className="py-2 max-h-80 overflow-y-auto">
                    <button
                      onClick={() => {
                        onGenreSelect(null);
                        setIsGenreDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      All Genres
                    </button>
                    {animeGenres.map((genre) => (
                      <button
                        key={genre}
                        onClick={() => {
                          onGenreSelect(genre);
                          setIsGenreDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-3">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search anime..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-input border-border"
                />
              </div>

              {/* Mobile Genres */}
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground px-3 py-2">Genres</p>
                <button
                  onClick={() => {
                    onGenreSelect(null);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  All Genres
                </button>
                {animeGenres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => {
                      onGenreSelect(genre);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md transition-colors"
                  >
                    {genre}
                  </button>
                ))}
              </div>

              {/* Mobile Theme Toggle */}
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="w-full justify-start text-foreground"
              >
                {isDark ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}