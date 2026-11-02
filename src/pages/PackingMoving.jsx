import React, { useState } from 'react';
import {
  Truck,
  Box,
  ShieldCheck,
  Calendar,
  MapPin,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  Shield,
  Clock,
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
import { getWhatsAppUrl, getMovingWhatsAppMessage } from '../config/siteConfig';

export default function PackingMoving() {
  const movingCategory = serviceCategories.find((c) => c.id === 'packing-moving');
  const movingServices = movingCategory?.services || [];
  const movingPackages = packagesData['packing-moving']?.packages || [];
  const movingFaqs = faqsData.filter((f) => f.category === 'moving');

  // Quick Moving Quote WhatsApp Builder State
  const [quickMoveData, setQuickMoveData] = useState({
    moveDate: '',
    pickup: '',
    destination: '',
    moveType: 'Home Shifting',
  });

  const handleQuickMoveChange = (e) => {
    const { name, value } = e.target;
    setQuickMoveData((prev) => ({ ...prev, [name]: value }));
  };

  const generatedWhatsAppUrl = getWhatsAppUrl(
    getMovingWhatsAppMessage({
      packageName: quickMoveData.moveType,
      moveDate: quickMoveData.moveDate || 'To be decided',
      pickup: quickMoveData.pickup || 'To be shared',
      destination: quickMoveData.destination || 'To be shared',
    })
  );

  return (
    <div className="packing-moving-page">
      {/* 1. Category Hero Banner (Figma Dark + Yellow Accent) */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-figma-black)',
          color: '#FFFFFF',
          padding: '90px 0 100px',
          overflow: 'hidden',
          borderBottom: '3px solid var(--color-figma-yellow)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 90, 31, 0.08) 0%, rgba(17, 18, 21, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

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
                <Truck size={14} color="var(--color-figma-yellow)" />
                Systematic & Secure Relocation
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
                Packing & <span style={{ color: 'var(--color-figma-yellow)' }}>Moving</span> Services
              </h1>

              <p
                style={{
                  color: '#D1D5DB',
                  fontSize: '1.15rem',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                Relocating shouldn't be chaotic. Daddy Associates delivers disciplined packing,
                multi-layer bubble wrap protection, furniture disassembly, and smooth zero-damage
                transitions for apartments, villas, and commercial offices.
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
                  Request Relocation Quote
                </Button>

                <Button
                  href={generatedWhatsAppUrl}
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle size={20} />}
                >
                  Moving Enquiry on WhatsApp
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
                src={movingCategory?.heroImage}
                alt="Daddy Associates Packing and Moving"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Moving Features Highlight Strip */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '40px 0', borderBottom: '1px solid #EEEEEE' }}>
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
                <Box size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>Multi-Layer Wrap</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Bubble, foam & edge guards</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 225, 71, 0.2)', color: '#8A6D00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Layers size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>Furniture Dismantling</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Expert assembly & setup</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 90, 31, 0.12)', color: 'var(--color-figma-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>Damage-Free Guarantee</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Verified handling protocols</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(255, 225, 71, 0.2)', color: '#8A6D00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-figma-black)', fontWeight: 800 }}>On-Time Dispatch</h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>Dedicated transit trucks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Relocation WhatsApp Quote Builder Widget */}
      <section style={{ backgroundColor: 'var(--color-figma-bg-ivory)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              padding: '40px',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '2px solid var(--color-figma-black)',
              boxShadow: 'var(--shadow-figma-card)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="badge badge-orange" style={{ marginBottom: '10px' }}>
                Instant Quotation Builder
              </span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-figma-black)', margin: '4px 0 8px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                Quick Relocation Pre-Fill
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', margin: 0 }}>
                Enter your move details below to open a pre-formatted WhatsApp chat directly with our moving captains.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '18px',
                marginBottom: '24px',
              }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 800, color: 'var(--color-figma-black)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Move Type
                </label>
                <select
                  name="moveType"
                  value={quickMoveData.moveType}
                  onChange={handleQuickMoveChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-figma-black)',
                    fontWeight: 600,
                  }}
                >
                  <option value="Home Shifting">Home Shifting</option>
                  <option value="Office Relocation">Office Relocation</option>
                  <option value="Packing & Unpacking Only">Packing & Unpacking Only</option>
                  <option value="Furniture Disassembly & Shift">Furniture Handling Only</option>
                  <option value="Custom Moving Package">Custom Moving Package</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 800, color: 'var(--color-figma-black)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Estimated Move Date
                </label>
                <input
                  type="date"
                  name="moveDate"
                  value={quickMoveData.moveDate}
                  onChange={handleQuickMoveChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-figma-black)',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 800, color: 'var(--color-figma-black)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup"
                  placeholder="e.g. Suburb / Area"
                  value={quickMoveData.pickup}
                  onChange={handleQuickMoveChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 800, color: 'var(--color-figma-black)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Destination Location
                </label>
                <input
                  type="text"
                  name="destination"
                  placeholder="e.g. New Address / City"
                  value={quickMoveData.destination}
                  onChange={handleQuickMoveChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    fontSize: '0.94rem',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>

            <Button
              href={generatedWhatsAppUrl}
              variant="whatsapp"
              block
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Send Pre-Filled Moving Details to WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Detailed Moving Services */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            badge="Relocation Capabilities"
            badgeVariant="orange"
            title="Our Packing & Moving Services"
            subtitle="From individual fragile items to whole multi-story villa and corporate relocations."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {movingServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                categorySlug="packing-moving"
                categoryTitle="Packing & Moving"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Packages & Pricing (Ticket Passes) */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)' }}>
        <div className="container">
          <SectionHeading
            badge="Moving Plans"
            badgeVariant="yellow"
            title="Packing & Moving Packages"
            subtitle="Choose between labor-only muscle or turnkey white-glove packing, transit, and unpacking."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1140px',
              margin: '0 auto',
            }}
          >
            {movingPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} categoryName="Packing & Moving" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Moving FAQs */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <SectionHeading
            badge="Relocation Guidance"
            badgeVariant="dark"
            title="Packing & Moving FAQs"
            subtitle="Everything you need to know about cartons, furniture care, and moving day coordination."
          />

          <FAQAccordion items={movingFaqs} />
        </div>
      </section>

      {/* 7. Contact CTA (Figma Dark) */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--color-figma-black)',
          color: '#FFFFFF',
          borderTop: '3px solid var(--color-figma-orange)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="badge badge-yellow" style={{ marginBottom: '16px' }}>
            Book Your Move Today
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
            Planning An Upcoming Move?
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1.1rem', marginBottom: '36px' }}>
            Contact our relocation team for a free on-site or digital inventory evaluation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button href={generatedWhatsAppUrl} variant="whatsapp" size="lg" icon={<MessageCircle size={20} />}>
              Chat With Move Coordinator
            </Button>
            <Button to="/contact" variant="orange" size="lg">
              Submit Relocation Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
