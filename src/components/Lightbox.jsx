import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function Lightbox({
  isOpen,
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(10, 18, 29, 0.94)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      {/* Lightbox Wrapper Container */}
      <div
        className="lightbox-content"
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%',
          backgroundColor: 'var(--color-navy)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(217, 174, 104, 0.3)',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(16, 28, 44, 0.8)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                color: 'var(--color-gold)',
                fontWeight: 600,
                fontSize: '0.88rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Tag size={14} />
              {item.categoryLabel}
            </span>
            <span style={{ color: '#556987' }}>•</span>
            <span style={{ color: '#B2C0D4', fontSize: '0.85rem' }}>
              {currentIndex + 1} of {totalItems}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            style={{
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(217, 174, 104, 0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Display Area with Prev/Next buttons */}
        <div
          style={{
            position: 'relative',
            maxHeight: '65vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A121D',
            overflow: 'hidden',
          }}
        >
          <img
            src={item.src}
            alt={item.alt || item.title}
            style={{
              maxWidth: '100%',
              maxHeight: '65vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {/* Previous Button */}
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 28, 44, 0.75)',
              border: '1px solid rgba(217, 174, 104, 0.4)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-gold)', e.currentTarget.style.color = '#101C2C')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 28, 44, 0.75)', e.currentTarget.style.color = '#FFFFFF')}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 28, 44, 0.75)',
              border: '1px solid rgba(217, 174, 104, 0.4)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-gold)', e.currentTarget.style.color = '#101C2C')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 28, 44, 0.75)', e.currentTarget.style.color = '#FFFFFF')}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Caption & Details */}
        <div
          style={{
            padding: '20px 24px',
            backgroundColor: 'var(--color-navy-dark)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <h3
            style={{
              color: '#FFFFFF',
              fontSize: '1.25rem',
              marginBottom: '6px',
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: '#B2C0D4',
              fontSize: '0.94rem',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
