import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items = [], allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([items[0]?.id || '']);

  const toggleItem = (id) => {
    if (allowMultiple) {
      if (openIds.includes(id)) {
        setOpenIds(openIds.filter((item) => item !== id));
      } else {
        setOpenIds([...openIds, id]);
      }
    } else {
      setOpenIds(openIds.includes(id) ? [] : [id]);
    }
  };

  return (
    <div
      className="faq-accordion-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
      }}
    >
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id || index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '18px',
              border: isOpen ? '2px solid var(--color-figma-black)' : '1.5px solid #EEEEEE',
              boxShadow: isOpen ? 'var(--shadow-figma-card)' : '0 2px 8px rgba(0,0,0,0.03)',
              overflow: 'hidden',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-btn-${item.id}`}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 26px',
                textAlign: 'left',
                backgroundColor: isOpen ? '#FFFDF9' : '#FFFFFF',
                transition: 'background-color 0.2s',
                gap: '16px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span
                  style={{
                    color: isOpen ? 'var(--color-figma-orange)' : '#9CA3AF',
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <HelpCircle size={22} />
                </span>
                <span
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 800,
                    color: 'var(--color-figma-black)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.question}
                </span>
              </div>

              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: isOpen ? 'var(--color-figma-yellow)' : '#F3F4F6',
                  color: 'var(--color-figma-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <ChevronDown size={18} strokeWidth={2.5} />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                style={{
                  padding: '0 26px 24px 62px',
                  backgroundColor: isOpen ? '#FFFDF9' : '#FFFFFF',
                  color: '#4B5563',
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                }}
              >
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
