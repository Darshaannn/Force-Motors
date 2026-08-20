/**
 * CATEGORIES_DATA
 * Central canonical data source for the 6 main award headings and 25 sub-awards.
 */
const CATEGORIES_DATA = [
  {
    id: "travel-enablers",
    groupNumber: "01",
    groupName: "Travel Enablers",
    summary: "Connecting journeys through infrastructure, mobility, transportation and airline excellence.",
    subcategories: [
      "Domestic Airline",
      "Car Rental App",
      "Cruise Liners"
    ],
    eligibility: "Open to registered airlines, car rental platforms, and cruise liners operating within India or carrying Indian passengers during the eligible period.",
    evaluationCriteria: "Operational efficiency, fleet reliability, passenger safety records, digital booking integration, guest feedback, and innovation in route connectivity.",
    requirements: ["Company Registration Certificate", "Fleet/Route Network Overview", "Passenger Satisfaction Metrics", "Case Study Summary (max 1000 words)"]
  },
  {
    id: "hospitality",
    groupNumber: "02",
    groupName: "Hospitality",
    summary: "Recognising hotels, resorts, and heritage stays delivering exceptional guest experiences.",
    subcategories: [
      "Budget Hotel",
      "Five-Star Hotel",
      "Heritage Hotel",
      "Home Stays"
    ],
    eligibility: "Open to licensed budget properties, Five-Star hotels, heritage properties, and homestays operational in India.",
    evaluationCriteria: "Guest satisfaction scores, architectural preservation (for heritage), service standards, eco-friendly practices, and culinary excellence.",
    requirements: ["Star / Heritage / Homestay Accreditation", "Guest Review Summary", "Property Portfolio Showcase", "Sustainability & Community Initiatives"]
  },
  {
    id: "tourism-adventure",
    groupNumber: "03",
    groupName: "Tourism & Adventure",
    summary: "Celebrating destination creators, theme parks, tour operators, and adventure facilitators.",
    subcategories: [
      "Theme Attraction Destination",
      "Domestic Tour Operator",
      "International Tour Operator"
    ],
    eligibility: "Open to theme parks, destination management companies, domestic and international tour operators.",
    evaluationCriteria: "Visitor footfall, safety standards, unique itinerary design, guide training, and guest satisfaction.",
    requirements: ["Operating License / Safety Certification", "Annual Visitor Statistics", "Safety Protocol Document", "Tour Itinerary Deck"]
  },
  {
    id: "marketing-excellence",
    groupNumber: "04",
    groupName: "Marketing Excellence",
    summary: "Recognising impactful campaigns that inspired travel and destination discovery.",
    subcategories: [
      "International Tourism Board",
      "Domestic Tourism Board",
      "Tour Operator",
      "Airline"
    ],
    eligibility: "Open to international and domestic tourism boards, tour operators, and airlines running marketing campaigns targeted at or within India.",
    evaluationCriteria: "Creative strategy, campaign reach, return on ad spend (ROAS), engagement metrics, and actual impact on visitor numbers.",
    requirements: ["Campaign Deck / Creative Samples", "Media Reach & Engagement Report", "Measurable Business Impact Data"]
  },
  {
    id: "travel-tech",
    groupNumber: "05",
    groupName: "Travel Tech",
    summary: "Honouring travel booking platforms, digital applications, pilgrimage operators, sustainability, and safety.",
    subcategories: [
      "Travel Booking Website",
      "Travel Application",
      "Best Startup in Travel Space",
      "Best Pilgrimage Operators",
      "Best Use of Sustainability",
      "Safety Excellence Award"
    ],
    eligibility: "Open to travel booking portals, applications, startups, pilgrimage operators, sustainability initiatives, and safety programs.",
    evaluationCriteria: "User interface design, booking conversion rates, customer support resolution, app performance, tech innovation, sustainability, and safety compliance.",
    requirements: ["App/Website Analytics Overview", "Customer Service SLA Summary", "Product Feature Walkthrough", "Sustainability / Safety Documentation"]
  },
  {
    id: "special-categories",
    groupNumber: "06",
    groupName: "Special Categories",
    summary: "Honouring regional connectivity, infrastructure milestones, visionary leaders, and special recognition.",
    subcategories: [
      "Editor's Choice: Airports, Upcoming Destination",
      "Lifetime Achievement Award",
      "Rising Star Operator",
      "Force Traveller Loyalty Award",
      "Best Rural Connectivity Operator"
    ],
    eligibility: "Open to airports, regional operators, emerging tourism destinations, industry veterans, and rural mobility enablers.",
    evaluationCriteria: "Infrastructure impact, regional development, engagement metrics, innovation, and lifelong contribution to Indian travel.",
    requirements: ["Profile / Infrastructure Overview", "Rural / Regional Route Metrics", "Portfolio & Impact Proof"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CATEGORIES_DATA;
}

