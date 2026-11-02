import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import Button from './Button';
import { getWhatsAppUrl, getCleaningWhatsAppMessage } from '../config/siteConfig';

export default function ServiceCard({
  service,
  categorySlug = 'deep-cleaning',
  categoryTitle = 'Deep Cleaning',
}) {
  const {
    id,
    title,
    shortDesc,
    includedTasks = [],
    idealFor,
    image,
    ctaText = 'Book Service',
  } = service;

  const whatsappMessage = `Hello Daddy Associates, I would like to enquire about your "${title}" (${categoryTitle}) service. Please share availability and a quotation.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div
      className="card service-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1.5px solid #EEEEEE',
        boxShadow: 'var(--shadow-figma-card)',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Service Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '230px',
          overflow: 'hidden',
          backgroundColor: '#111215',
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
          }}
        >
          <span
            className="badge"
            style={{
              backgroundColor: '#111215',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '5px 12px',
            }}
          >
            {categoryTitle}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.3rem',
            marginBottom: '10px',
            color: 'var(--color-figma-black)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: '0.94rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            marginBottom: '18px',
          }}
        >
          {shortDesc}
        </p>

        {/* Included Tasks Checklist */}
        {includedTasks.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-figma-black)',
                marginBottom: '10px',
                fontWeight: 800,
              }}
            >
              Key Inclusions:
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {includedTasks.slice(0, 4).map((task, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: 'var(--color-text-dark)',
                    lineHeight: 1.45,
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="var(--color-figma-orange)"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ideal For Highlight */}
        {idealFor && (
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '14px',
              borderTop: '1px solid #F1F3F5',
              marginBottom: '20px',
              fontSize: '0.84rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <strong style={{ color: 'var(--color-figma-black)' }}>Ideal for: </strong>
            {idealFor}
          </div>
        )}

        {/* Card CTA Action */}
        <div style={{ marginTop: idealFor ? 0 : 'auto' }}>
          <Button
            href={whatsappUrl}
            variant="orange"
            block
            size="md"
            icon={<MessageCircle size={18} />}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
