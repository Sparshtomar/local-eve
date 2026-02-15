/**
 * Mock Data for Development
 * Contains sample data for events, sponsors, and organisers
 */

export type UserRole = "sponsor" | "organiser";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  company?: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organiserId: string;
  organiserName: string;
  category: string;
  sponsorshipTiers: SponsorshipTier[];
  imageUrl?: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  available: number;
}

export interface Sponsor {
  id: string;
  name: string;
  company: string;
  email: string;
  logo?: string;
  industry: string;
  budget: string;
}

// Mock Organisers
export const mockOrganisers: User[] = [
  {
    id: "org-1",
    email: "john@techevents.com",
    name: "John Smith",
    role: "organiser",
    company: "Tech Events Inc",
    createdAt: "2024-01-15",
  },
  {
    id: "org-2",
    email: "sarah@musicfest.com",
    name: "Sarah Johnson",
    role: "organiser",
    company: "Music Festival Co",
    createdAt: "2024-02-20",
  },
];

// Mock Sponsors
export const mockSponsors: Sponsor[] = [
  {
    id: "sponsor-1",
    name: "Mike Chen",
    company: "TechCorp Solutions",
    email: "mike@techcorp.com",
    industry: "Technology",
    budget: "$10,000 - $50,000",
  },
  {
    id: "sponsor-2",
    name: "Emily Davis",
    company: "GreenLife Foods",
    email: "emily@greenlife.com",
    industry: "Food & Beverage",
    budget: "$5,000 - $20,000",
  },
  {
    id: "sponsor-3",
    name: "Alex Rivera",
    company: "SportMax Athletics",
    email: "alex@sportmax.com",
    industry: "Sports & Fitness",
    budget: "$20,000 - $100,000",
  },
  {
    id: "sponsor-4",
    name: "Lisa Wang",
    company: "FinanceHub",
    email: "lisa@financehub.com",
    industry: "Finance",
    budget: "$50,000+",
  },
];

// Mock Events
export const mockEvents: Event[] = [
  {
    id: "event-1",
    title: "Tech Innovation Summit 2026",
    description:
      "Join us for the biggest tech conference of the year featuring keynotes from industry leaders, hands-on workshops, and networking opportunities.",
    date: "2026-04-15",
    location: "San Francisco, CA",
    organiserId: "org-1",
    organiserName: "Tech Events Inc",
    category: "Technology",
    sponsorshipTiers: [
      {
        id: "tier-1",
        name: "Platinum",
        price: 50000,
        benefits: [
          "Main stage logo",
          "VIP booth",
          "10 tickets",
          "Speaking slot",
        ],
        available: 2,
      },
      {
        id: "tier-2",
        name: "Gold",
        price: 25000,
        benefits: ["Stage banner", "Standard booth", "5 tickets"],
        available: 5,
      },
      {
        id: "tier-3",
        name: "Silver",
        price: 10000,
        benefits: ["Website logo", "2 tickets"],
        available: 10,
      },
    ],
  },
  {
    id: "event-2",
    title: "Summer Music Festival",
    description:
      "Three days of live music featuring top artists from around the world. Food, art, and unforgettable experiences await.",
    date: "2026-06-20",
    location: "Austin, TX",
    organiserId: "org-2",
    organiserName: "Music Festival Co",
    category: "Entertainment",
    sponsorshipTiers: [
      {
        id: "tier-1",
        name: "Headline Sponsor",
        price: 100000,
        benefits: ["Name in festival title", "Exclusive area", "50 VIP passes"],
        available: 1,
      },
      {
        id: "tier-2",
        name: "Stage Sponsor",
        price: 40000,
        benefits: ["Stage naming rights", "20 passes", "Brand activation"],
        available: 3,
      },
      {
        id: "tier-3",
        name: "Vendor Sponsor",
        price: 15000,
        benefits: ["Food court booth", "10 passes"],
        available: 8,
      },
    ],
  },
  {
    id: "event-3",
    title: "Startup Pitch Competition",
    description:
      "Watch emerging startups compete for funding and prizes. Network with investors and entrepreneurs.",
    date: "2026-03-10",
    location: "New York, NY",
    organiserId: "org-1",
    organiserName: "Tech Events Inc",
    category: "Business",
    sponsorshipTiers: [
      {
        id: "tier-1",
        name: "Lead Investor",
        price: 30000,
        benefits: ["Judge seat", "Logo on materials", "15 tickets"],
        available: 3,
      },
      {
        id: "tier-2",
        name: "Supporter",
        price: 10000,
        benefits: ["Networking access", "5 tickets"],
        available: 10,
      },
    ],
  },
  {
    id: "event-4",
    title: "Health & Wellness Expo",
    description:
      "Discover the latest in health, fitness, and wellness. Product demos, fitness classes, and expert panels.",
    date: "2026-05-05",
    location: "Los Angeles, CA",
    organiserId: "org-2",
    organiserName: "Music Festival Co",
    category: "Health",
    sponsorshipTiers: [
      {
        id: "tier-1",
        name: "Wellness Partner",
        price: 20000,
        benefits: ["Demo area", "Panel slot", "8 tickets"],
        available: 4,
      },
      {
        id: "tier-2",
        name: "Exhibitor",
        price: 5000,
        benefits: ["Booth space", "3 tickets"],
        available: 20,
      },
    ],
  },
];

// Current logged-in user state (mock)
export let currentUser: User | null = null;

export function setCurrentUser(user: User | null) {
  currentUser = user;
}

export function getCurrentUser(): User | null {
  return currentUser;
}
