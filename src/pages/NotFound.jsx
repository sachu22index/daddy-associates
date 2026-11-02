import React from 'react';
import { Home, ArrowLeft, Search, PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import { siteConfig } from '../config/siteConfig';

export default function NotFound() {
  return (
    <div
      className="not-found-page"
      style={{
        padding: '120px 0',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-figma-bg-ivory)',
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div
          style={{
            fontSize: 'clamp(6rem, 15vw, 10rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-figma-black)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            marginBottom: '10px',
          }}
        >
          4<span style={{ color: 'var(--color-figma-yellow)' }}>0</span>4
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: 'var(--color-figma-black)',
            marginBottom: '16px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          Page Not Found
        </h2>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '36px' }}>
          The page or service link you are looking for may have been moved, renamed, or is temporarily unavailable.
          Let's guide you back to the right place.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
          className="btn-group-mobile-stack"
        >
          <Button to="/" variant="orange" size="lg" icon={<Home size={18} />}>
            Back to Home
          </Button>

          <Button to="/services" variant="black" size="lg">
            Browse All Services
          </Button>
        </div>
      </div>
    </div>
  );
}
