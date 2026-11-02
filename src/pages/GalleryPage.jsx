import React from 'react';
import { Camera, Info, MessageCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Gallery from '../components/Gallery';
import Button from '../components/Button';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      {/* 1. Header Banner (Figma Dark) */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-figma-black)',
          color: '#FFFFFF',
          padding: '90px 0 100px',
          textAlign: 'center',
          overflow: 'hidden',
          borderBottom: '3px solid var(--color-figma-yellow)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-25%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(255, 225, 71, 0.08) 0%, rgba(17, 18, 21, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ maxWidth: '840px', position: 'relative', zIndex: 2 }}>
          <span
            className="badge"
            style={{
              backgroundColor: 'rgba(255, 225, 71, 0.15)',
              color: 'var(--color-figma-yellow)',
              border: '1px solid rgba(255, 225, 71, 0.4)',
              marginBottom: '18px',
              padding: '6px 16px',
              fontWeight: 800,
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            <Camera size={14} color="var(--color-figma-yellow)" />
            Visual Portfolio
          </span>

          <h1
            style={{
              color: '#FFFFFF',
              marginBottom: '20px',
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
            }}
          >
            Project Gallery & <span style={{ color: 'var(--color-figma-yellow)' }}>Portfolio</span>
          </h1>

          <p
            style={{
              color: '#D1D5DB',
              fontSize: '1.15rem',
              lineHeight: 1.65,
              margin: '0 auto',
              maxWidth: '680px',
            }}
          >
            Explore high-resolution snapshots of our completed deep sanitization projects,
            organized packing and moving setups, and extraordinary milestone celebrations.
          </p>
        </div>
      </section>

      {/* 2. Main Gallery Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)' }}>
        <div className="container">
          {/* Note for Owner */}
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto 40px',
              padding: '16px 24px',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: '2px solid var(--color-figma-black)',
              boxShadow: 'var(--shadow-figma-card)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontSize: '0.9rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <Info size={20} color="var(--color-figma-orange)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--color-figma-black)' }}>Business Owner Customization:</strong>{' '}
              Easily replace these sample photographs with your company's own snapshots by adding image files to <code>public/images/gallery/</code> and updating <code>src/data/gallery.js</code>.
            </div>
          </div>

          {/* Full Interactive Gallery Component with Lightbox & Figma Pills */}
          <Gallery />
        </div>
      </section>

      {/* 3. CTA (Figma Dark) */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--color-figma-black)',
          color: '#FFFFFF',
          borderTop: '3px solid var(--color-figma-orange)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <span className="badge badge-yellow" style={{ marginBottom: '16px' }}>
            Book Your Project
          </span>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Inspired By What You See?
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '36px' }}>
            Let Daddy Associates create spotless rooms, stress-free relocations, or spectacular events for you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button to="/contact" variant="orange" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Request Your Free Quote
            </Button>
            <Button href={getWhatsAppUrl('Hello Daddy Associates, I viewed your gallery and would like to enquire about your services.')} variant="whatsapp" size="lg" icon={<MessageCircle size={20} />}>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
