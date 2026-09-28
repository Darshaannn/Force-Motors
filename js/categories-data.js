/**
 * CATEGORIES_DATA
 * Central canonical data source for the 6 main award headings and 23 sub-awards.
 */
const CATEGORIES_DATA = [
  {
    id: "travel-enablers",
    groupNumber: "01",
    groupName: "Travel Enablers",
    summary: "Recognising operators driving seamless mobility, pilgrimage journeys, and fleet excellence.",
    subcategories: [
      "Best Pilgrimage Operator",
      "Best Fleet Operator",
      "Best Travel Operator of the Year"
    ],
    eligibility: "Open to registered pilgrimage operators, fleet operators, and travel operators operating within India.",
    evaluationCriteria: "Operational efficiency, fleet reliability, passenger safety records, digital booking integration, guest feedback, and innovation in route connectivity.",
    requirements: ["Company Registration Certificate", "Fleet/Route Network Overview", "Passenger Satisfaction Metrics", "Case Study Summary (max 1000 words)"]
  },
  {
    id: "hospitality",
    groupNumber: "02",
    groupName: "Hospitality",
    summary: "Recognising hotels, resorts, heritage properties, and homestays delivering exceptional guest experiences.",
    subcategories: [
      "Best Budget Hotel",
      "Best Five-Star Hotel",
      "Best Heritage Hotel",
      "Best Home Stay"
    ],
    eligibility: "Open to licensed budget properties, Five-Star hotels, heritage properties, and homestays operational in India.",
    evaluationCriteria: "Guest satisfaction scores, architectural preservation (for heritage), service standards, eco-friendly practices, and culinary excellence.",
    requirements: ["Star / Heritage / Homestay Accreditation", "Guest Review Summary", "Property Portfolio Showcase", "Sustainability & Community Initiatives"]
  },
  {
    id: "tourism-adventure",
    groupNumber: "03",
    groupName: "Tourism & Adventure",
    summary: "Celebrating destination creators, attraction destinations, and tour operators across India and abroad.",
    subcategories: [
      "Best Theme Attraction Destination",
      "Best Domestic Tour Operator*",
      "Best International Tour Operator*",
      "Best Self Drive Tour Operator"
    ],
    eligibility: "Open to theme parks, destination creators, domestic, international, and self-drive tour operators.",
    evaluationCriteria: "Visitor footfall, safety standards, unique itinerary design, guide training, and guest satisfaction.",
    requirements: ["Operating License / Safety Certification", "Annual Visitor Statistics", "Safety Protocol Document", "Tour Itinerary Deck"]
  },
  {
    id: "marketing-excellence",
    groupNumber: "04",
    groupName: "Marketing Excellence",
    summary: "Recognising impactful tourism campaigns, tour operators, and rural connectivity initiatives.",
    subcategories: [
      "Best Domestic Tourism Board",
      "Best Tour Operator",
      "Best Rural Connectivity Operator"
    ],
    eligibility: "Open to domestic tourism boards, tour operators, and rural connectivity operators promoting travel within India.",
    evaluationCriteria: "Creative strategy, campaign reach, return on ad spend (ROAS), engagement metrics, and actual impact on visitor numbers.",
    requirements: ["Campaign Deck / Creative Samples", "Media Reach & Engagement Report", "Measurable Business Impact Data"]
  },
  {
    id: "travel-tech",
    groupNumber: "05",
    groupName: "Travel Tech",
    summary: "Honouring travel booking platforms, startups, sustainable operators, and digital innovators.",
    subcategories: [
      "Best Travel Booking Website",
      "Best Startup in Travel Space",
      "Best Use of Sustainability by Travel Operator",
      "Digital Innovation Award"
    ],
    eligibility: "Open to travel booking portals, tech startups, travel operators implementing sustainability, and digital innovators.",
    evaluationCriteria: "User interface design, booking conversion rates, tech innovation, sustainability practices, and digital transformation.",
    requirements: ["App/Website Analytics Overview", "Customer Service SLA Summary", "Product Feature Walkthrough", "Sustainability / Safety Documentation"]
  },
  {
    id: "special-categories",
    groupNumber: "06",
    groupName: "Special Categories",
    summary: "Honouring visionary industry leaders, rising star operators, brand loyalty, and green mobility pioneers.",
    subcategories: [
      "Lifetime Achievement Award",
      "Rising Star Operator",
      "Force Traveler Loyalty Award",
      "Green Mobility Award"
    ],
    eligibility: "Open to industry veterans, emerging tour operators, Force Traveller loyalty partners, and green mobility advocates.",
    evaluationCriteria: "Industry impact, sustainable mobility, loyalty excellence, and lifelong contribution to Indian travel.",
    requirements: ["Profile / Infrastructure Overview", "Impact Proof & Case Study", "Fleet / Sustainability Overview"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CATEGORIES_DATA;
}

