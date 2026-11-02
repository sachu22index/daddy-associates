import React from 'react';
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
  Truck,
  PartyPopper,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Users,
  Compass,
  Award,
  Check
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function About() {
  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'We operate with upfront quotations, clear task checklists, and honest communication with zero hidden charges or false claims.',
      icon: <ShieldCheck size={26} />,
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Whether sanitizing a commercial tile floor or safeguarding heirloom crystal during a move, we hold every task to rigorous standards.',
      icon: <Sparkles size={26} />,
    },
    {
      title: 'Punctuality & Discipline',
      desc: 'We respect your schedule. Our crews arrive on time, adhere to timeline milestones, and execute with disciplined efficiency.',
      icon: <Compass size={26} />,
    },
    {
      title: 'Genuine Care & Respect',
      desc: 'We treat every home, office, and celebration with the same attentiveness and delicacy as if it were our own.',
      icon: <HeartHandshake size={26} />,
    },
  ];

  return (
    <div className="about-page">
      {/* 1. Page Header (Figma Dark) */}
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
            background: 'radial-gradient(circle, rgba(255, 90, 31, 0.08) 0%, rgba(17, 18, 21, 0) 70%)',
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
            About Daddy Associates
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
            Dedicated To Making Life <span style={{ color: 'var(--color-figma-yellow)' }}>Easier</span>
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
            Founded on the belief that cleaning, moving, and celebrating should be inspiring
            and stress-free. We unite three essential services under one trustworthy roof.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button to="/contact" variant="orange" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Get In Touch With Our Team
            </Button>
            <Button
              href={getWhatsAppUrl('Hello Daddy Associates, I would like to learn more about your company and services.')}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Direct WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Approach */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
                Who We Are
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: 'var(--color-figma-black)',
                  marginBottom: '20px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                A Modern Multi-Service Partner Built on Reliability
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '18px' }}>
                <strong>Daddy Associates</strong> was created to solve a universal headache:
                the struggle of coordinating separate, fragmented contractors for home hygiene,
                relocation logistics, and event celebrations.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
                By establishing trained teams, standardized procedures, and upfront communication,
                we provide homeowners, tenants, and business operators with dependable solutions they can
                call upon with complete peace of mind.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-figma-orange)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-figma-black)' }}>
                    Residential & Commercial
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-figma-orange)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-figma-black)' }}>
                    Standardized Checklists
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-figma-orange)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-figma-black)' }}>
                    Customized Package Options
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-figma-orange)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-figma-black)' }}>
                    Direct WhatsApp Support
                  </span>
                </div>
              </div>

              <Button to="/contact" variant="orange" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Connect With Our Team
              </Button>
            </div>

            {/* Supporting Image Grid with Official Emblem */}
            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
              }}
            >
              {/* Central Official Seal Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '3px solid var(--color-figma-yellow)',
                  boxShadow: 'var(--shadow-figma-card)',
                  overflow: 'hidden',
                  zIndex: 3,
                }}
              >
                <img
                  src="/images/logo.jpg"
                  alt="Daddy Associates Official Seal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '280px',
                  boxShadow: 'var(--shadow-figma-card)',
                  border: '1.5px solid #EEEEEE',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Team executing deep cleaning"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '280px',
                  boxShadow: 'var(--shadow-figma-card)',
                  border: '1.5px solid #EEEEEE',
                  transform: 'translateY(24px)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                  alt="Elegant event setup"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Figma High-Contrast Cards) */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Mission */}
            <div
              style={{
                padding: '44px 36px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '2px solid var(--color-figma-black)',
                boxShadow: 'var(--shadow-figma-card)',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--color-figma-black)',
                  color: 'var(--color-figma-yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Target size={28} />
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  color: 'var(--color-figma-black)',
                  marginBottom: '14px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                Our Mission
              </h3>

              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                To empower individuals, families, and businesses by taking the friction out of cleaning,
                relocation, and event celebrations. We deliver reliable craftsmanship, respectful service,
                and spotless outcomes every single time.
              </p>
            </div>

            {/* Vision */}
            <div
              style={{
                padding: '44px 36px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '2px solid var(--color-figma-black)',
                boxShadow: 'var(--shadow-figma-card)',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--color-figma-black)',
                  color: 'var(--color-figma-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Eye size={28} />
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  color: 'var(--color-figma-black)',
                  marginBottom: '14px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                Our Vision
              </h3>

              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                To be the most trusted and comprehensive multi-service enterprise in our service areas,
                recognized for integrity, operational excellence, and lasting relationships with our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            badge="Guiding Principles"
            badgeVariant="orange"
            title="Our Core Values"
            subtitle="These commitments guide every cleaning scrub, every carefully boxed possession, and every celebration we style."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
            }}
          >
            {values.map((val) => (
              <div
                key={val.title}
                style={{
                  padding: '36px 28px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #EEEEEE',
                  boxShadow: 'var(--shadow-figma-card)',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 90, 31, 0.1)',
                    color: 'var(--color-figma-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {val.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.3rem',
                    color: 'var(--color-figma-black)',
                    marginBottom: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {val.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.65 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Quality Commitment (Figma Dark) */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--color-figma-black)',
          color: '#FFFFFF',
          borderTop: '3px solid var(--color-figma-yellow)',
        }}
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <SectionHeading
            badge="Quality Assurance"
            badgeVariant="yellow"
            title="Our Commitment To Quality"
            subtitle="We hold ourselves accountable to high standards across every service category."
            dark
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              textAlign: 'left',
              marginTop: '36px',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '28px',
                borderRadius: '16px',
                border: '1.5px solid rgba(255, 225, 71, 0.25)',
              }}
            >
              <span style={{ display: 'inline-block', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-figma-yellow)', marginBottom: '8px' }}>
                01
              </span>
              <h4 style={{ color: '#FFFFFF', marginBottom: '8px', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Pre-Service Walkthrough
              </h4>
              <p style={{ color: '#D1D5DB', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                We inspect priority zones, fragile items, and specific instructions with you
                prior to initiating work.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '28px',
                borderRadius: '16px',
                border: '1.5px solid rgba(255, 90, 31, 0.3)',
              }}
            >
              <span style={{ display: 'inline-block', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-figma-orange)', marginBottom: '8px' }}>
                02
              </span>
              <h4 style={{ color: '#FFFFFF', marginBottom: '8px', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Standardized Checklists
              </h4>
              <p style={{ color: '#D1D5DB', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                Every clean, packing box, and event decor setup follows strict quality checklists
                to ensure nothing is overlooked.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '28px',
                borderRadius: '16px',
                border: '1.5px solid rgba(255, 225, 71, 0.25)',
              }}
            >
              <span style={{ display: 'inline-block', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-figma-yellow)', marginBottom: '8px' }}>
                03
              </span>
              <h4 style={{ color: '#FFFFFF', marginBottom: '8px', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Post-Service Sign-Off
              </h4>
              <p style={{ color: '#D1D5DB', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                Our team supervisor walks through the finished results with you to verify complete satisfaction.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <Button
              href={getWhatsAppUrl('Hello Daddy Associates, I would like to learn more about your services and discuss a quote.')}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Speak With A Coordinator on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
