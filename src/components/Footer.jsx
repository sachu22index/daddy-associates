import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Logo from './Logo';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-navy)',
        color: '#FFFFFF',
        borderTop: '3px solid var(--color-gold)',
        paddingTop: '70px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Accents */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '5%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(217, 174, 104, 0.12) 0%, rgba(16, 28, 44, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Figma-Inspired Iconic Typographic Brand Banner */}
        <div
          style={{
            textAlign: 'center',
            padding: '20px 0 50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '50px',
          }}
        >
          <div className="figma-footer-wordmark">
            daddy<span>associates</span>
          </div>
          <p
            style={{
              color: '#B2C0D4',
              fontSize: '0.95rem',
              marginTop: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Deep Cleaning • Packing & Moving • Event Planning & Management
          </p>
        </div>

        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Column 1: Brand & Overview */}
          <div>
            <Logo light size="lg" />
            <p
              style={{
                color: '#B2C0D4',
                fontSize: '0.96rem',
                marginTop: '18px',
                lineHeight: 1.65,
              }}
            >
              Daddy Associates is your premier, dependable multi-service partner.
              From sparkling residential and commercial spaces to hassle-free relocations
              and breathtaking celebrations, we handle every detail with excellence.
            </p>

            {/* Quick Values Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '20px',
              }}
            >
              <span
                style={{
                  fontSize: '0.78rem',
                  color: '#D9AE68',
                  backgroundColor: 'rgba(217, 174, 104, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(217, 174, 104, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <CheckCircle2 size={12} />
                Trained Professionals
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  color: '#D9AE68',
                  backgroundColor: 'rgba(217, 174, 104, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(217, 174, 104, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <ShieldCheck size={12} />
                Transparent Quotations
              </span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px',
              }}
            >
              Our Core Services
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'var(--color-gold)',
                }}
              />
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li>
                <Link
                  to="/services/deep-cleaning"
                  style={{
                    color: '#B2C0D4',
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  <ArrowRight size={14} color="var(--color-gold)" />
                  Deep Cleaning Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/packing-moving"
                  style={{
                    color: '#B2C0D4',
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  <ArrowRight size={14} color="var(--color-gold)" />
                  Packing & Moving Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/event-planning"
                  style={{
                    color: '#B2C0D4',
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  <ArrowRight size={14} color="var(--color-gold)" />
                  Event Planning & Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  style={{
                    color: 'var(--color-gold-light)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '6px',
                  }}
                >
                  <Sparkles size={14} />
                  Explore All Service Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px',
              }}
            >
              Company & Help
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'var(--color-gold)',
                }}
              />
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <li>
                <Link
                  to="/about"
                  style={{ color: '#B2C0D4', fontSize: '0.95rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  About Daddy Associates
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  style={{ color: '#B2C0D4', fontSize: '0.95rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  Photo Gallery & Past Work
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  style={{ color: '#B2C0D4', fontSize: '0.95rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: '#B2C0D4', fontSize: '0.95rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#B2C0D4')}
                >
                  Contact & Free Quotations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Availability */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px',
              }}
            >
              Get In Touch
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'var(--color-gold)',
                }}
              />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.94rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#B2C0D4' }}>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}, {siteConfig.contact.address.city}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  style={{ color: '#FFFFFF', fontWeight: 600 }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  style={{ color: '#B2C0D4' }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#B2C0D4', fontSize: '0.88rem' }}>
                  {siteConfig.contact.hours.weekdays}
                </span>
              </div>

              {/* Instant WhatsApp Action */}
              <div style={{ marginTop: '8px' }}>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: 'var(--color-whatsapp)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.88rem',
            color: '#8D9FB8',
          }}
        >
          <div>
            © {currentYear} <strong>{siteConfig.name}</strong>. All rights reserved.
            <span style={{ margin: '0 8px', color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <em>"{siteConfig.tagline}"</em>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/about" style={{ color: '#8D9FB8' }}>
              About
            </Link>
            <Link to="/services" style={{ color: '#8D9FB8' }}>
              Services
            </Link>
            <Link to="/faq" style={{ color: '#8D9FB8' }}>
              FAQ
            </Link>
            <Link to="/contact" style={{ color: '#8D9FB8' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
