import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageCircle,
  ArrowRight,
  Droplets,
  Wind,
  Check
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { serviceCategories } from '../data/services';
import { packagesData } from '../data/packages';
import { faqsData } from '../data/faqs';
import { getWhatsAppUrl, getCleaningWhatsAppMessage } from '../config/siteConfig';

export default function DeepCleaning() {
  const cleaningCategory = serviceCategories.find((c) => c.id === 'deep-cleaning');
  const cleaningServices = cleaningCategory?.services || [];
  const cleaningPackages = packagesData['deep-cleaning']?.packages || [];
  const cleaningFaqs = faqsData.filter((f) => f.category === 'cleaning');

  return (
    <div className="deep-cleaning-page">
      {/* 1. Category Hero Banner */}
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
                <Sparkles size={14} color="var(--color-figma-yellow)" />
                Pristine Hygiene Standard
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
                Deep <span style={{ color: 'var(--color-figma-yellow)' }}>Cleaning</span> Services
              </h1>

              <p
                style={{
                  color: '#D1D5DB',
                  fontSize: '1.15rem',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                Spotless, sanitized spaces crafted with meticulous precision.
                From stubborn kitchen grease and bathroom hard water descaling to whole-home
                turnover detailing, our trained specialists leave no corner untouched.
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
                  Get A Cleaning Quote
                </Button>

                <Button
                  href={getWhatsAppUrl(getCleaningWhatsAppMessage('Deep Cleaning'))}
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle size={20} />}
                >
                  Book Cleaning on WhatsApp
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
                src={cleaningCategory?.heroImage}
                alt="Daddy Associates Deep Cleaning"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cleaning Features Highlight */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '44px 0', borderBottom: '1px solid #EEEEEE' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 90, 31, 0.12)', color: 'var(--color-figma-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Droplets size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>Safe Formulations</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Child & pet-friendly solutions</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 225, 71, 0.2)', color: '#8A6D00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Wind size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>HEPA Vacuum Systems</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Dust-mite & allergen extraction</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 90, 31, 0.12)', color: 'var(--color-figma-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>Punctual Delivery</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Strict adherence to your slots</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 225, 71, 0.2)', color: '#8A6D00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>Supervisor Walkthrough</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Final sign-off verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Cleaning Services List */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Targeted Solutions"
            badgeVariant="orange"
            title="Our Deep Cleaning Capabilities"
            subtitle="Choose a specialized focus area or book an end-to-end full home renewal."
            uppercase
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {cleaningServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                categorySlug="deep-cleaning"
                categoryTitle="Deep Cleaning"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Packages & Pricing */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeading
            badge="Admission Tiers"
            badgeVariant="yellow"
            title="Deep Cleaning Packages"
            subtitle="Select the tier that best matches your space. Real prices are tailored to your square footage upon enquiry."
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
            {cleaningPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} categoryName="Deep Cleaning" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deep Cleaning FAQs */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)', borderTop: '1px solid #EEEEEE', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            badge="Common Inquiries"
            badgeVariant="orange"
            title="Deep Cleaning FAQs"
            subtitle="Answers to common questions regarding cleaning chemicals, timing, and preparation."
            uppercase
          />

          <FAQAccordion items={cleaningFaqs} />
        </div>
      </section>

      {/* 6. Quick CTA Banner */}
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
            Clean & Pristine
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
            Ready for a Spotless, Fresh Environment?
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.65 }}>
            Book your deep cleaning today and experience the Daddy Associates pristine difference.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button
              href={getWhatsAppUrl(getCleaningWhatsAppMessage('Deep Cleaning'))}
              variant="orange"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Book Deep Cleaning on WhatsApp
            </Button>
            <Button to="/contact" variant="outline-gold" size="lg">
              Submit Online Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
