/**
 * Daddy Associates - Site Configuration
 * 
 * Edit this file to update business details, WhatsApp contact, branding text,
 * hours, addresses, and messaging throughout the entire application.
 */

export const siteConfig = {
  // Brand details
  name: "Daddy Associates",
  shortName: "Daddy Associates",
  tagline: "We Clean. We Move. We Celebrate.",
  motto: "Give Your Plan and Buy the Action",
  logoUrl: "/images/logo.jpg",
  description:
    "Daddy Associates is your premier multi-service partner for comprehensive deep cleaning, dependable packing & moving, and extraordinary event planning.",

  // Top announcement banner (set enabled: false to hide)
  announcement: {
    enabled: true,
    text: "✨ Limited-Time Bundle Offer: Book any 2 services and receive an exclusive package discount! Chat on WhatsApp for details.",
    badge: "Special Offer",
  },

  // WhatsApp Integration
  // NOTE: Replace this placeholder with your genuine international phone number (digits only, no '+' or spaces).
  // Example for India: '919876543210' | Example for US: '1234567890' | Example for UK: '447911123456'
  // Can also be set in your .env file as VITE_WHATSAPP_PHONE
  whatsapp: {
    phoneNumber: import.meta.env.VITE_WHATSAPP_PHONE || "1234567890",
    displayPhone: "+1 (234) 567-8900",
    isPlaceholder: !import.meta.env.VITE_WHATSAPP_PHONE || import.meta.env.VITE_WHATSAPP_PHONE === "1234567890",
  },

  // Contact Information
  contact: {
    phone: import.meta.env.VITE_SITE_PHONE || "+1 (234) 567-8900",
    email: import.meta.env.VITE_SITE_EMAIL || "info@daddyassociates.com",
    supportEmail: "support@daddyassociates.com",
    address: {
      line1: "124 Grand Heritage Boulevard",
      line2: "Suite 500, Central City",
      city: "Metro City",
      postalCode: "10001",
      country: "United States",
    },
    hours: {
      weekdays: "Monday – Friday: 8:00 AM – 8:00 PM",
      saturday: "Saturday: 8:30 AM – 6:30 PM",
      sunday: "Sunday: 9:30 AM – 5:00 PM (Emergency & Scheduled Moves/Events)",
    },
    // Optional backend form endpoint (e.g. Formspree or custom REST API)
    formEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "",
    // Embed map placeholder (can be customized with real Google Maps iframe embed URL)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976373099955!3d40.69766374929312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1698000000000!5m2!1sen!2sus",
  },

  // Social Links
  socialLinks: {
    facebook: "https://facebook.com/daddyassociates",
    instagram: "https://instagram.com/daddyassociates",
    linkedin: "https://linkedin.com/company/daddyassociates",
    twitter: "https://twitter.com/daddyassociates",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Services",
      path: "/services",
      submenu: [
        { label: "All Services", path: "/services" },
        { label: "Deep Cleaning", path: "/services/deep-cleaning" },
        { label: "Packing & Moving", path: "/services/packing-moving" },
        { label: "Event Planning", path: "/services/event-planning" },
      ],
    },
    { label: "Gallery", path: "/gallery" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ],

  // Brand Theme Colors
  theme: {
    navy: "#101C2C",
    navyLight: "#1A2B42",
    gold: "#D9AE68",
    goldLight: "#E8C88E",
    goldDark: "#B88D45",
    white: "#FFFFFF",
    lightGrey: "#F5F7FA",
    darkText: "#182230",
    mutedText: "#52627A",
    whatsapp: "#25D366",
  },
};

/**
 * Creates an official WhatsApp chat link with an URL-encoded message.
 * @param {string} customMessage - Plain text message to prefill.
 * @returns {string} - Full WhatsApp URL.
 */
export function getWhatsAppUrl(customMessage = "") {
  const phone = siteConfig.whatsapp.phoneNumber.replace(/[^\d]/g, "");
  const defaultText = `Hello Daddy Associates! I would like to enquire about your services.`;
  const messageToEncode = customMessage || defaultText;
  return `https://wa.me/${phone}?text=${encodeURIComponent(messageToEncode)}`;
}

/**
 * Prepares a customized WhatsApp message for Deep Cleaning.
 */
export function getCleaningWhatsAppMessage(serviceOrPackage = "Deep Cleaning") {
  return `Hello Daddy Associates, I would like to enquire about your ${serviceOrPackage} service. Please share package details, pricing, and availability.`;
}

/**
 * Prepares a customized WhatsApp message for Packing and Moving.
 */
export function getMovingWhatsAppMessage(details = {}) {
  const {
    packageName = "Packing & Moving",
    moveDate = "",
    pickup = "",
    destination = "",
  } = details;

  let msg = `Hello Daddy Associates, I would like to enquire about your ${packageName} service.`;
  if (moveDate) msg += `\n- Moving Date: ${moveDate}`;
  if (pickup) msg += `\n- Pickup Location: ${pickup}`;
  if (destination) msg += `\n- Destination: ${destination}`;
  msg += `\nPlease provide a customized relocation quotation.`;
  return msg;
}

/**
 * Prepares a customized WhatsApp message for Event Planning.
 */
export function getEventWhatsAppMessage(details = {}) {
  const {
    eventType = "Event Planning",
    eventDate = "",
    guestCount = "",
  } = details;

  let msg = `Hello Daddy Associates, I would like to plan a ${eventType} with your team.`;
  if (eventDate) msg += `\n- Tentative Date: ${eventDate}`;
  if (guestCount) msg += `\n- Estimated Guests: ${guestCount}`;
  msg += `\nPlease share your event coordination packages and consultation slots.`;
  return msg;
}
