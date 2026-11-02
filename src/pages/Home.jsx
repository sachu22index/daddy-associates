import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Truck,
  PartyPopper,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Award,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  CalendarCheck,
  FileText,
  Star,
  Quote,
  Layers
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import Gallery from '../components/Gallery';
import FAQAccordion from '../components/FAQAccordion';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { serviceCategories } from '../data/services';
import { packagesData } from '../data/packages';
import { testimonialsData } from '../data/testimonials';
import { faqsData } from '../data/faqs';

export default function Home() {
  const cleaningCategory = serviceCategories.find((c) => c.id === 'deep-cleaning');
  const movingCategory = serviceCategories.find((c) => c.id === 'packing-moving');
  const eventsCategory = serviceCategories.find((c) => c.id === 'event-planning');

  // Interactive Category Filter for Figma-inspired Catalog Grid
  const [activeCategory, setActiveCategory] = useState('all');

  // Flatten services with their category info
  const allServices = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categorySlug: category.slug,
      categoryTitle: category.title,
    }))
  );

  const displayedServices =
    activeCategory === 'all'
      ? allServices.slice(0, 6)
      : allServices.filter((s) => s.categorySlug === activeCategory);

  // Top featured packages across 3 categories
  const featuredPackages = [
    {
      pkg: packagesData['deep-cleaning']?.packages.find((p) => p.featured) || packagesData['deep-cleaning']?.packages[1],
      categoryName: 'Deep Cleaning',
    },
    {
      pkg: packagesData['packing-moving']?.packages.find((p) => p.featured) || packagesData['packing-moving']?.packages[1],
      categoryName: 'Packing & Moving',
    },
    {
      pkg: packagesData['event-planning']?.packages.find((p) => p.featured) || packagesData['event-planning']?.packages[1],
      categoryName: 'Event Planning',
    },
  ].filter(Boolean);

  // Preview FAQs
  const homeFaqs = faqsData.slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. FIGMA-INSPIRED HERO SECTION */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          backgroundColor: '#111215',
          color: '#FFFFFF',
          padding: '90px 0 100px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #090A0D 0%, #111215 55%, #1C1E24 100%)',
          borderBottom: '4px solid var(--color-figma-yellow)',
        }}
      >
        <div className="hero-glow" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Hero Content */}
            <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '18px' }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: 'rgba(255, 225, 71, 0.15)',
                    color: 'var(--color-figma-yellow)',
                    border: '1px solid rgba(255, 225, 71, 0.4)',
                    padding: '6px 14px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  <Sparkles size={14} color="var(--color-figma-yellow)" />
                  Premier Multi-Service Solutions
                </span>
              </div>

              <h1
                style={{
                  color: '#FFFFFF',
                  fontWeight: 900,
                  fontSize: 'clamp(2.5rem, 5.8vw, 4.2rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                We Clean.{' '}
                <span style={{ color: 'var(--color-figma-yellow)' }}>We Move.</span>{' '}
                <span style={{ color: 'var(--color-figma-orange)' }}>We Celebrate.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                  color: '#D1D5DB',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                From immaculate spaces to seamless relocations and unforgettable milestone events,
                Daddy Associates delivers white-glove, stress-free execution for homes and businesses.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  flexWrap: 'wrap',
                  marginBottom: '36px',
                }}
                className="btn-group-mobile-stack"
              >
                <Button
                  to="/contact"
                  variant="orange"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Get a Free Quote
                </Button>

                <Button
                  href={getWhatsAppUrl()}
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle size={20} />}
                >
                  Chat on WhatsApp
                </Button>

                <Button
                  to="/services"
                  variant="outline-gold"
                  size="lg"
                >
                  All Services
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={20} color="var(--color-figma-yellow)" />
                  <span style={{ fontSize: '0.88rem', color: '#E5E7EB', fontWeight: 600 }}>
                    Vetted & Trained Staff
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={20} color="var(--color-figma-yellow)" />
                  <span style={{ fontSize: '0.88rem', color: '#E5E7EB', fontWeight: 600 }}>
                    Punctual Scheduling
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={20} color="var(--color-figma-orange)" />
                  <span style={{ fontSize: '0.88rem', color: '#E5E7EB', fontWeight: 600 }}>
                    Upfront Transparent Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                }}
              >
                {/* Collage Image 1: Cleaning */}
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '240px',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                    border: '1.5px solid rgba(255, 225, 71, 0.3)',
                    transform: 'translateY(-10px)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"
                    alt="Daddy Associates Deep Cleaning Service"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Collage Image 2: Moving */}
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '240px',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                    border: '1.5px solid rgba(255, 90, 31, 0.3)',
                    transform: 'translateY(15px)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                    alt="Daddy Associates Packing and Moving Service"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Collage Image 3: Event Celebration */}
                <div
                  style={{
                    gridColumn: 'span 2',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '210px',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                    alt="Daddy Associates Event Planning and Celebrations"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Floating Highlight Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '20px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid #EEEEEE',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--color-figma-orange)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="/images/logo.jpg"
                    alt="Daddy Associates Seal"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', lineHeight: 1.2, color: 'var(--color-figma-black)' }}>
                    Daddy Associates
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-figma-orange)', fontWeight: 700 }}>
                    Give Your Plan and Buy the Action
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIGMA-INSPIRED INTERACTIVE CATEGORIES & SERVICES GRID */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container">
          <SectionHeading
            badge="Solutions Catalog"
            badgeVariant="orange"
            title="Explore Solutions By Category"
            subtitle="Browse our comprehensive service catalog. Filter instantly to inspect specifications, key inclusions, and quick booking options."
            uppercase
          />

          {/* Figma-Style Category Filter Pills */}
          <div className="filter-pills-wrap" style={{ justifyContent: 'center' }}>
            <button
              type="button"
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Solutions
              <span className="pill-count">{allServices.length}</span>
            </button>
            <button
              type="button"
              className={`filter-pill ${activeCategory === 'deep-cleaning' ? 'active' : ''}`}
              onClick={() => setActiveCategory('deep-cleaning')}
            >
              Deep Cleaning
              <span className="pill-count">{cleaningCategory?.services.length || 0}</span>
            </button>
            <button
              type="button"
              className={`filter-pill ${activeCategory === 'packing-moving' ? 'active' : ''}`}
              onClick={() => setActiveCategory('packing-moving')}
            >
              Packing & Moving
              <span className="pill-count">{movingCategory?.services.length || 0}</span>
            </button>
            <button
              type="button"
              className={`filter-pill ${activeCategory === 'event-planning' ? 'active' : ''}`}
              onClick={() => setActiveCategory('event-planning')}
            >
              Event Planning
              <span className="pill-count">{eventsCategory?.services.length || 0}</span>
            </button>
          </div>

          {/* Figma 3-Column Card Grid (384x522) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {displayedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                categorySlug={service.categorySlug}
                categoryTitle={service.categoryTitle}
              />
            ))}
          </div>

          {activeCategory === 'all' && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Button to="/services" variant="black" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                View All 21 Services In Full Catalog
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 3. THREE CORE SERVICE PILLARS */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)', borderTop: '1px solid #EEEEEE' }}>
        <div className="container">
          <SectionHeading
            badge="Core Divisions"
            badgeVariant="yellow"
            title="Three Dedicated Service Divisions"
            subtitle="Whether you need an intensive sanitization reset, a stress-free transition to a new address, or a celebratory gathering planned to perfection."
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {/* Service 1: Deep Cleaning */}
            <div
              className="card"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #EEEEEE',
                boxShadow: 'var(--shadow-figma-card)',
              }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={cleaningCategory.heroImage}
                  alt="Deep Cleaning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  className="badge"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#111215',
                    color: '#FFFFFF',
                    fontWeight: 800,
                  }}
                >
                  Pillar 01
                </span>
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Sparkles size={24} color="var(--color-figma-orange)" />
                  <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 800, color: 'var(--color-figma-black)' }}>Deep Cleaning</h3>
                </div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', marginBottom: '20px', flex: 1 }}>
                  Full-property sanitation, kitchen degreasing, bathroom descaling, and turnover cleaning
                  using commercial equipment and safe formulations.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Whole-home & apartment sanitization
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Kitchen chimney & tile degreasing
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Move-in & move-out handovers
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button to="/services/deep-cleaning" variant="black" block size="md">
                    Explore Deep Cleaning
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 2: Packing and Moving */}
            <div
              className="card"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #EEEEEE',
                boxShadow: 'var(--shadow-figma-card)',
              }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={movingCategory.heroImage}
                  alt="Packing and Moving"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  className="badge"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#111215',
                    color: '#FFFFFF',
                    fontWeight: 800,
                  }}
                >
                  Pillar 02
                </span>
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Truck size={24} color="var(--color-figma-orange)" />
                  <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 800, color: 'var(--color-figma-black)' }}>Packing & Moving</h3>
                </div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', marginBottom: '20px', flex: 1 }}>
                  Careful packing with protective bubble wrap, furniture disassembly, disciplined loading,
                  and organized room-by-room transitions.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Fragile chinaware & TV cushioning
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Bed & furniture dismantle / assembly
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Office & corporate relocation support
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button to="/services/packing-moving" variant="black" block size="md">
                    Explore Relocation
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 3: Event Planning */}
            <div
              className="card"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #EEEEEE',
                boxShadow: 'var(--shadow-figma-card)',
              }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={eventsCategory.heroImage}
                  alt="Event Planning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  className="badge"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#111215',
                    color: '#FFFFFF',
                    fontWeight: 800,
                  }}
                >
                  Pillar 03
                </span>
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <PartyPopper size={24} color="var(--color-figma-orange)" />
                  <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 800, color: 'var(--color-figma-black)' }}>Event Planning</h3>
                </div>
                <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', marginBottom: '20px', flex: 1 }}>
                  Turnkey management of birthdays, engagement ceremonies, corporate banquets,
                  atmospheric lighting, and day-of execution.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Custom theme decor & backdrop styling
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Audio-visual, floral & seating staging
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-figma-orange)" /> Full on-site day-of event coordination
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button to="/services/event-planning" variant="orange" block size="md">
                    Explore Events
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIGMA TICKET-STYLE FEATURED PACKAGES */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Admission & Tiers"
            badgeVariant="orange"
            title="Featured Package Passes"
            subtitle="Transparent tiers designed for hassle-free booking. Each package includes trained personnel, insurance protection, and guaranteed satisfaction."
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'stretch',
            }}
          >
            {featuredPackages.map((item, idx) => (
              <PackageCard
                key={idx}
                pkg={item.pkg}
                categoryName={item.categoryName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE DADDY ASSOCIATES */}
      <section className="section" style={{ backgroundColor: '#111215', color: '#FFFFFF', borderTop: '1px solid #22242A' }}>
        <div className="container">
          <SectionHeading
            badge="The Daddy Distinction"
            badgeVariant="yellow"
            title="Why Discerning Clients Choose Us"
            subtitle="We bridge the gap between chaotic service providers and dependable, white-glove professional excellence."
            dark
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            <div
              style={{
                backgroundColor: '#191B20',
                padding: '36px 26px',
                borderRadius: '16px',
                border: '1px solid #272A32',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 225, 71, 0.12)',
                  color: 'var(--color-figma-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 800 }}>
                Vetted & Respectful Crews
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.94rem', margin: 0, lineHeight: 1.6 }}>
                Every technician, mover, and decorator is trained in careful handling, courteous
                etiquette, and thorough property protection.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#191B20',
                padding: '36px 26px',
                borderRadius: '16px',
                border: '1px solid #272A32',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 90, 31, 0.12)',
                  color: 'var(--color-figma-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Clock size={28} />
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 800 }}>
                Punctual & Schedule-Driven
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.94rem', margin: 0, lineHeight: 1.6 }}>
                Your time is invaluable. We arrive as scheduled, establish clear timeline milestones,
                and complete tasks without prolonged delays.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#191B20',
                padding: '36px 26px',
                borderRadius: '16px',
                border: '1px solid #272A32',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 225, 71, 0.12)',
                  color: 'var(--color-figma-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <ThumbsUp size={28} />
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 800 }}>
                Zero Hidden Charges
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.94rem', margin: 0, lineHeight: 1.6 }}>
                We discuss scope upfront and generate transparent written quotes before commencing work,
                protecting you from surprise surcharges.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#191B20',
                padding: '36px 26px',
                borderRadius: '16px',
                border: '1px solid #272A32',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 90, 31, 0.12)',
                  color: 'var(--color-figma-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Sparkles size={28} />
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 800 }}>
                One Unified Solution
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.94rem', margin: 0, lineHeight: 1.6 }}>
                Forget juggling multiple unknown contractors. You get a single reliable partner for your
                sanitation, relocations, and milestone parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Streamlined Workflow"
            badgeVariant="orange"
            title="How It Works In Four Simple Steps"
            subtitle="A clear, hassle-free booking experience designed for busy homeowners and business managers."
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Choose Your Service',
                desc: 'Select from Deep Cleaning, Packing & Moving, or Event Planning — or request a bundled combination.',
                icon: <FileText size={22} />,
              },
              {
                step: '02',
                title: 'Receive Tailored Quote',
                desc: 'Share basic details via WhatsApp or our Contact form to receive an upfront, transparent estimate.',
                icon: <MessageCircle size={22} />,
              },
              {
                step: '03',
                title: 'Confirm Date & Slot',
                desc: 'Lock in your preferred date. Our team assigns trained crew members and designated supervisors.',
                icon: <CalendarCheck size={22} />,
              },
              {
                step: '04',
                title: 'Enjoy Flawless Results',
                desc: 'Relax while we handle the heavy lifting, deep cleaning, or event staging to absolute perfection.',
                icon: <Sparkles size={22} />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="card"
                style={{
                  padding: '34px 26px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #EEEEEE',
                  borderRadius: '18px',
                  position: 'relative',
                  boxShadow: 'var(--shadow-figma-card)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-figma-orange)',
                    opacity: 0.85,
                  }}
                >
                  {item.step}
                </div>

                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#111215',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {item.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-figma-black)', fontWeight: 800 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED GALLERY PREVIEW */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)', borderTop: '1px solid #EEEEEE' }}>
        <div className="container">
          <SectionHeading
            badge="Visual Excellence"
            title="Recent Work & Past Projects"
            subtitle="Browse real snapshots illustrating our commitment to immaculate sanitation, protected moves, and celebratory aesthetics."
          />

          <Gallery limit={6} />

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button
              to="/gallery"
              variant="black"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              View Complete Image Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Customer Satisfaction"
            badgeVariant="orange"
            title="What Our Clients Say"
            subtitle="Hear directly from families and businesses who trusted Daddy Associates for their properties and events."
            uppercase
          />

          {/* Transparent Notice to Business Owner */}
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto 36px',
              padding: '10px 18px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 90, 31, 0.06)',
              border: '1px dashed rgba(255, 90, 31, 0.4)',
              fontSize: '0.85rem',
              color: 'var(--color-figma-black)',
              textAlign: 'center',
            }}
          >
            <strong>Note for Business Owner:</strong> Testimonials below represent editable sample reviews.
            Easily update <code>src/data/testimonials.js</code> with your verified client reviews.
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1.5px solid #EEEEEE',
                  boxShadow: 'var(--shadow-figma-card)',
                }}
              >
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-figma-yellow)" color="var(--color-figma-yellow)" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--color-text-dark)',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  "{item.quote}"
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid #F1F3F5',
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1.5px solid var(--color-figma-orange)',
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '0.98rem', margin: 0, color: 'var(--color-figma-black)', fontWeight: 800 }}>
                      {item.name}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-figma-orange)', fontWeight: 700 }}>
                      {item.serviceUsed}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ PREVIEW */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)', borderTop: '1px solid #EEEEEE' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <SectionHeading
            badge="Frequently Asked"
            badgeVariant="yellow"
            title="Questions You May Have"
            subtitle="Get quick answers regarding quotes, scheduling, cleaning products, and coordination."
            uppercase
          />

          <FAQAccordion items={homeFaqs} />

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link
              to="/faq"
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--color-figma-black)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'underline',
              }}
            >
              Have more questions? Read our full FAQ page <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section
        className="section"
        style={{
          backgroundColor: '#111215',
          color: '#FFFFFF',
          padding: '90px 0',
          position: 'relative',
          borderTop: '4px solid var(--color-figma-orange)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span
            className="badge"
            style={{
              backgroundColor: 'rgba(255, 90, 31, 0.15)',
              color: 'var(--color-figma-orange)',
              border: '1px solid rgba(255, 90, 31, 0.4)',
              marginBottom: '18px',
              padding: '6px 16px',
              fontWeight: 800,
            }}
          >
            Ready To Begin?
          </span>

          <h2
            style={{
              color: '#FFFFFF',
              marginBottom: '18px',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
          >
            Experience The Daddy Associates Difference
          </h2>

          <p style={{ color: '#D1D5DB', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.65 }}>
            Connect with our team today for a transparent, obligation-free quote.
            Whether you need deep cleaning, moving assistance, or party coordination,
            we are here to serve.
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
            <Button
              to="/contact"
              variant="orange"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Request a Free Quote
            </Button>

            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Chat on WhatsApp Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
