import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Loader2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  Layers
} from 'lucide-react';
import Button from './Button';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function ContactForm({ prefilledService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: prefilledService || 'deep-cleaning',
    preferredDate: '',
    location: '',
    message: '',
    botField: '', // Honeypot field for bot spam detection
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'demo_success' | 'error'
  const [serverMessage, setServerMessage] = useState('');

  // Service Category Options
  const serviceOptions = [
    { value: 'deep-cleaning', label: 'Deep Cleaning Services' },
    { value: 'packing-moving', label: 'Packing & Moving Services' },
    { value: 'event-planning', label: 'Event Planning & Management' },
    { value: 'bundle', label: 'Multi-Service Bundle (Clean + Move)' },
    { value: 'other', label: 'Custom or Other Consultation' },
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!/^[0-9+()\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (digits, optional +).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!formData.serviceCategory) {
      newErrors.serviceCategory = 'Please select a service category.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please provide your service location or city.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details or specific requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.botField) {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    const endpoint = siteConfig.contact.formEndpoint;

    // If an external backend or Formspree endpoint is configured
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            service: formData.serviceCategory,
            date: formData.preferredDate || 'Not specified',
            location: formData.location,
            message: formData.message,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          setStatus('success');
          setServerMessage(
            'Thank you! Your enquiry has been received. Our team will contact you shortly.'
          );
        } else {
          const resData = await response.json().catch(() => ({}));
          setStatus('error');
          setServerMessage(
            resData.error ||
              'We were unable to deliver your message. Please use WhatsApp or call us directly.'
          );
        }
      } catch (err) {
        setStatus('error');
        setServerMessage(
          'Network connection error. Please connect with us directly on WhatsApp or phone.'
        );
      }
    } else {
      // Truthful Demo Fallback: No fake delivery
      setTimeout(() => {
        setStatus('demo_success');
      }, 700);
    }
  };

  // Build formatted WhatsApp message with filled contact data
  const generateWhatsAppMessage = () => {
    return `Hello Daddy Associates! I would like to request a quote:
- Name: ${formData.fullName || 'N/A'}
- Service: ${formData.serviceCategory}
- Phone: ${formData.phone || 'N/A'}
- Email: ${formData.email || 'N/A'}
- Location: ${formData.location || 'N/A'}
- Preferred Date: ${formData.preferredDate || 'Flexible'}
- Requirements: ${formData.message || 'Please share quote and availability.'}`;
  };

  const directWhatsAppUrl = getWhatsAppUrl(generateWhatsAppMessage());

  return (
    <div
      className="card contact-form-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: '40px 36px',
        boxShadow: 'var(--shadow-figma-card)',
        border: '2px solid var(--color-figma-black)',
      }}
    >
      <div style={{ marginBottom: '28px' }}>
        <span className="badge badge-orange" style={{ marginBottom: '10px' }}>
          Instant Response
        </span>
        <h3
          style={{
            fontSize: '1.75rem',
            color: 'var(--color-figma-black)',
            marginBottom: '8px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          Request Your Free Quote
        </h3>
        <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', margin: 0 }}>
          Fill out your requirements below and our team will prepare a tailored proposal.
        </p>
      </div>

      {/* Actual Live Success Banner */}
      {status === 'success' && (
        <div
          role="status"
          style={{
            backgroundColor: '#ECFDF5',
            border: '2px solid #10B981',
            borderRadius: '14px',
            padding: '20px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
          }}
        >
          <CheckCircle2 color="#10B981" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: '#065F46', fontSize: '1.05rem', marginBottom: '4px', fontWeight: 800 }}>
              Enquiry Submitted Successfully!
            </h4>
            <p style={{ color: '#047857', fontSize: '0.92rem', margin: 0 }}>
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      {/* Truthful Demo Mode Banner */}
      {status === 'demo_success' && (
        <div
          role="status"
          style={{
            backgroundColor: '#FFFDF0',
            border: '2px solid var(--color-figma-yellow)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
            <AlertCircle color="#8A6D00" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: 'var(--color-figma-black)', fontSize: '1.1rem', marginBottom: '4px', fontWeight: 800 }}>
                Form Validated (Demo Environment Notice)
              </h4>
              <p style={{ color: '#4B5563', fontSize: '0.94rem', lineHeight: 1.55, margin: 0 }}>
                Your form inputs were checked and validated. Because no backend form endpoint (such as Formspree or your company email API) has been attached to <code>VITE_CONTACT_FORM_ENDPOINT</code> in <code>.env</code>, we will not falsely pretend your email was dispatched.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1.5px solid #E2E8F0',
              marginBottom: '18px',
              fontSize: '0.92rem',
              color: 'var(--color-figma-black)',
              fontWeight: 600,
            }}
          >
            <strong>Send directly via WhatsApp:</strong> Click below to transmit all your entered details immediately to Daddy Associates on WhatsApp!
          </div>

          <Button
            href={directWhatsAppUrl}
            variant="whatsapp"
            block
            size="lg"
            icon={<MessageCircle size={20} />}
          >
            Forward Quote via WhatsApp Now
          </Button>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            style={{
              marginTop: '14px',
              color: 'var(--color-figma-black)',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'underline',
              display: 'block',
              textAlign: 'center',
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Edit Form Details
          </button>
        </div>
      )}

      {/* Backend Error Banner */}
      {status === 'error' && (
        <div
          role="alert"
          style={{
            backgroundColor: '#FEF2F2',
            border: '2px solid #EF4444',
            borderRadius: '14px',
            padding: '18px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <AlertCircle color="#EF4444" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: '#991B1B', fontSize: '1.02rem', marginBottom: '4px', fontWeight: 800 }}>
              Submission Error
            </h4>
            <p style={{ color: '#B91C1C', fontSize: '0.92rem', margin: 0 }}>
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      {/* The Form */}
      {status !== 'demo_success' && (
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot hidden input */}
          <div style={{ display: 'none' }}>
            <label htmlFor="botField">Do not fill this</label>
            <input
              id="botField"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--color-figma-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '8px',
                }}
              >
                <User size={15} color="var(--color-figma-orange)" />
                Full Name <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Alexander Vance"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: errors.fullName ? '2px solid #EF4444' : '1.5px solid #E2E8F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                  fontWeight: 500,
                }}
              />
              {errors.fullName && (
                <span id="fullName-error" style={{ color: '#EF4444', fontSize: '0.82rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--color-figma-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '8px',
                }}
              >
                <Phone size={15} color="var(--color-figma-orange)" />
                Phone Number <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: errors.phone ? '2px solid #EF4444' : '1.5px solid #E2E8F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                  fontWeight: 500,
                }}
              />
              {errors.phone && (
                <span id="phone-error" style={{ color: '#EF4444', fontSize: '0.82rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--color-figma-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '8px',
                }}
              >
                <Mail size={15} color="var(--color-figma-orange)" />
                Email Address <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: errors.email ? '2px solid #EF4444' : '1.5px solid #E2E8F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                  fontWeight: 500,
                }}
              />
              {errors.email && (
                <span id="email-error" style={{ color: '#EF4444', fontSize: '0.82rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Service Category */}
            <div>
              <label
                htmlFor="serviceCategory"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--color-figma-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '8px',
                }}
              >
                <Layers size={15} color="var(--color-figma-orange)" />
                Service Needed <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <select
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: errors.serviceCategory ? '2px solid #EF4444' : '1.5px solid #E2E8F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {/* Preferred Service Date */}
            <div>
              <label
                htmlFor="preferredDate"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--color-figma-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '8px',
                }}
              >
                <Calendar size={15} color="var(--color-figma-orange)" />
                Preferred Date (Optional)
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid #E2E8F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                }}
              />
            </div>

            {/* Location / Address */}
            <div>
              <label
                htmlFor="location"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: 'var(--color-figma-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '8px',
                }}
              >
                <MapPin size={15} color="var(--color-figma-orange)" />
                Location / City <span style={{ color: '#EF4444' }}>*</span>
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Metro City, Downtown area"
                aria-required="true"
                aria-invalid={!!errors.location}
                aria-describedby={errors.location ? 'location-error' : undefined}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: errors.location ? '2px solid #EF4444' : '1.5px solid #E2E8F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--color-figma-black)',
                }}
              />
              {errors.location && (
                <span id="location-error" style={{ color: '#EF4444', fontSize: '0.82rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                  {errors.location}
                </span>
              )}
            </div>
          </div>

          {/* Message / Requirements */}
          <div style={{ marginBottom: '28px' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                fontSize: '0.84rem',
                fontWeight: 800,
                color: 'var(--color-figma-black)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                marginBottom: '8px',
              }}
            >
              Service Details or Questions <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the property size (e.g., 3-bed home), packing needs, event date/guest count, or specific requirements..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: errors.message ? '2px solid #EF4444' : '1.5px solid #E2E8F0',
                fontSize: '0.95rem',
                outline: 'none',
                backgroundColor: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-figma-black)',
                resize: 'vertical',
              }}
            />
            {errors.message && (
              <span id="message-error" style={{ color: '#EF4444', fontSize: '0.82rem', marginTop: '4px', display: 'block', fontWeight: 600 }}>
                {errors.message}
              </span>
            )}
          </div>

          {/* Form Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Button
              type="submit"
              variant="orange"
              block
              size="lg"
              disabled={status === 'submitting'}
              icon={
                status === 'submitting' ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )
              }
              iconPosition="right"
            >
              {status === 'submitting' ? 'Processing Enquiry...' : 'Submit Quote Request'}
            </Button>

            {/* Instant WhatsApp Quick Link */}
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                Prefer an immediate response?{' '}
              </span>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-whatsapp-dark)',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <MessageCircle size={16} />
                Quote via WhatsApp instead
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
