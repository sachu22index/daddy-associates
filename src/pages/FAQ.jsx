import React, { useState } from 'react';
import { HelpCircle, Search, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { faqCategories, faqsData } from '../data/faqs';
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items by category & search query
  const filteredFaqs = faqsData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Count items per category
  const getFaqCount = (catId) => {
    if (catId === 'all') return faqsData.length;
    return faqsData.filter((f) => f.category === catId).length;
  };

  return (
    <div className="faq-page">
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
            background: 'radial-gradient(circle, rgba(255, 225, 71, 0.08) 0%, rgba(17, 18, 21, 0) 70%)',
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
            <HelpCircle size={14} color="var(--color-figma-yellow)" />
            Help & Knowledge Base
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
            Frequently Asked <span style={{ color: 'var(--color-figma-yellow)' }}>Questions</span>
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
            Find quick, transparent answers regarding our deep cleaning standards,
            packing & moving workflows, event coordination, quotes, and payment terms.
          </p>

          {/* Quick Search Bar */}
          <div
            style={{
              marginTop: '36px',
              maxWidth: '580px',
              margin: '36px auto 0',
              position: 'relative',
            }}
          >
            <Search
              size={20}
              color="var(--color-figma-yellow)"
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input
              type="text"
              placeholder="Search a question (e.g. quote, chemicals, furniture)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 22px 16px 54px',
                borderRadius: '50px',
                border: '2px solid rgba(255, 225, 71, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. FAQ List & Category Filter */}
      <section className="section" style={{ backgroundColor: 'var(--color-figma-bg-ivory)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Category Filter Pills */}
          <div className="filter-pills-wrap" style={{ marginBottom: '44px' }}>
            {faqCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="pill-count">{getFaqCount(cat.id)}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion Component */}
          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} allowMultiple />
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '56px 24px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '2px solid var(--color-figma-black)',
                boxShadow: 'var(--shadow-figma-card)',
              }}
            >
              <h3 style={{ color: 'var(--color-figma-black)', marginBottom: '10px', fontWeight: 800 }}>
                No matching questions found
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                Try searching with different terms or reset your filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn btn-outline-black"
                style={{ display: 'inline-flex' }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Have Unanswered Questions CTA (Figma Dark) */}
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
            Got Questions?
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
            Still Have Questions?
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '36px' }}>
            Our team is always happy to assist. Send us a message on WhatsApp or call our friendly coordinators directly.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} className="btn-group-mobile-stack">
            <Button
              href={getWhatsAppUrl('Hello Daddy Associates, I have a question regarding your services that was not covered in the FAQ.')}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Ask on WhatsApp
            </Button>
            <Button to="/contact" variant="orange" size="lg">
              Contact Us Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
