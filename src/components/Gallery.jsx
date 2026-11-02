import React, { useState } from 'react';
import { Eye, ZoomIn, Filter } from 'lucide-react';
import Lightbox from './Lightbox';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function Gallery({
  items = galleryItems,
  categories = galleryCategories,
  initialCategory = 'all',
  limit,
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  // Filter items
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : displayedItems.length - 1));
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev < displayedItems.length - 1 ? prev + 1 : 0));
  };

  // Helper for item counts
  const getItemCount = (catId) => {
    if (catId === 'all') return items.length;
    return items.filter((item) => item.category === catId).length;
  };

  return (
    <div className="gallery-component">
      {/* Figma Category Filter Pills */}
      {categories && categories.length > 0 && (
        <div className="filter-pills-wrap" style={{ marginBottom: '44px' }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="pill-count">{getItemCount(cat.id)}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {displayedItems.map((item, index) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => handleOpenLightbox(index)}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              height: '300px',
              backgroundColor: 'var(--color-figma-black)',
              border: '2px solid var(--color-figma-black)',
              boxShadow: 'var(--shadow-figma-card)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <img
              src={item.thumb || item.src}
              alt={item.alt || item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            {/* Hover Overlay */}
            <div
              className="gallery-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(17, 18, 21, 0.95) 0%, rgba(17, 18, 21, 0.4) 60%, rgba(17, 18, 21, 0.1) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px',
                transition: 'opacity 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-figma-yellow)',
                  color: 'var(--color-figma-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                }}
              >
                <ZoomIn size={20} />
              </div>

              <span
                style={{
                  color: 'var(--color-figma-yellow)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                {item.categoryLabel}
              </span>

              <h4
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  marginBottom: '6px',
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: '#D1D5DB',
                  fontSize: '0.86rem',
                  lineHeight: 1.45,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={activeLightboxIndex !== null}
        item={activeLightboxIndex !== null ? displayedItems[activeLightboxIndex] : null}
        currentIndex={activeLightboxIndex ?? 0}
        totalItems={displayedItems.length}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
