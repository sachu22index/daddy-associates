/**
 * Service Packages and Pricing Structure for Daddy Associates
 * 
 * Note: Real prices are left configurable as "Request a Quote" by default
 * to maintain complete honesty and flexibility. Business owners can add numeric
 * starting rates (e.g., "$149", "$299") in the 'price' field at any time.
 */

export const packagesData = {
  "deep-cleaning": {
    categoryTitle: "Deep Cleaning Packages",
    categorySubtitle: "Professional hygiene packages customized to your residential or commercial square footage.",
    packages: [
      {
        id: "clean-essential",
        name: "Essential Clean",
        tag: "Popular For Regular Upkeep",
        price: "Request a Quote",
        priceDetail: "Customized based on room count",
        description: "Ideal for routine seasonal refreshes, studio apartments, or post-party surface touchups.",
        featured: false,
        inclusions: [
          "Complete floor sweeping, mopping & disinfectant wash",
          "Surface wiping of desks, counters, tables & shelves",
          "Bathroom mirror, washbasin & WC sanitization",
          "Kitchen countertop, sink, and stovetop degreasing",
          "Trash emptying and fresh liner placement",
          "Dusting of doors, handles, switches & picture frames"
        ],
        ctaText: "Request Quote for Essential Clean",
        whatsappMessage: "Hello Daddy Associates, I would like to get a quotation for the Essential Clean package. Please let me know the availability."
      },
      {
        id: "clean-deep",
        name: "Deep Clean",
        tag: "Most Popular",
        price: "Request a Quote",
        priceDetail: "Optimal for comprehensive refreshes",
        description: "Our signature intensive treatment targeting ingrained grease, grout limescale, and allergen buildup.",
        featured: true,
        inclusions: [
          "Everything in the Essential Clean package",
          "Intensive kitchen chimney, hood & tile degreasing",
          "Bathroom hard water limescale & grout scrubbing",
          "Mattress, sofa, and fabric HEPA vacuuming",
          "Balcony, window panes, grills & mesh scrubbing",
          "Ceiling fan blades, baseboards & door frame wipe-down",
          "Inside-microwave and refrigerator exterior detailing"
        ],
        ctaText: "Request Quote for Deep Clean",
        whatsappMessage: "Hello Daddy Associates, I would like to enquire about your Deep Clean package. Please provide a customized quote."
      },
      {
        id: "clean-premium",
        name: "Premium Cleaning",
        tag: "White-Glove Standard",
        price: "Request a Quote",
        priceDetail: "Complete luxury whole-home detailing",
        description: "The ultimate whole-property transformation for new move-ins, post-construction, or luxury estates.",
        featured: false,
        inclusions: [
          "Everything in the Deep Clean package",
          "Interior & exterior cleaning of all cabinets & drawers",
          "Machine floor buffing and scrubbing for gleaming finish",
          "Specialized upholstery shampooing & steam disinfection",
          "High-ceiling chandelier & decorative light detailing",
          "Post-cleaning antimicrobial misting & air freshening",
          "Dedicated supervisor quality walkthrough & signoff"
        ],
        ctaText: "Request Quote for Premium Cleaning",
        whatsappMessage: "Hello Daddy Associates, I am interested in your Premium Cleaning package. Please provide full package details and pricing."
      }
    ]
  },

  "packing-moving": {
    categoryTitle: "Packing & Moving Packages",
    categorySubtitle: "Safe, systematic transitions tailored to your relocation distance and household volume.",
    packages: [
      {
        id: "move-basic",
        name: "Basic Move",
        tag: "Budget Friendly",
        price: "Request a Quote",
        priceDetail: "Ideal for pre-packed relocations",
        description: "Perfect for customers who prefer packing their own personal belongings and require experienced moving muscle.",
        featured: false,
        inclusions: [
          "Trained moving crew for heavy lifting & maneuvering",
          "Protective blankets & heavy-duty straps for large furniture",
          "Careful loading and systematic weight-balanced stacking",
          "Safe transit handling to your new destination",
          "Unloading into designated ground-floor or elevator rooms",
          "Basic appliance moving (refrigerators, washers)"
        ],
        ctaText: "Request Quote for Basic Move",
        whatsappMessage: "Hello Daddy Associates, I would like a quote for your Basic Move package. Please share details."
      },
      {
        id: "move-standard",
        name: "Standard Move",
        tag: "Most Selected",
        price: "Request a Quote",
        priceDetail: "Complete packing + moving workflow",
        description: "Our comprehensive solution where we pack your fragile items, dismantle furniture, and manage moving day.",
        featured: true,
        inclusions: [
          "Everything in the Basic Move package",
          "High-grade corrugated boxes, tape & bubble wrap provided",
          "Fragile packing for crockery, glassware, TVs & mirrors",
          "Bed frame, dining table & modular furniture disassembly",
          "Color-coded carton labeling for organized unpacking",
          "Reassembly of dismantled standard furniture items",
          "Dedicated on-site move captain"
        ],
        ctaText: "Request Quote for Standard Move",
        whatsappMessage: "Hello Daddy Associates, I would like to enquire about your Standard Move package for an upcoming relocation."
      },
      {
        id: "move-complete",
        name: "Complete Moving Package",
        tag: "Zero-Stress VIP Relocation",
        price: "Request a Quote",
        priceDetail: "Turnkey pack, shift & unpack experience",
        description: "Relax while our white-glove team packs every room, relocates everything, and unpacks onto shelves and closets.",
        featured: false,
        inclusions: [
          "Everything in the Standard Move package",
          "Full-house packing of all closets, drawers & pantry items",
          "Wardrobe boxes provided for hanging garments without wrinkling",
          "Complete unpacking and placement at destination",
          "Post-move carton breakdown and eco-friendly packing debris removal",
          "Priority scheduling with dedicated weekend/evening slots",
          "Post-move basic sweep and surface wipe-down"
        ],
        ctaText: "Request Complete Move Package",
        whatsappMessage: "Hello Daddy Associates, I am interested in your Complete Moving Package. Please provide a full consultation."
      }
    ]
  },

  "event-planning": {
    categoryTitle: "Event Planning Packages",
    categorySubtitle: "Creative design, seamless vendor coordination, and stress-free execution.",
    packages: [
      {
        id: "event-intimate",
        name: "Intimate Celebration",
        tag: "Up to 50 Guests",
        price: "Request a Quote",
        priceDetail: "Customized to venue & concept",
        description: "Ideal for birthday dinners, baby showers, cozy engagement parties, and home anniversary gatherings.",
        featured: false,
        inclusions: [
          "Initial theme consultation & mood board curation",
          "Curated welcome backdrop & balloon/floral installation",
          "Cake table aesthetic styling & specialty linen setup",
          "Ambient lighting arrangement (fairy lights / spotlights)",
          "Vendor recommendations (cake artists, photographers)",
          "Event day setup (2 hours prior) & prompt teardown"
        ],
        ctaText: "Request Quote for Intimate Event",
        whatsappMessage: "Hello Daddy Associates, I would like to enquire about your Intimate Celebration event package."
      },
      {
        id: "event-signature",
        name: "Signature Event",
        tag: "Most Popular",
        price: "Request a Quote",
        priceDetail: "50 to 200 Guests",
        description: "Full coordination for milestone celebrations, elegant wedding receptions, and corporate galas.",
        featured: true,
        inclusions: [
          "Comprehensive event concept, 3D design & palette styling",
          "Complete stage / head table design with lush florals",
          "Entrance archway styling, photo booth backdrop & custom props",
          "Audio-visual & sound system liaison with technician support",
          "Day-of timeline management and vendor run-sheet supervision",
          "Seating chart display, place settings & welcome signage",
          "On-site coordination team managing guest flow and cues"
        ],
        ctaText: "Request Quote for Signature Event",
        whatsappMessage: "Hello Daddy Associates, I would like to plan a celebration with your Signature Event package. Please share details."
      },
      {
        id: "event-premium",
        name: "Premium Event Planning",
        tag: "Full-Scale Bespoke Production",
        price: "Request a Quote",
        priceDetail: "Multi-day / 200+ Guests",
        description: "Bespoke luxury production covering destination weddings, corporate product conferences, and grand festivals.",
        featured: false,
        inclusions: [
          "End-to-end bespoke production and executive event directing",
          "Architectural ceiling drapery, trussing & intelligent lighting",
          "Full entertainment booking (live musicians, DJs, emcees)",
          "Catering tasting management and VIP hospitality coordination",
          "Custom physical invitations, digital RSVP tracking & guest gifts",
          "Multi-day timeline management with dedicated stage managers",
          "Post-event breakdown, cleanup & complete venue restoration"
        ],
        ctaText: "Request Premium Event Proposal",
        whatsappMessage: "Hello Daddy Associates, I would like to discuss the Premium Event Planning package for an upcoming large-scale event."
      }
    ]
  }
};
