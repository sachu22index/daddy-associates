import React, { useState } from 'react';
import {
  PartyPopper,
  Sparkles,
  Calendar,
  Users,
  Music,
  Wine,
  Heart,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { serviceCategories } from '../data/services';
import { packagesData } from '../data/packages';
import { faqsData } from '../data/faqs';
import { getWhatsAppUrl, getEventWhatsAppMessage } from '../config/siteConfig';

export default function EventPlanning() {
  const eventsCategory = serviceCategories.find((c) => c.id === 'event-planning');
  const eventServices = eventsCategory?.services || [];
  const eventPackages = packagesData['event-planning']?.packages || [];
  const eventFaqs = faqsData.filter((f) => f.category === 'events');

  // Quick Event Consultation Builder State
  const [quickEventData, setQuickEventData] = useState({
    eventType: 'Birthday Party',
    eventDate: '',
    guestCount: '25-50 guests',
  });

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setQuickEventData((prev) => ({ ...prev, [name]: value }));
  };

  const generatedEventWhatsAppUrl = getWhatsAppUrl(
    getEventWhatsAppMessage({
      eventType: quickEventData.eventType,
      eventDate: quickEventData.eventDate || 'Flexible',
      guestCount: quickEventData.guestCount,
    })
  );

  return (
    <div className="event-planning-page">
      {/* 1. FIGMA EVENT HERO BANNER */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#111215',
          color: '#FFFFFF',
          padding: '95px 0 105px',
          background: 'linear-gradient(135deg, #090A0D 0%, #111215 55%, #1C1E24 100%)',
          borderBottom: '4px solid var(--color-figma-yellow)',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
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
                <PartyPopper size={14} color="var(--color-figma-yellow)" />
                Bespoke Celebration Staging
              </span>

              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
                  marginBottom: '20px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                All-In <span style={{ color: 'var(--color-figma-orange)' }}>Event</span> Planning & Management
              </h1>

              <p
                style={{
                  color: '#D1D5DB',
                  fontSize: '1.15rem',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                Turn your milestone moments into breathtaking realities. From romantic engagements
                and wedding receptions to vibrant birthday bashes and polished corporate seminars,
                we curate decor, lighting, vendor coordination, and seamless day-of flow.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
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
                  Request Event Proposal
                </Button>

                <Button
                  href={generatedEventWhatsAppUrl}
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle size={20} />}
                >
                  Plan My Event on WhatsApp
                </Button>
              </div>
            </div>

            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 24px 50px rgba(0,0,0,0.5)',
                border: '2px solid rgba(255, 225, 71, 0.3)',
                height: '360px',
              }}
            >
              <img
                src={eventsCategory?.heroImage}
                alt="Daddy Associates Event Planning"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Event WhatsApp Consultation Widget */}
      <section style={{ backgroundColor: 'var(--color-figma-bg-ivory)', padding: '60px 0', borderBottom: '1px solid #EEEEEE' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            className="card"
            style={{
              padding: '38px',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '2px solid var(--color-figma-orange)',
              boxShadow: 'var(--shadow-figma-hover)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '26px' }}>
              <span className="badge badge-orange" style={{ marginBottom: '10px' }}>
                Instant Consultation
              </span>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--color-figma-black)', margin: '4px 0 8px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                Plan Your Celebration In Seconds
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', margin: 0 }}>
                Select your occasion details below to chat with our creative directors on WhatsApp.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '18px',
                marginBottom: '24px',
              }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-figma-black)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  Occasion Type
                </label>
                <select
                  name="eventType"
                  value={quickEventData.eventType}
                  onChange={handleEventChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #E4E4E7',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 600,
                  }}
                >
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Engagement / Wedding">Engagement or Wedding</option>
                  <option value="Corporate Event / Gala">Corporate Event / Gala</option>
                  <option value="Private Celebration / Baby Shower">Private Celebration / Shower</option>
                  <option value="Venue & Decor Styling">Venue & Decor Styling Only</option>
                  <option value="Custom Event Production">Custom Event Production</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-figma-black)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  Tentative Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={quickEventData.eventDate}
                  onChange={handleEventChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #E4E4E7',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 600,
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-figma-black)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  Estimated Guest Count
                </label>
                <select
                  name="guestCount"
                  value={quickEventData.guestCount}
                  onChange={handleEventChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #E4E4E7',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 600,
                  }}
                >
                  <option value="Intimate: Under 30 guests">Intimate: Under 30 guests</option>
                  <option value="30 to 75 guests">30 to 75 guests</option>
                  <option value="75 to 150 guests">75 to 150 guests</option>
                  <option value="150 to 300+ guests">150 to 300+ guests</option>
                </select>
              </div>
            </div>

            <Button
              href={generatedEventWhatsAppUrl}
              variant="orange"
              block
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Chat With Event Director on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Detailed Event Services */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Tailored Coordination"
            badgeVariant="orange"
            title="Our Event Planning Capabilities"
            subtitle="Explore our specialized celebration capabilities designed to remove all stress from your hosting duties."
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {eventServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                categorySlug="event-planning"
                categoryTitle="Event Planning"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Packages & Pricing */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)', borderTop: '1px solid #EEEEEE', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Admission Tiers"
            badgeVariant="yellow"
            title="Event Planning Passes & Tiers"
            subtitle="From cozy intimate milestone dinners to full-scale signature galas."
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '28px',
              maxWidth: '1140px',
              margin: '0 auto',
            }}
          >
            {eventPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} categoryName="Event Planning" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Event FAQs */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            badge="Planning Insights"
            badgeVariant="orange"
            title="Event Planning FAQs"
            subtitle="Learn about timelines, venue decor, day-of supervision, and customized aesthetics."
            uppercase
          />

          <FAQAccordion items={eventFaqs} />
        </div>
      </section>

      {/* 6. Event CTA */}
      <section
        className="section"
        style={{
          backgroundColor: '#111215',
          color: '#FFFFFF',
          padding: '90px 0',
          position: 'relative',
          borderTop: '4px solid var(--color-figma-yellow)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span
            className="badge"
            style={{
              backgroundColor: 'rgba(255, 225, 71, 0.15)',
              color: 'var(--color-figma-yellow)',
              border: '1px solid rgba(255, 225, 71, 0.4)',
              marginBottom: '18px',
              padding: '6px 16px',
              fontWeight: 800,
            }}
          >
            Milestone Moments
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
            Let's Celebrate Something Extraordinary
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.65 }}>
            Connect with our event team to start mood boarding and bring your dream celebration to life.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button href={generatedEventWhatsAppUrl} variant="orange" size="lg" icon={<MessageCircle size={20} />}>
              Start WhatsApp Event Chat
            </Button>
            <Button to="/contact" variant="outline-gold" size="lg">
              Submit Event Inquiry Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
