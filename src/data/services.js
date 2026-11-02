/**
 * Services Data for Daddy Associates
 * 
 * All service details, descriptions, inclusions, and photography links are organized here.
 * Owners can modify, add, or remove services without editing component JSX.
 */

export const serviceCategories = [
  {
    id: "deep-cleaning",
    title: "Deep Cleaning Services",
    slug: "deep-cleaning",
    tagline: "Spotless, sanitized spaces crafted with meticulous precision.",
    description:
      "Transform your home, apartment, or commercial workspace into an immaculate, hygienic haven with our thorough deep cleaning procedures.",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
    badge: "Eco-Friendly & Thorough",
    services: [
      {
        id: "full-home-deep-cleaning",
        title: "Full Home Deep Cleaning",
        shortDesc: "Complete top-to-bottom scrub and sanitation of every room in your home.",
        fullDesc: "Our comprehensive whole-residence service covers every corner: living spaces, bedrooms, bathrooms, hallways, kitchen exteriors and interiors, windows, and floor scrubbing.",
        includedTasks: [
          "Floor scrubbing, machine buffing & stain removal",
          "Deep vacuuming of upholstered furniture and carpets",
          "Dusting & sanitizing ceiling fans, baseboards & fixtures",
          "Window panes, frames, grills & mesh sanitation",
          "Door handles, light switches & high-touch disinfection"
        ],
        idealFor: "Annual refreshes, post-renovation cleanup, festive preparations.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
        ctaText: "Book Full Home Clean"
      },
      {
        id: "kitchen-deep-cleaning",
        title: "Kitchen Deep Cleaning",
        shortDesc: "Degreasing exhaust hoods, chimney exterior, cooktop, tiles, and cabinets.",
        fullDesc: "Eliminate stubborn grease, oil grime, and food residue. We detail your cabinets, backsplash tiles, stovetop, countertops, sink, and exterior appliance surfaces.",
        includedTasks: [
          "Heavy-duty grease removal on chimneys, vents & tiles",
          "Inside & outside cabinet degreasing and wipe-down",
          "Stove burner & countertop scrubbing & polishing",
          "Appliance exterior sanitization (refrigerator, microwave)",
          "Sink descaling, drain flush & tile grouting scrub"
        ],
        idealFor: "Heavy-cooking households, pre-festival prep, hygiene resets.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        ctaText: "Book Kitchen Clean"
      },
      {
        id: "bathroom-deep-cleaning",
        title: "Bathroom Deep Cleaning",
        shortDesc: "Intensive descaling, grout whitening, mirror shining, and disinfection.",
        fullDesc: "Hard water stains, soap scum, and mold don't stand a chance. We restore the sparkling freshness of your tiles, sanitaryware, glass enclosures, and chrome fixtures.",
        includedTasks: [
          "Hard water stain removal on wall tiles & shower glass",
          "WC, bidet & washbasin thorough descaling and sanitation",
          "Chrome taps, showerheads & drain buffing",
          "Grout scrubbing and mold/mildew eradication",
          "Mirror polishing and exhaust vent dust elimination"
        ],
        idealFor: "Limescale buildup, rental handovers, periodic hygiene maintenance.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        ctaText: "Book Bathroom Clean"
      },
      {
        id: "bedroom-living-cleaning",
        title: "Bedroom & Living Area Cleaning",
        shortDesc: "Dust mite eradication, mattress vacuuming, furniture detailing, and cobweb removal.",
        fullDesc: "A healthy resting environment matters. We detail wardrobes, dust delicate artifacts, sanitize switch plates, vacuum mattresses, and refresh living room seating.",
        includedTasks: [
          "Deep mattress & sofa HEPA vacuuming",
          "Wardrobe exterior detailing and glass door polishing",
          "Curtain dust extraction and blind wiping",
          "Ceiling corner cobweb eradication & light fixture dusting",
          "Under-bed and behind-furniture dust extraction"
        ],
        idealFor: "Allergy sufferers, seasonal dust reduction, comfortable living.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        ctaText: "Book Room Detailing"
      },
      {
        id: "move-in-out-cleaning",
        title: "Move-In & Move-Out Cleaning",
        shortDesc: "Flawless turnover cleaning for tenants, landlords, and new homeowners.",
        fullDesc: "Ensure you get 100% of your deposit back or step into a pristine, welcoming sanctuary before unpacking your boxes into your new residence.",
        includedTasks: [
          "Inside-all-cabinets, closets & drawer vacuuming & wipe",
          "Complete kitchen & bathroom reset and disinfection",
          "Baseboards, window sills, switchboards & light fixtures",
          "Floor scrubbing and buffing across all empty spaces",
          "Trash removal and ready-to-inhabit inspection"
        ],
        idealFor: "Tenants vacating, property managers, new homebuyers.",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
        ctaText: "Book Turnover Clean"
      },
      {
        id: "office-commercial-cleaning",
        title: "Office & Commercial Cleaning",
        shortDesc: "Professional workplace sanitation for productivity, safety, and client impressions.",
        fullDesc: "From conference rooms and workstations to pantry areas and executive suites, we provide reliable commercial cleaning tailored around your business hours.",
        includedTasks: [
          "Workstation desk, keyboard & phone antimicrobial wipedown",
          "Conference room sanitization and whiteboard detailing",
          "Breakroom pantry degreasing, microwave & coffee bar care",
          "Commercial carpet vacuuming and hard floor buffing",
          "Daily or weekly trash handling & restroom hygiene cycles"
        ],
        idealFor: "Tech hubs, corporate offices, clinics, retail storefronts.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        ctaText: "Book Office Clean"
      },
      {
        id: "custom-cleaning-packages",
        title: "Custom Cleaning Packages",
        shortDesc: "Tailored schedules and task lists designed specifically for your unique property.",
        fullDesc: "Have specific requests such as balcony jet-washing, post-party cleanups, or antique furniture care? Tell us your requirements and we'll craft an exact bespoke quote.",
        includedTasks: [
          "Flexible task checklist curated to your priority areas",
          "Selection of specialized eco-conscious or heavy-duty solutions",
          "Flexible scheduling including early mornings or weekends",
          "Dedicated supervisor quality check and walkthrough"
        ],
        idealFor: "Villas, multi-level homes, unique architectural layouts.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
        ctaText: "Request Custom Quote"
      }
    ]
  },
  {
    id: "packing-moving",
    title: "Packing & Moving Services",
    slug: "packing-moving",
    tagline: "Stress-free, organized, and careful relocation for home and work.",
    description:
      "Relocating shouldn't be chaotic. Daddy Associates delivers systematic packing, protective cushioning, secure handling, and organized transition support.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    badge: "Careful & Efficient",
    services: [
      {
        id: "home-shifting",
        title: "Home Shifting",
        shortDesc: "End-to-end household relocation managed with extreme care and organization.",
        fullDesc: "From your kitchen glassware to your bedroom wardrobes, we manage the entire household relocation workflow smoothly so your family can settle in effortlessly.",
        includedTasks: [
          "Room-by-room labeled boxing and inventory checklist",
          "Cushioning of fragile chinaware, artworks & electronics",
          "Careful loading and unloading coordination",
          "Furniture placement inside designated rooms at destination",
          "Debris and empty carton disposal assistance"
        ],
        idealFor: "Apartments, townhouses, standalone residences.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Home Shift"
      },
      {
        id: "office-relocation",
        title: "Office Relocation",
        shortDesc: "Minimizing business downtime with planned workstation and file transfers.",
        fullDesc: "We coordinate commercial moves during off-hours or weekends to ensure your staff faces zero interruption to their operational schedules.",
        includedTasks: [
          "Workstation system labeling and cabling packing",
          "Secure document, archive, and record transport handling",
          "Office desk, modular divider & seating relocation",
          "Server room peripheral handling and secure wrapping",
          "Reassembly and executive room arrangement"
        ],
        idealFor: "Growing businesses, branch transitions, law & tech firms.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Office Relocation"
      },
      {
        id: "packing-unpacking",
        title: "Packing & Unpacking Services",
        shortDesc: "High-grade corrugated boxes, bubble wrap, corner guards, and labeled unpack.",
        fullDesc: "Hate packing? Let our trained packaging experts do the heavy lifting. We wrap every plate, fold garments, wrap stemware, and even unpack everything at your new spot.",
        includedTasks: [
          "Supply of high-strength corrugated boxes & bubble wrap",
          "Multi-layer stretch film wrap for upholstered sofas",
          "Color-coded room stickers and comprehensive item lists",
          "Dedicated wardrobe boxes for hanger-ready apparel",
          "Unpacking and placement on shelves/counters"
        ],
        idealFor: "Busy professionals, seniors, large households.",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Packing Service"
      },
      {
        id: "furniture-handling",
        title: "Furniture Handling & Disassembly",
        shortDesc: "Careful dismantling, protective wrapping, and reassembly of major furniture.",
        fullDesc: "Large dining tables, beds, modular wardrobes, and shelving units are dismantled using proper tools, padded with quilted blankets, and reassembled accurately.",
        includedTasks: [
          "Bed frame disassembly and hardware bag tagging",
          "Padded blanket and foam corner wrap on wooden surfaces",
          "Glass tabletop secure timber-cushion wrapping",
          "Careful navigation through narrow hallways & staircases",
          "Precision reassembly and leveling at destination"
        ],
        idealFor: "Heavy solid wood, modular furniture, king-size beds.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Furniture Care"
      },
      {
        id: "loading-unloading",
        title: "Loading & Unloading Support",
        shortDesc: "Physical stamina meets disciplined stacking techniques to eliminate transit damage.",
        fullDesc: "Heavy lifting executed safely. Our experienced moving crews use dollies, straps, and protective ramps to ensure neither your items nor doorframes get dinged.",
        includedTasks: [
          "Heavy appliance lifting (washers, refrigerators, safes)",
          "Optimal weight distribution and secure tie-downs",
          "Door jamb and floor surface protection runners",
          "Staircase and elevator transit coordination",
          "Careful room-allocated unloading"
        ],
        idealFor: "Self-movers needing muscle, container loading, pod transfers.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Loading Crew"
      },
      {
        id: "moving-day-coordination",
        title: "Moving-Day Coordination",
        shortDesc: "A dedicated point-of-contact supervising every detail from start to finish.",
        fullDesc: "No confusion, no stress. A Daddy Associates move coordinator stays on-site, overseeing the timeline, managing building elevator permissions, and ensuring punctuality.",
        includedTasks: [
          "Advance coordination with building management and HOA",
          "Elevator booking and parking clearance planning",
          "Real-time schedule tracking and milestone updates",
          "Damage-prevention walkthrough inspection",
          "Final sign-off verification"
        ],
        idealFor: "High-rise apartments, complex community rules, tight deadlines.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Move Coordination"
      },
      {
        id: "custom-moving-packages",
        title: "Customized Moving Packages",
        shortDesc: "Bespoke relocation services built to match your specific timeline and volume.",
        fullDesc: "Whether you just need a few bulky items moved or a multi-stage villa relocation with temporary hold, our team can formulate a tailored logistical solution.",
        includedTasks: [
          "Custom inventory assessment and flexible scheduling",
          "Mix-and-match packing supplies and crew sizes",
          "Split-delivery or staggered drop-off coordination",
          "Transparent quotation tailored to your exact scope"
        ],
        idealFor: "Studio apartments, partial relocations, custom timing.",
        image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80",
        ctaText: "Request Custom Move Quote"
      }
    ]
  },
  {
    id: "event-planning",
    title: "Event Planning & Management",
    slug: "event-planning",
    tagline: "Flawless celebrations, magical atmospheres, and unforgettable memories.",
    description:
      "From intimate milestone birthdays to elegant weddings and high-profile corporate galas, Daddy Associates turns your vision into a seamlessly orchestrated experience.",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    badge: "Creative & Memorable",
    services: [
      {
        id: "birthday-parties",
        title: "Birthday Parties",
        shortDesc: "Vibrant theme decor, entertainment, and turnkey celebration coordination.",
        fullDesc: "Whether celebrating a milestone 1st birthday, a Sweet 16, or a 50th jubilee, we craft immersive themes, custom backdrops, balloon installations, and coordinated entertainment.",
        includedTasks: [
          "Custom thematic decor, balloon arches & backdrop styling",
          "Cake table presentation & curated dessert displays",
          "Audio-visual setup, lighting & party music coordination",
          "Vendor management (entertainers, photographers, caterers)",
          "On-site host coordination and schedule timing"
        ],
        idealFor: "Kids birthdays, milestone adult parties, surprise bashes.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        ctaText: "Plan Birthday Event"
      },
      {
        id: "engagements-weddings",
        title: "Engagements & Weddings",
        shortDesc: "Romantic design, elegant floral aesthetics, and seamless day-of coordination.",
        fullDesc: "Your dream celebration handled with heart and elegance. We oversee design conceptualization, floral arrangements, staging, welcoming tables, and guest itinerary coordination.",
        includedTasks: [
          "Bespoke floral styling, arches & entrance installations",
          "Stage, aisle, and bridal suite aesthetic layout",
          "Day-of run of show supervision and family liaison",
          "Reception seating, place card & menu aesthetic direction",
          "Seamless timeline management from first dance to farewell"
        ],
        idealFor: "Intimate weddings, engagement ceremonies, anniversary renewals.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        ctaText: "Plan Wedding Event"
      },
      {
        id: "corporate-events",
        title: "Corporate Events & Seminars",
        shortDesc: "Polished brand showcases, executive dinners, product launches, and gala nights.",
        fullDesc: "Reflect your brand's prestige. We orchestrate corporate dinners, annual celebrations, team retreats, and conference setups with punctuality and technological finesse.",
        includedTasks: [
          "Brand-aligned stage backdrop & signage printing/installation",
          "Audio, mic, projector & keynote AV staging",
          "VIP reception, check-in registration & guest badges",
          "Catering liaison and dinner banquet timing",
          "Professional post-event teardown and venue handover"
        ],
        idealFor: "Annual corporate gatherings, product launches, award banquets.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        ctaText: "Plan Corporate Event"
      },
      {
        id: "private-celebrations",
        title: "Private Celebrations",
        shortDesc: "Baby showers, housewarmings, retirement dinners, and seasonal gatherings.",
        fullDesc: "Cherish the moments that matter without carrying the stress. We style cozy, memorable gatherings in your private residence, garden, or rooftop venue.",
        includedTasks: [
          "Atmospheric lighting (fairy lights, lanterns, spotlights)",
          "Table scaping, linen styling & customized place settings",
          "Welcome drink station & grazing board setup",
          "Playlist creation and sound atmosphere control",
          "Post-party tidy-up and decor removal"
        ],
        idealFor: "Baby showers, anniversaries, housewarmings, intimate reunions.",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
        ctaText: "Plan Private Party"
      },
      {
        id: "venue-decor-coordination",
        title: "Venue & Decoration Coordination",
        shortDesc: "Transforming empty halls into visual spectacles with lighting, drapes, and florals.",
        fullDesc: "Already have a venue? We step in to elevate the ambiance. From ceiling drapery and floral centerpieces to atmospheric uplighting and photobooths.",
        includedTasks: [
          "Venue liaison and spatial floorplan configuration",
          "Thematic color palette curation and linen selection",
          "Custom photo booth backdrops and branded props",
          "Ambient LED uplighting and intelligent mood lighting",
          "Floral centerpiece and entrance styling"
        ],
        idealFor: "Clients with booked venues needing creative decor execution.",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Venue Decor"
      },
      {
        id: "setup-and-breakdown",
        title: "Event Setup & Breakdown",
        shortDesc: "Punctual logistics, furniture placement, safety checks, and venue restoration.",
        fullDesc: "Eliminate the headache of morning-of setup and late-night strike. Our crew handles the heavy tables, staging, display assembly, and complete post-event clearing.",
        includedTasks: [
          "Table, chair, and banquet furniture arrangement",
          "Display stand, signage & banner rigging",
          "Cabling management and guest safety checks",
          "Careful post-event breakdown and packing of rentals",
          "Venue sweeping and restoration to original condition"
        ],
        idealFor: "Event hosts, venue managers, caterers needing logistic muscle.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
        ctaText: "Enquire Event Crew"
      },
      {
        id: "custom-event-packages",
        title: "Custom Event Packages",
        shortDesc: "Uniquely customized coordination matching your vision, style, and guest numbers.",
        fullDesc: "Every celebration is unique. Tell us your inspiration boards, guest list size, and wishlist, and we will formulate a personalized proposal with full transparency.",
        includedTasks: [
          "Complimentary vision discovery session",
          "Tailored vendor recommendations and cost estimates",
          "Custom 3D or visual floorplan suggestions",
          "Flexible on-site event coordinator availability"
        ],
        idealFor: "Festivals, community events, multi-day celebrations.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        ctaText: "Request Custom Event Quote"
      }
    ]
  }
];
