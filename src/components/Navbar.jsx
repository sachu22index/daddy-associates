import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Track scroll position for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Services',
      path: '/services',
      hasDropdown: true,
      children: [
        { label: 'All Services Overview', path: '/services', desc: 'Browse all solutions' },
        { label: 'Deep Cleaning', path: '/services/deep-cleaning', desc: 'Homes, offices & move turnovers' },
        { label: 'Packing & Moving', path: '/services/packing-moving', desc: 'Safe shifting & organized packing' },
        { label: 'Event Planning', path: '/services/event-planning', desc: 'Weddings, birthdays & galas' },
      ],
    },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#FFFFFF',
        transition: 'all 0.3s ease',
        boxShadow: scrolled
          ? '0 10px 30px rgba(16, 28, 44, 0.08)'
          : '0 2px 10px rgba(16, 28, 44, 0.04)',
      }}
    >
      {/* Top Announcement Bar */}
      {siteConfig.announcement.enabled && (
        <div
          style={{
            backgroundColor: 'var(--color-navy)',
            color: '#FFFFFF',
            padding: '7px 0',
            fontSize: '0.85rem',
            borderBottom: '1px solid rgba(217, 174, 104, 0.25)',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-navy)',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {siteConfig.announcement.badge}
              </span>
              <span style={{ color: '#E5E9F0' }}>
                {siteConfig.announcement.text}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                fontSize: '0.82rem',
                color: '#B2C0D4',
              }}
              className="announcement-meta"
            >
              <a
                href={`tel:${siteConfig.contact.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FFFFFF',
                  fontWeight: 500,
                }}
              >
                <PhoneCall size={14} color="#D9AE68" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-whatsapp)',
                  fontWeight: 600,
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp Instant</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
        }}
      >
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navLinks.map((item) => {
            if (item.hasDropdown) {
              const isServiceActive = location.pathname.startsWith('/services');
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: isServiceActive ? 'var(--color-gold-dark)' : 'var(--color-navy)',
                      padding: '8px 0',
                    }}
                    aria-expanded={servicesOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '280px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 16px 36px rgba(16, 28, 44, 0.14)',
                        border: '1px solid var(--color-border)',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        zIndex: 1100,
                        animation: 'fadeIn 0.2s ease-out',
                      }}
                    >
                      {item.children.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          style={({ isActive }) => ({
                            display: 'block',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            backgroundColor: isActive ? 'var(--color-gold-lighter)' : 'transparent',
                            color: isActive ? 'var(--color-navy)' : 'var(--color-navy)',
                            textDecoration: 'none',
                            transition: 'all 0.15s ease',
                          })}
                        >
                          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{sub.label}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                            {sub.desc}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  color: isActive ? 'var(--color-figma-orange)' : 'var(--color-figma-black)',
                  position: 'relative',
                  padding: '8px 0',
                  letterSpacing: '-0.01em',
                })}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '100%',
                          height: '2.5px',
                          backgroundColor: 'var(--color-figma-orange)',
                          borderRadius: '2px',
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Button
            href={getWhatsAppUrl()}
            variant="whatsapp"
            size="sm"
            icon={<MessageCircle size={16} />}
            aria-label="Chat with Daddy Associates on WhatsApp"
          >
            WhatsApp
          </Button>

          <Button
            to="/contact"
            variant="orange"
            size="sm"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          style={{
            display: 'none',
            padding: '8px',
            color: 'var(--color-navy)',
            borderRadius: '6px',
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(16, 28, 44, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 1050,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              maxHeight: 'calc(100vh - 74px)',
              overflowY: 'auto',
              padding: '24px 20px 32px',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
              boxShadow: '0 20px 40px rgba(16, 28, 44, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '12px 14px',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--color-navy)',
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          style={{
                            transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        />
                      </button>

                      {servicesOpen && (
                        <div
                          style={{
                            paddingLeft: '14px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            marginTop: '4px',
                          }}
                        >
                          {item.children.map((sub) => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              style={({ isActive }) => ({
                                display: 'block',
                                padding: '10px 12px',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: isActive ? 'var(--color-gold-dark)' : 'var(--color-navy-light)',
                                backgroundColor: isActive ? 'var(--color-gold-lighter)' : 'transparent',
                              })}
                            >
                              {sub.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--color-gold-dark)' : 'var(--color-navy)',
                      backgroundColor: isActive ? 'var(--color-gold-lighter)' : 'transparent',
                      borderBottom: '1px solid var(--color-border)',
                    })}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <Button
                href={getWhatsAppUrl()}
                variant="whatsapp"
                block
                size="lg"
                icon={<MessageCircle size={20} />}
              >
                Chat on WhatsApp
              </Button>

              <Button
                to="/contact"
                variant="primary"
                block
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Get a Free Quote
              </Button>

              <div
                style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                Direct Call:{' '}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  style={{ color: 'var(--color-navy)', fontWeight: 700 }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS helper for navbar toggling */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
          .announcement-meta {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
