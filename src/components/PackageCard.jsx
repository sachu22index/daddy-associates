import React from 'react';
import { Check, Star, MessageCircle } from 'lucide-react';
import Button from './Button';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function PackageCard({ pkg, categoryName = 'Service' }) {
  const {
    id,
    name,
    tag,
    price = 'Request a Quote',
    priceDetail = 'Customized based on scope',
    description,
    featured = false,
    inclusions = [],
    ctaText = 'Request a Quote',
    whatsappMessage,
  } = pkg;

  const defaultMsg = `Hello Daddy Associates, I would like to request a quotation for the "${name}" (${categoryName}) package. Please share details and availability.`;
  const finalWhatsAppUrl = getWhatsAppUrl(whatsappMessage || defaultMsg);

  return (
    <div
      className={`ticket-card package-card ${featured ? 'package-card-featured' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: featured
          ? '2px solid var(--color-figma-orange)'
          : '1.5px solid #EEEEEE',
        boxShadow: featured
          ? '0 16px 36px rgba(255, 90, 31, 0.16)'
          : 'var(--shadow-figma-card)',
        transform: featured ? 'scale(1.02)' : 'none',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
      }}
    >
      {/* Featured Ribbon / Badge */}
      {tag && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 3,
          }}
        >
          <span
            className="badge"
            style={{
              backgroundColor: featured ? 'var(--color-figma-orange)' : '#111215',
              color: '#FFFFFF',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              fontWeight: 800,
              fontSize: '0.76rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '9999px',
            }}
          >
            {featured && <Star size={12} fill="currentColor" />}
            {tag}
          </span>
        </div>
      )}

      {/* Package Header Top Ticket Half */}
      <div style={{ padding: '32px 28px 20px', textAlign: 'left' }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--color-figma-orange)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '6px',
          }}
        >
          {categoryName} Tier
        </span>
        <h3
          style={{
            fontSize: '1.55rem',
            color: 'var(--color-figma-black)',
            fontWeight: 800,
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.55,
            minHeight: '44px',
          }}
        >
          {description}
        </p>

        {/* Price display: Request a Quote */}
        <div
          style={{
            marginTop: '16px',
            padding: '16px 20px',
            backgroundColor: featured ? 'rgba(255, 90, 31, 0.06)' : '#F8F9FA',
            borderRadius: '14px',
            border: featured ? '1px solid rgba(255, 90, 31, 0.2)' : '1px solid #EEEEEE',
          }}
        >
          <div
            style={{
              fontSize: '1.6rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: featured ? 'var(--color-figma-orange)' : 'var(--color-figma-black)',
              letterSpacing: '-0.02em',
            }}
          >
            {price}
          </div>
          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
              marginTop: '4px',
              fontWeight: 600,
            }}
          >
            {priceDetail}
          </div>
        </div>
      </div>

      {/* Ticket Perforation & Notches */}
      <div className="ticket-divider-row">
        <div className="ticket-notch-left" />
        <div className="ticket-divider-line" />
        <div className="ticket-notch-right" />
      </div>

      {/* Package Bottom Ticket Half */}
      <div
        style={{
          padding: '20px 28px 32px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <div style={{ flex: 1, marginBottom: '28px' }}>
          <h4
            style={{
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-figma-black)',
              marginBottom: '14px',
              fontWeight: 800,
            }}
          >
            Inclusions:
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
            {inclusions.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-dark)',
                  lineHeight: 1.45,
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: featured ? 'rgba(255, 90, 31, 0.15)' : '#F0F0F2',
                    color: featured ? 'var(--color-figma-orange)' : 'var(--color-figma-black)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Package CTA */}
        <div>
          <Button
            href={finalWhatsAppUrl}
            variant={featured ? 'orange' : 'black'}
            block
            size="lg"
            icon={<MessageCircle size={18} />}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
