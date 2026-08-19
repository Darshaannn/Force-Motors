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
    { term: "Awards", definition: "Times Travel Awards presented by Force Motors." },
    { term: "Owner of the Awards", definition: "Bennett Coleman & Co. Ltd. (BCCL)" },
    { term: "Awards Management", definition: "BCCL and designated event management secretariats ()" },
    { term: "Applicant / Nominee", definition: "Any company / organisation / initiative submitting a entry in accordance with these rules." },
    { term: "Screening Jury", definition: "An independent expert panel constituted by Awards Management to inspect entries for eligibility and completeness." },
    { term: "Final Jury", definition: "An independent grand jury panel appointed to evaluate shortlisted nominees and select final winners." },
    { term: "Rules", definition: "The official terms, eligibility criteria, and governance guidelines governing participation." }
  ],

  categories: [
    {
      id: "tourist-attractions",
      number: "01",
      name: "Tourist Attraction / Adventure Location Enablers",
      awards: [
        {
          title: "Leading Theme Attraction Destination",
          eligibility: [
            "Open to theme parks, amusement destinations, and experiential attractions operational in India.",
            "Must have completed a minimum of two years of commercial operations as of ()",
            "Must hold valid local municipal, safety, and operational clearances."
          ]
        },
        {
          title: "Leading Tour Operator – Domestic",
          eligibility: [
            "Open to registered tour operators organizing domestic travel itineraries across India.",
            "Must have a registered presence and active tour operations in India for at least two years as of ()",
            "Must submit verifiable passenger volume and safety compliance metrics."
          ]
        },
        {
          title: "Leading Tour Operator – International",
          eligibility: [
            "Open to operators facilitating outbound international travel for Indian citizens.",
            "Must be registered in India with at least two years of continuous operations as of ()"
          ]
        }
      ]
    },
    {
      id: "marketing-excellence",
      number: "02",
      name: "Marketing Excellence",
      awards: [
        {
          title: "Marketing Excellence by International Tourism Board",
          eligibility: [
            "Open to official international tourism boards promoting destination travel within the Indian market.",
            "Campaign must have been executed during the eligible period ()"
          ]
        },
        {
          title: "Marketing Excellence by Domestic Tourism Board",
          eligibility: [
            "Open to Indian state tourism boards and regional destination marketing organizations.",
            "Initiatives must demonstrate measurable impact on visitor footfall and campaign engagement."
          ]
        },
        {
          title: "Marketing Excellence by Tour Operator",
          eligibility: [
            "Open to tour operators running promotional campaigns targeted at Indian travellers.",
            "Campaign must have been launched during the eligible period ()"
          ]
        },
        {
          title: "Marketing Excellence by Airlines",
          eligibility: [
            "Open to domestic and international airlines operating in India with marketing campaigns executed during ()"
          ]
        }
      ]
    },
    {
      id: "hospitality",
      number: "03",
      name: "Hospitality",
      awards: [
        {
          title: "Leading Budget Hotel",
          eligibility: [
            "Open to budget properties, chains, and hotel aggregators operating in India.",
            "Must have completed minimum operating requirements during ()"
          ]
        },
        {
          title: "Leading 5 Star Hotel",
          eligibility: [
            "Open to luxury 5-star hotels and luxury resort properties operating in India.",
            "Must hold valid star accreditation from Ministry of Tourism or relevant statutory authority."
          ]
        },
        {
          title: "Leading Heritage Hotel",
          eligibility: [
            "Open to certified heritage hotel properties preserving historic Indian architecture."
          ]
        }
      ]
    },
    {
      id: "travel-enablers",
      number: "04",
      name: "Travel Enablers",
      awards: [
        {
          title: "Leading Airline – Domestic Low Cost",
          eligibility: [
            "Open to low-cost carriers operating scheduled domestic routes in India.",
            "Must comply with Directorate General of Civil Aviation (DGCA) regulations."
          ]
        },
        {
          title: "Leading Airline – Domestic Full Service",
          eligibility: [
            "Open to full-service carriers operating scheduled domestic flights within India."
          ]
        },
        {
          title: "Leading Airline – International Low Cost",
          eligibility: [
            "Open to international low-cost carriers operating flights to/from Indian airports."
          ]
        },
        {
          title: "Leading Airline – International Economy Class",
          eligibility: [
            "Open to international airlines evaluating economy class passenger experience and service."
          ]
        },
        {
          title: "Leading Airline – International Business Class",
          eligibility: [
            "Open to international airlines offering business class services on Indian routes."
          ]
        },
        {
          title: "Leading Car Rental App",
          eligibility: [
            "Open to mobile applications and tech platforms offering self-drive or chauffeur-driven car rentals in India."
          ]
        },
        {
          title: "Leading Cruise Liners",
          eligibility: [
            "Open to domestic and ocean cruise liners serving Indian ports."
          ]
        }
      ]
    },
    {
      id: "travel-agents-operators",
      number: "05",
      name: "Travel Agents & Operators",
      awards: [
        {
          title: "Leading Travel Booking Website / Application",
          eligibility: [
            "Open to online travel agencies (OTAs), booking applications, and digital platforms in India.",
            "Must enable direct customer bookings without unauthorized third-party redirections."
          ]
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTENT;
}
