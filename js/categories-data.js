/**
 * CATEGORIES_DATA
 * Structured data for the 6 primary award categories & subcategories.
 */
const CATEGORIES_DATA = [
  {
    id: "travel-enablers",
    groupNumber: "01",
    groupName: "TRAVEL ENABLERS",
    summary: "Connecting journeys through infrastructure, mobility, transportation and airline excellence.",
    subcategories: [
      "Leading Airline – Domestic Low Cost",
      "Leading Airline – Domestic Full Service",
      "Leading Airline – International Low Cost",
      "Leading Airline – International Economy Class",
      "Leading Airline – International Business Class",
      "Leading Car Rental App",
      "Leading Cruise Liners"
    ],
    eligibility: "Open to registered airlines, fleet operators, cruise lines, car rental platforms, and transport enablers operating within India or carrying Indian passengers during the eligible period ().",
    evaluationCriteria: "Operational efficiency, fleet reliability, passenger safety records, digital booking integration, guest feedback, and innovation in route connectivity.",
    requirements: ["Company Registration Certificate", "Fleet/Route Network Overview", "Passenger Satisfaction Metrics", "Case Study Summary (max 1000 words)"]
  },
  {
    id: "hospitality",
    groupNumber: "02",
    groupName: "HOSPITALITY",
    summary: "Recognising hotels, resorts, and heritage stays delivering exceptional guest experiences.",
    subcategories: [
      "Leading Budget Hotel",
      "Leading 5 Star Hotel",
      "Leading Heritage Hotel"
    ],
    eligibility: "Open to licensed budget properties, luxury 5-star hotels, and certified heritage properties operational in India.",
    evaluationCriteria: "Guest satisfaction scores, architectural preservation (for heritage), service standards, eco-friendly practices, and culinary excellence.",
    requirements: ["Star / Heritage Accreditation", "Guest Review Summary", "Property Portfolio Showcase", "Sustainability & Community Initiatives"]
  },
  {
    id: "attractions-adventure",
    groupNumber: "03",
    groupName: "TOURIST ATTRACTION / ADVENTURE LOCATION ENABLERS",
    summary: "Celebrating destination creators, theme parks, tour operators, and adventure facilitators.",
    subcategories: [
      "Leading Theme Attraction Destination",
      "Leading Tour Operator – Domestic",
      "Leading Tour Operator – International"
    ],
    eligibility: "Open to theme parks, destination management companies, and licensed tour operators.",
    evaluationCriteria: "Visitor footfall, safety standards, unique itinerary design, guide training, and guest satisfaction.",
    requirements: ["Operating License / Safety Certification", "Annual Visitor Statistics", "Safety Protocol Document", "Tour Itinerary Deck"]
  },
  {
    id: "tour-operators-tech",
    groupNumber: "04",
    groupName: "TOUR OPERATORS / TRAVEL AGENTS / WEBSITES",
    summary: "Honouring online booking platforms, travel agencies, and digital aggregators.",
    subcategories: [
      "Leading Travel Booking Website / Application"
    ],
    eligibility: "Open to digital travel portals, aggregators, mobile applications, and booking platforms serving Indian travellers.",
    evaluationCriteria: "User interface design, booking conversion rates, customer support resolution, app performance, and tech innovation.",
    requirements: ["App/Website Analytics Overview", "Customer Service SLA Summary", "Product Feature Walkthrough"]
  },
  {
    id: "marketing-excellence",
    groupNumber: "05",
    groupName: "MARKETING EXCELLENCE",
    summary: "Recognising impactful campaigns that inspired travel and destination discovery.",
    subcategories: [
      "Marketing Excellence by International Tourism Board",
      "Marketing Excellence by Domestic Tourism Board",
      "Marketing Excellence by Tour Operator",
      "Marketing Excellence by Airlines"
    ],
    eligibility: "Open to tourism boards, airlines, and tour operators running campaigns targeted at or within India.",
    evaluationCriteria: "Creative strategy, campaign reach, return on ad spend (ROAS), engagement metrics, and actual impact on visitor numbers.",
    requirements: ["Campaign Deck / Creative Samples", "Media Reach & Engagement Report", "Measurable Business Impact Data"]
  },
  {
    id: "editors-special",
    groupNumber: "06",
    groupName: "EDITOR’S & SPECIAL RECOGNITION",
    summary: "Honouring regional connectivity, infrastructure milestones, creators, and visionary leaders.",
    subcategories: [
      "Leading Airline – UDAN",
      "Leading International Airport",
      "Leading Domestic Airport – Metro",
      "Leading Domestic Airport – Tier 2",
      "Upcoming Destination",
      "Travel Influencer of the Year",
      "Lifetime Achievement Award"
    ],
    eligibility: "Open to airports, regional airlines under UDAN scheme, emerging tourism destinations, digital creators, and industry veterans.",
    evaluationCriteria: "Infrastructure impact, regional development, engagement metrics (for influencers), and lifelong contribution to Indian travel.",
    requirements: ["Profile / Infrastructure Overview", "UDAN Route Coverage Metrics", "Content Portfolio & Engagement Proof"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CATEGORIES_DATA;
}
