/**
 * BRAND_CONFIG & PROGRAMME CONFIGURATION
 * Separates brand values from legal copy & content architecture.
 */
const BRAND_CONFIG = {
  awardName: "Travel and Tourism Excellence Awards",
  presentingPartner: "Force Motors",
  awardOwner: "Force Motors",
  awardsManagement: "Force Motors & Appointed Secretariat ()",
  officialHashtag: "#TravelExcellenceAwards",
  edition: "2026",
  
  dates: {
    eligibilityPresenceDate: "()",
    eligibleProjectStart: "()",
    eligibleProjectEnd: "()",
    applicationDeadline: "()",
    screeningPeriod: "()",
    juryEvaluation: "()",
    awardsNight: "()"
  },

  partners: {
    presenting: "Force Motors",
    poweredBy: "()",
    associatePartner: "()",
    hospitalityPartner: "()",
    travelPartner: "()",
    mediaPartner: "()"
  },

  contact: {
    general: "()",
    registration: "()",
    partnerships: "()",
    media: "()"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BRAND_CONFIG;
}
