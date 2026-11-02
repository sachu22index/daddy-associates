import React from 'react';

export default function SectionHeading({
  badge,
  badgeVariant = 'orange', // 'orange' | 'yellow' | 'gold' | 'dark'
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  dark = false,
  uppercase = false,
  className = '',
}) {
  const isCenter = align === 'center';

  const badgeClass = dark
    ? 'badge-dark'
    : badgeVariant === 'yellow'
    ? 'badge-yellow'
    : badgeVariant === 'orange'
    ? 'badge-orange'
    : 'badge-gold';

  return (
    <div
      className={`section-heading ${isCenter ? 'text-center' : 'text-left'} ${className}`}
      style={{
        maxWidth: isCenter ? '820px' : '720px',
        margin: isCenter ? '0 auto 48px' : '0 0 40px',
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '14px' }}>
          <span className={`badge ${badgeClass}`}>
            {badge}
          </span>
        </div>
      )}

      <h2
        style={{
          color: dark ? '#FFFFFF' : 'var(--color-figma-black)',
          marginBottom: '16px',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          textTransform: uppercase ? 'uppercase' : 'none',
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: dark ? '#B2C0D4' : 'var(--color-text-muted)',
            fontSize: '1.1rem',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
