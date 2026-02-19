/**
 * Stripe Products and Pricing Configuration
 * This file defines all donation products and their pricing
 * 
 * Note: These are configured for test mode. When you add your Stripe keys,
 * you'll need to create corresponding products in your Stripe Dashboard
 * and update the priceIds below.
 */

export const DONATION_PRODUCTS = {
  // Specific Program Donations
  health: {
    name: "Health Program",
    description: "Support our comprehensive healthcare services including HIV testing, treatment, and prevention.",
    priceId: process.env.STRIPE_PRICE_HEALTH || "price_health_placeholder",
    icon: "Heart",
  },
  education: {
    name: "Education Program",
    description: "Empower youth through quality education and literacy programs.",
    priceId: process.env.STRIPE_PRICE_EDUCATION || "price_education_placeholder",
    icon: "BookOpen",
  },
  livelihood: {
    name: "Livelihood Program",
    description: "Support economic empowerment through skills training and business development.",
    priceId: process.env.STRIPE_PRICE_LIVELIHOOD || "price_livelihood_placeholder",
    icon: "Briefcase",
  },
  communityEmpowerment: {
    name: "Community Empowerment",
    description: "Build strong communities through collaborative programs and local leadership.",
    priceId: process.env.STRIPE_PRICE_COMMUNITY || "price_community_placeholder",
    icon: "Users",
  },
  youthEmpowerment: {
    name: "Youth Empowerment",
    description: "Inspire the next generation with opportunities, mentorship, and skills development.",
    priceId: process.env.STRIPE_PRICE_YOUTH || "price_youth_placeholder",
    icon: "Lightbulb",
  },

  // General Donation
  general: {
    name: "General Donation",
    description: "Support our most pressing needs and help us create maximum impact.",
    priceId: process.env.STRIPE_PRICE_GENERAL || "price_general_placeholder",
    icon: "Heart",
  },

  // Child Sponsorship
  childSponsorship: {
    name: "Child Sponsorship",
    description: "Sponsor a child's education and development for one year.",
    priceId: process.env.STRIPE_PRICE_CHILD_SPONSORSHIP || "price_child_sponsorship_placeholder",
    icon: "Users",
  },
};

export const DONATION_AMOUNTS = {
  oneTime: [25, 50, 100, 250, 500, 1000],
  recurring: [10, 25, 50, 100, 250],
};

export const RECURRING_INTERVALS = {
  monthly: "month",
  quarterly: "3 months",
  annually: "year",
} as const;

/**
 * Get product configuration by type
 */
export function getDonationProduct(type: keyof typeof DONATION_PRODUCTS) {
  return DONATION_PRODUCTS[type];
}

/**
 * Validate donation amount
 */
export function isValidDonationAmount(amount: number, isRecurring: boolean): boolean {
  if (amount < 1) return false;
  
  const validAmounts = isRecurring ? DONATION_AMOUNTS.recurring : DONATION_AMOUNTS.oneTime;
  return validAmounts.includes(amount) || amount > Math.max(...validAmounts);
}
