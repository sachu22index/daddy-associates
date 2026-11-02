import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CalendarCheck,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Contact() {
  const { contact, socialLinks, whatsapp } = siteConfig;

  return (
    <div className="contact-page">
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
            Get In Touch
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
            Contact <span style={{ color: 'var(--color-figma-yellow)' }}>Daddy Associates</span>
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
            Have a question or ready to request a quotation? Reach out to our team
            via WhatsApp, phone, email, or our detailed online enquiry form below.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: Contact Information Panel */}
            <div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '40px 36px',
                  boxShadow: 'var(--shadow-figma-card)',
                  border: '2px solid var(--color-figma-black)',
                  marginBottom: '32px',
                }}
              >
                <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
                  Direct Channels
                </span>
                <h3
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--color-figma-black)',
                    marginBottom: '10px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Contact Information
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '32px' }}>
                  Our service coordinators are on standby to answer your questions, outline package
                  options, and provide fast, transparent quotations.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* WhatsApp Direct */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(37, 211, 102, 0.14)',
                        color: 'var(--color-whatsapp-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Fastest Response: WhatsApp
                      </div>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '1.08rem',
                          fontWeight: 800,
                          color: 'var(--color-whatsapp-dark)',
                          display: 'inline-block',
                          marginTop: '2px',
                        }}
                      >
                        Chat on WhatsApp Now →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 90, 31, 0.1)',
                        color: 'var(--color-figma-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Direct Telephone Line
                      </div>
                      <a
                        href={`tel:${contact.phone}`}
                        style={{
                          fontSize: '1.08rem',
                          fontWeight: 800,
                          color: 'var(--color-figma-black)',
                          display: 'inline-block',
                          marginTop: '2px',
                        }}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 225, 71, 0.2)',
                        color: '#8A6D00',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Email Enquiries
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: 700,
                          color: 'var(--color-figma-black)',
                          display: 'inline-block',
                          marginTop: '2px',
                        }}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 90, 31, 0.1)',
                        color: 'var(--color-figma-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Office & Headquarters
                      </div>
                      <div style={{ fontSize: '0.96rem', color: 'var(--color-figma-black)', marginTop: '2px', lineHeight: 1.5, fontWeight: 600 }}>
                        {contact.address.line1}, {contact.address.line2}<br />
                        {contact.address.city}, {contact.address.postalCode}
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 225, 71, 0.2)',
                        color: '#8A6D00',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Operational Hours
                      </div>
                      <div style={{ fontSize: '0.94rem', color: 'var(--color-figma-black)', marginTop: '2px', lineHeight: 1.5, fontWeight: 600 }}>
                        {contact.hours.weekdays}<br />
                        {contact.hours.saturday}<br />
                        <span style={{ color: 'var(--color-figma-orange)', fontWeight: 700 }}>
                          {contact.hours.sunday}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #EEEEEE' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--color-figma-black)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Connect on Social Media:
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Daddy Associates on Facebook"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--color-figma-black)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Daddy Associates on Instagram"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--color-figma-black)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Daddy Associates on LinkedIn"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--color-figma-black)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Daddy Associates on Twitter"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--color-figma-black)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed Panel */}
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '300px',
                  border: '2px solid var(--color-figma-black)',
                  boxShadow: 'var(--shadow-figma-card)',
                }}
              >
                <iframe
                  title="Daddy Associates Service Area Map"
                  src={contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
