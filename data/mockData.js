// data/mockData.js

// Mock data for universes
export const universes = [
  {
    id: 1,
    name: "#music",
    souls: "18M Souls",
  },
  {
    id: 2,
    name: "#sports",
    souls: "12M Souls",
  },
  {
    id: 3,
    name: "#gaming",
    souls: "15M Souls",
  },
  {
    id: 4,
    name: "#education",
    souls: "9M Souls",
  },
  {
    id: 5,
    name: "#technology",
    souls: "11M Souls",
  },
];

// Mock data for posts
export const posts = [
  {
    id: 1,
    question: "What would you choose: a relationship full of adventures or a peaceful one?",
    date: "11/7/2025",
    likes: 120,
    comments: 45,
    selected: true,
  },
  {
    id: 2,
    question: "Is technology making our lives better or worse?",
    date: "10/15/2025",
    likes: 200,
    comments: 60,
    selected: true,
  },
  {
    id: 3,
    question: "What is your favorite way to unwind after a long day?",
    date: "9/30/2025",
    likes: 150,
    comments: 30,
    selected: false,
  },
  {
    id: 4,
    question: "Do you think space exploration is worth the cost?",
    date: "8/22/2025",
    likes: 180,
    comments: 50,
    selected: false,
  },
  {
    id: 5,
    question: "What book has had the most impact on your life?",
    date: "7/14/2025",
    likes: 130,
    comments: 40,
    selected: false,
  },
];

// Mock data for comments
export const comments = [
  {
    id: 1,
    user: {
      name: 'Phoebe',
      avatar: 'https://i.pravatar.cc/40',
      personality: 'INFJ',
      zodiac: 'Aquarius',
      match: '2 # 1'
    },
    content: 'A healthy relationship requires both adventure and peace. 💕',
    likes: 293,
    replies: 19,
    timeAgo: '2mo',
    hasAward: true
  },
  {
    id: 2,
    user: {
      name: 'Kostas',
      avatar: 'https://i.pravatar.cc/40',
      personality: 'ENFP',
      zodiac: 'Cancer',
      match: '9 # 1'
    },
    content: 'Y\'all getting dates and relationships?!',
    image: 'https://placehold.co/400',
    likes: 445,
    replies: 28,
    timeAgo: '2mo',
    hasAward: false
  },
  {
    id: 3,
    user: {
      name: 'Sarah',
      avatar: 'https://i.pravatar.cc/40',
      personality: 'ENFJ',
      zodiac: 'Leo',
      match: '7 # 1'
    },
    content: 'Adventure all the way! Life is too short to be boring.',
    likes: 156,
    replies: 12,
    timeAgo: '2mo',
    hasAward: false
  },
];

// Mock data for current user
export const currentUser = {
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/40',
  personality: 'INTJ',
  zodiac: 'Capricorn',
  coins: 250
};

// Mock data for personality types
export const personalityTypes = [
  { type: 'INTJ', description: 'The Architect' },
  { type: 'ENFP', description: 'The Campaigner' },
  { type: 'INFJ', description: 'The Advocate' },
  { type: 'ESFJ', description: 'The Consul' },
  { type: 'ISTP', description: 'The Virtuoso' },
];

// Mock data for zodiac signs
export const zodiacSigns = [
  { sign: 'Aries', dateRange: 'Mar 21 - Apr 19' },
  { sign: 'Taurus', dateRange: 'Apr 20 - May 20' },
  { sign: 'Gemini', dateRange: 'May 21 - Jun 20' },
  { sign: 'Cancer', dateRange: 'Jun 21 - Jul 22' },
  { sign: 'Leo', dateRange: 'Jul 23 - Aug 22' },
];

// Mock data for languages
export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese' },
];