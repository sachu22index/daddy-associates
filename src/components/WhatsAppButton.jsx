import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function WhatsAppButton({ customMessage = '' }) {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppUrl(customMessage);

  return (
    <div
      className="floating-whatsapp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 990,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div
          className="floating-whatsapp-tooltip"
          style={{
            backgroundColor: 'var(--color-navy)',
            color: '#FFFFFF',
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '0.84rem',
            fontWeight: 600,
            boxShadow: '0 8px 24px rgba(16, 28, 44, 0.25)',
            border: '1px solid rgba(217, 174, 104, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>Chat with us on WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            style={{
              color: '#B2C0D4',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              borderRadius: '50%',
            }}
            aria-label="Dismiss WhatsApp hint"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Contact Daddy Associates on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
