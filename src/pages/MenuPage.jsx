import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { MoodFilter } from '../components/MoodFilter';
import { MenuList } from '../components/MenuList';
import { HeroBanner } from '../components/HeroBanner';
import { MoodShowcase } from '../components/MoodShowcase';
import { WhyItTastesLikeThat } from '../components/WhyItTastesLikeThat';
import { AboutSection } from '../components/AboutSection';
import { LoadingState } from '../components/LoadingState';
import { ErrorState } from '../components/ErrorState';
import { useFavourites } from '../context/FavouritesContext';
import { Heart, RotateCcw } from 'lucide-react';

export function MenuPage({ menu = [], loading = false, error = null, onRetry }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFavourite, favouritesCount } = useFavourites();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return searchParams.get('category') || 'All';
  });
  const [selectedMood, setSelectedMood] = useState(() => {
    return searchParams.get('mood') || '';
  });
  const [onlyFavourites, setOnlyFavourites] = useState(() => {
    return searchParams.get('filter') === 'favourites';
  });

  const menuSectionRef = useRef(null);

  // Sync with URL query params if changed externally (e.g. from nav clicks)
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam === 'favourites') {
      setOnlyFavourites(true);
    } else if (filterParam === null && onlyFavourites) {
      setOnlyFavourites(false);
    }

    const catParam = searchParams.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [searchParams]);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts = { Total: menu.length };
    menu.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [menu]);

  // Filtered menu items based on Search, Category, Mood, and Favourites
  const filteredItems = useMemo(() => {
    return menu.filter(item => {
      // 1. Search Query Filter (name or description or category)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'All') {
        if (item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // 3. Mood Filter
      if (selectedMood) {
        if (!item.mood || item.mood.toLowerCase() !== selectedMood.toLowerCase()) {
          return false;
        }
      }

      // 4. Favourites Filter
      if (onlyFavourites) {
        if (!isFavourite(item.id)) {
          return false;
        }
      }

      return true;
    });
  }, [menu, searchQuery, selectedCategory, selectedMood, onlyFavourites, isFavourite]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedMood('');
    setOnlyFavourites(false);
    setSearchParams({});
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu-lineup');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Featured hero item for spotlight card
  const featuredItem = useMemo(() => {
    return menu.find(i => i.featured) || menu[0];
  }, [menu]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={onRetry} />;
  }

  return (
    <div className="menu-page">
      {/* Hero Visual Section */}
      <HeroBanner onExploreClick={scrollToMenu} />

      {/* Mood Filter & Showcase Section */}
      <section className="mood-experience-section" aria-label="Mood Selector">
        <div className="section-container">
          <MoodFilter
            selectedMood={selectedMood}
            onSelectMood={(mood) => {
              setSelectedMood(mood);
              scrollToMenu();
            }}
          />

          <MoodShowcase featuredItem={featuredItem} />
        </div>
      </section>

      {/* Main Menu Lineup Section */}
      <section className="menu-lineup-section" ref={menuSectionRef} id="menu-lineup" aria-label="The Lineup">
        <div className="section-container">
          <div className="lineup-header">
            <h2 className="lineup-title">THE LINEUP</h2>
            <p className="lineup-subtitle">
              Smashed, fried, slow-cooked, and spiced to order. Browse our full kitchen menu.
            </p>
          </div>

          {/* Controls Bar: Search, Category Filter, and Favourites Toggle */}
          <div className="lineup-controls-card">
            <div className="controls-top-row">
              <div className="search-col">
                <SearchBar
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClear={() => setSearchQuery('')}
                />
              </div>

              <div className="filter-actions-col">
                <button
                  type="button"
                  className={`btn-filter-toggle ${onlyFavourites ? 'is-active' : ''}`}
                  onClick={() => setOnlyFavourites(prev => !prev)}
                  aria-pressed={onlyFavourites}
                >
                  <Heart
                    size={16}
                    fill={onlyFavourites ? '#E0221E' : 'none'}
                    stroke={onlyFavourites ? '#E0221E' : 'currentColor'}
                  />
                  <span>Favourites ({favouritesCount})</span>
                </button>

                {(searchQuery || selectedCategory !== 'All' || selectedMood || onlyFavourites) && (
                  <button
                    type="button"
                    className="btn-filter-reset"
                    onClick={handleResetFilters}
                    title="Reset all filters"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            <div className="category-row">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={(cat) => setSelectedCategory(cat)}
                counts={categoryCounts}
              />
            </div>
          </div>

          {/* Menu Items Grid Display */}
          <MenuList
            items={filteredItems}
            activeCategory={selectedCategory}
            activeMood={selectedMood}
            searchQuery={searchQuery}
            onResetFilters={handleResetFilters}
          />
        </div>
      </section>

      {/* Quality Standards Section */}
      <WhyItTastesLikeThat />

      {/* Proper About Section for SEBASTIAN by SAMI */}
      <AboutSection />
    </div>
  );
}
