import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({
  light = false,
  size = 'md', // 'sm' | 'md' | 'lg'
  showText = true,
  subtitle,
}) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const logoDimension = isLarge ? 58 : isSmall ? 38 : 48;

  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '10px' : '14px',
        textDecoration: 'none',
      }}
      aria-label="Daddy Associates Homepage"
    >
      {/* Official Circular Logo Seal */}
      <div
        style={{
          width: `${logoDimension}px`,
          height: `${logoDimension}px`,
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          border: '2px solid #D9AE68',
          boxShadow: light
            ? '0 4px 14px rgba(217, 174, 104, 0.35)'
            : '0 4px 12px rgba(16, 28, 44, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        className="brand-logo-seal"
      >
        <img
          src="/images/logo.jpg"
          alt="Daddy Associates Official Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Typography Brand Name */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: isLarge ? '1.5rem' : isSmall ? '1.15rem' : '1.32rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: light ? '#FFFFFF' : 'var(--color-figma-black)',
              lineHeight: 1.1,
            }}
          >
            DADDY <span style={{ color: 'var(--color-figma-orange)' }}>ASSOCIATES</span>
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: isLarge ? '0.78rem' : isSmall ? '0.64rem' : '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: light ? '#A1A1AA' : 'var(--color-text-muted)',
              marginTop: '3px',
            }}
          >
            {subtitle || 'Give Your Plan and Buy the Action'}
          </span>
        </div>
      )}
    </Link>
  );
}
