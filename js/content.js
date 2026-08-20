/*
==========================================================================
IMMUTABLE CONTENT LAYER - APPROVED COPY
==========================================================================
IMPORTANT:
This content is client-approved and content-locked.
Do not automatically rewrite, summarize, or paraphrase.
==========================================================================
*/

const CONTENT = {
  definitions: [
    { term: "Awards", definition: "Times Travel and Tourism Awards presented by Force Motors." },
    { term: "Owner of the Awards", definition: "Force Motors" },
    { term: "Awards Management", definition: "Force Motors and designated event management secretariats ()" },
    { term: "Applicant / Nominee", definition: "Any company / organisation / initiative submitting a entry in accordance with these rules." },
    { term: "Screening Jury", definition: "An independent expert panel constituted by Awards Management to inspect entries for eligibility and completeness." },
    { term: "Final Jury", definition: "An independent grand jury panel appointed to evaluate shortlisted nominees and select final winners." },
    { term: "Rules", definition: "The official terms, eligibility criteria, and governance guidelines governing participation." }
  ],

  categories: [
    {
      id: "travel-enablers",
      number: "01",
      name: "Travel Enablers",
      awards: [
        {
          title: "Domestic Airline",
          eligibility: [
            "Open to low-cost and full-service carriers operating scheduled domestic routes in India.",
            "Must comply with Directorate General of Civil Aviation (DGCA) regulations."
          ]
        },
        {
          title: "Car Rental App",
          eligibility: [
            "Open to mobile applications and tech platforms offering self-drive or chauffeur-driven car rentals in India."
          ]
        },
        {
          title: "Cruise Liners",
          eligibility: [
            "Open to domestic and ocean cruise liners serving Indian ports."
          ]
        }
      ]
    },
    {
      id: "hospitality",
      number: "02",
      name: "Hospitality",
      awards: [
        {
          title: "Budget Hotel",
          eligibility: [
            "Open to budget properties, chains, and hotel aggregators operating in India."
          ]
        },
        {
          title: "Five-Star Hotel",
          eligibility: [
            "Open to luxury 5-star hotels and resort properties operating in India.",
            "Must hold valid star accreditation from statutory authorities."
          ]
        },
        {
          title: "Heritage Hotel",
          eligibility: [
            "Open to certified heritage hotel properties preserving historic Indian architecture."
          ]
        },
        {
          title: "Home Stays",
          eligibility: [
            "Open to accredited homestays, bed & breakfast properties, and experiential accommodation facilitators across India."
          ]
        }
      ]
    },
    {
      id: "tourism-adventure",
      number: "03",
      name: "Tourism & Adventure",
      awards: [
        {
          title: "Theme Attraction Destination",
          eligibility: [
            "Open to theme parks, amusement destinations, and experiential attractions operational in India."
          ]
        },
        {
          title: "Domestic Tour Operator",
          eligibility: [
            "Open to registered tour operators organizing domestic travel itineraries across India."
          ]
        },
        {
          title: "International Tour Operator",
          eligibility: [
            "Open to operators facilitating outbound international travel for Indian citizens."
          ]
        }
      ]
    },
    {
      id: "marketing-excellence",
      number: "04",
      name: "Marketing Excellence",
      awards: [
        {
          title: "International Tourism Board",
          eligibility: [
            "Open to official international tourism boards promoting destination travel within the Indian market."
          ]
        },
        {
          title: "Domestic Tourism Board",
          eligibility: [
            "Open to Indian state tourism boards and regional destination marketing organizations."
          ]
        },
        {
          title: "Tour Operator",
          eligibility: [
            "Open to tour operators running promotional marketing campaigns targeted at Indian travellers."
          ]
        },
        {
          title: "Airline",
          eligibility: [
            "Open to domestic and international airlines operating in India with active marketing campaigns."
          ]
        }
      ]
    },
    {
      id: "travel-tech",
      number: "05",
      name: "Travel Tech",
      awards: [
        {
          title: "Travel Booking Website",
          eligibility: [
            "Open to online travel agencies (OTAs), web booking aggregators, and digital travel portals."
          ]
        },
        {
          title: "Travel Application",
          eligibility: [
            "Open to mobile applications enabling itinerary management, booking, or travel services."
          ]
        },
        {
          title: "Best Startup in Travel Space",
          eligibility: [
            "Open to innovative travel startups registered in India operating for under 7 years."
          ]
        },
        {
          title: "Best Pilgrimage Operators",
          eligibility: [
            "Open to specialized tour operators and facilitators organizing religious and pilgrimage circuits across India."
          ]
        },
        {
          title: "Best Use of Sustainability",
          eligibility: [
            "Open to travel organisations, hotels, or operators demonstrating outstanding eco-friendly and sustainable practices."
          ]
        },
        {
          title: "Safety Excellence Award",
          eligibility: [
            "Open to transport operators, fleet managers, or destinations implementing exceptional safety and security benchmarks."
          ]
        }
      ]
    },
    {
      id: "special-categories",
      number: "06",
      name: "Special Categories",
      awards: [
        {
          title: "Editor's Choice: Airports, Upcoming Destination",
          eligibility: [
            "Editorially nominated award recognizing outstanding airport infrastructure and emerging destination milestones."
          ]
        },
        {
          title: "Lifetime Achievement Award",
          eligibility: [
            "Honorary award celebrating individuals who have made lifelong contributions to the Indian travel industry."
          ]
        },
        {
          title: "Rising Star Operator",
          eligibility: [
            "Open to promising new tour or mobility operators demonstrating rapid growth and operational excellence."
          ]
        },
        {
          title: "Force Traveller Loyalty Award",
          eligibility: [
            "Special recognition for long-standing fleet partners and operators exemplifying commitment to passenger mobility."
          ]
        },
        {
          title: "Best Rural Connectivity Operator",
          eligibility: [
            "Open to fleet operators and transport enablers expanding vital last-mile mobility to remote and rural regions in India."
          ]
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTENT;
}
