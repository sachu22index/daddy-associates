import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Truck,
  PartyPopper,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Percent,
  Layers,
  ShieldCheck,
  Star
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import PackageCard from '../components/PackageCard';
import { serviceCategories } from '../data/services';
import { packagesData } from '../data/packages';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function Services() {
  const cleaningPackages = packagesData['deep-cleaning']?.packages || [];
  const movingPackages = packagesData['packing-moving']?.packages || [];
  const eventPackages = packagesData['event-planning']?.packages || [];

  return (
    <div className="services-page">
      {/* 1. Services Header (Figma Dark) */}
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

        <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 2 }}>
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
            Comprehensive Service Offerings
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
            Professional Solutions <span style={{ color: 'var(--color-figma-yellow)' }}>Tailored</span> To Your Life
          </h1>

          <p
            style={{
              color: '#D1D5DB',
              fontSize: '1.15rem',
              lineHeight: 1.65,
              margin: '0 auto 32px',
              maxWidth: '720px',
            }}
          >
            From residential and office deep cleaning to systematic packing and moving,
            and unforgettable celebration planning — select an individual division or bundle for priority rates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button to="/contact" variant="orange" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Get A Custom Quote
            </Button>
            <Button
              href={getWhatsAppUrl('Hello Daddy Associates, I would like to enquire about your services and get a price estimate.')}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Bundle Promotion Announcement (Figma Vibrant Yellow Strip) */}
      <section
        style={{
          backgroundColor: 'var(--color-figma-yellow)',
          padding: '24px 0',
          borderBottom: '2px solid var(--color-figma-black)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-figma-black)',
                  color: 'var(--color-figma-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Percent size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--color-figma-black)', fontSize: '1.12rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                  Combine & Save: Multi-Service Advantage
                </h4>
                <p style={{ margin: 0, color: '#333333', fontSize: '0.94rem', fontWeight: 500 }}>
                  Moving soon? Bundle <strong>Packing & Moving</strong> with <strong>Move-Out Deep Cleaning</strong> for priority scheduling and bundle savings!
                </p>
              </div>
            </div>

            <Button
              href={getWhatsAppUrl('Hello Daddy Associates, I am interested in booking a multi-service bundle (Move + Deep Cleaning). Please share bundle pricing.')}
              variant="black"
              size="sm"
              icon={<MessageCircle size={16} />}
            >
              Enquire About Bundles
            </Button>
          </div>
        </div>
      </section>

      {/* 3. The Three Distinct Divisions (Figma Cards) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            badge="Three Main Categories"
            badgeVariant="orange"
            title="Explore Our Core Service Divisions"
            subtitle="Click on any division to view specific service tasks, photo galleries, and package inclusions."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Division 1: Deep Cleaning */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid #EEEEEE',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-figma-card)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Deep Cleaning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  className="badge badge-black"
                  style={{ position: 'absolute', top: '16px', left: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                >
                  Division 01
                </span>
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'rgba(255, 90, 31, 0.12)', color: 'var(--color-figma-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 800, color: 'var(--color-figma-black)' }}>Deep Cleaning Services</h3>
                </div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                  Complete whole-home detailing, intensive kitchen degreasing, bathroom descaling,
                  mattress vacuuming, and commercial workspace sanitation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Button to="/services/deep-cleaning" variant="black" block size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    View 7 Cleaning Services & Packages
                  </Button>
                </div>
              </div>
            </div>

            {/* Division 2: Packing & Moving */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid #EEEEEE',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-figma-card)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Packing and Moving"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  className="badge badge-black"
                  style={{ position: 'absolute', top: '16px', left: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                >
                  Division 02
                </span>
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'rgba(255, 90, 31, 0.12)', color: 'var(--color-figma-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Truck size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 800, color: 'var(--color-figma-black)' }}>Packing & Moving Services</h3>
                </div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                  Residential house shifting, corporate office relocation, bubble cushioning of fragile china,
                  bed and table disassembly, and careful room setup.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Button to="/services/packing-moving" variant="black" block size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    View 7 Moving Services & Packages
                  </Button>
                </div>
              </div>
            </div>

            {/* Division 3: Event Planning */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid #EEEEEE',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-figma-card)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                  alt="Event Planning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  className="badge badge-black"
                  style={{ position: 'absolute', top: '16px', left: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                >
                  Division 03
                </span>
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'rgba(255, 90, 31, 0.12)', color: 'var(--color-figma-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PartyPopper size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 800, color: 'var(--color-figma-black)' }}>Event Planning & Mgmt</h3>
                </div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                  Milestone birthday celebrations, romantic wedding receptions, corporate gala events,
                  custom backdrops, mood lighting, and on-site day-of coordination.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Button to="/services/event-planning" variant="black" block size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    View 7 Event Services & Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Package Highlights (Ticket Passes) */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)' }}>
        <div className="container">
          <SectionHeading
            badge="Top Service Packages"
            badgeVariant="yellow"
            title="Featured Package Highlights"
            subtitle="Explore our most popular packages across all three divisions. All packages feature customizable scope and quotation options."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Top Cleaning Package */}
            {cleaningPackages[1] && (
              <PackageCard pkg={cleaningPackages[1]} categoryName="Deep Cleaning" />
            )}

            {/* Top Moving Package */}
            {movingPackages[1] && (
              <PackageCard pkg={movingPackages[1]} categoryName="Packing & Moving" />
            )}

            {/* Top Event Package */}
            {eventPackages[1] && (
              <PackageCard pkg={eventPackages[1]} categoryName="Event Planning" />
            )}
          </div>
        </div>
      </section>

      {/* 5. Custom Consultation CTA (Figma Dark) */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--color-figma-black)',
          color: '#FFFFFF',
          borderTop: '3px solid var(--color-figma-orange)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge badge-yellow" style={{ marginBottom: '16px' }}>
            Need A Bespoke Solution?
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
            Have Unique Requirements or Multi-Property Needs?
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '36px' }}>
            We regularly craft bespoke arrangements for property managers, corporate facilities,
            destination celebrations, and staggered multi-stage moves.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button to="/contact" variant="orange" size="lg">
              Request Bespoke Quotation
            </Button>
            <Button href={getWhatsAppUrl('Hello Daddy Associates, I have a customized enquiry regarding your services.')} variant="whatsapp" size="lg" icon={<MessageCircle size={20} />}>
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
