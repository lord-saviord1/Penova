// All PENOVA site copy lives in this file. Pages and components read from
// here rather than hard-coding text, so updating the site's language never
// means hunting through JSX. Replace placeholder data (marked below) once
// real numbers, testimonials and listings exist.

export const siteMeta = {
  name: "PENOVA",
  tagline: "Support your potential until it's impactful.",
  positioning:
    "PENOVA is a service-oriented learning and development ecosystem that creates and connects people to platforms for growth, opportunity, experience and impact.",
  email: "hello@penova.example", // TODO: replace with official inbox
  whatsapp: "+234 000 000 0000", // TODO: replace with official number
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Programmes", href: "/programmes" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Community", href: "/community" },
  { label: "For Partners", href: "/partners" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Your potential. Our platform. Greater impact.",
  sub: "PENOVA is a service-oriented learning and development ecosystem creating platforms for bright minds to grow, connect, and turn potential into meaningful impact.",
  body: "Whether you're a student, graduate, entrepreneur, young professional or organisation, PENOVA connects you to the support, development, preparation, education, experience and connections you need to move forward.",
  primaryCta: { label: "Explore PENOVA", href: "/what-we-do" },
  secondaryCta: { label: "Join Our Community", href: "/community" },
};

export const bigIdea = {
  eyebrow: "The big idea",
  headline: "Potential is everywhere. Access isn't.",
  paragraphs: [
    "Great potential can exist without the right platform. A brilliant student may need academic support. A graduate may need practical experience. A young professional may need the right connection. An entrepreneur may need an audience. A skilled individual may simply need someone to discover what they can offer.",
    "PENOVA exists to bridge that gap. We create and connect people to platforms where potential can be supported, developed, prepared, educated, experienced and connected — until it has the opportunity to create real value.",
  ],
  pathway: [
    "Support",
    "Develop",
    "Prepare",
    "Educate",
    "Experience",
    "Connect",
    "Impact",
  ],
};

export const whatIsPenova = {
  headline: "More than a learning platform. More than a community.",
  intro:
    "PENOVA is a service-oriented initiative built around people and potential. We identify potential, create platforms for growth, provide practical support, and connect people with opportunities, audiences, communities and experiences that can move them closer to impact.",
  cutsAcross: [
    "Academic development",
    "Skills development",
    "Mentorship",
    "Practical learning",
    "Opportunities",
    "Events and experiences",
    "Community building",
    "Professional development",
    "Talent discovery",
    "Partnerships",
    "Visibility and connection",
  ],
  why: "Because potential should not end at potential.",
};

export type EcosystemPillar = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  cta: { label: string; href: string };
  note?: string;
};

export const ecosystem: EcosystemPillar[] = [
  {
    number: "01",
    title: "Academic Support",
    tagline: "Helping learners navigate their academic journey.",
    description: "Structured, 1-on-1 support for students at every stage.",
    items: [
      "1-on-1 mentorship",
      "Academic guidance",
      "Progress tracking",
      "Study and examination preparation",
      "Learning resources",
      "Academic communities",
      "Access to relevant opportunities",
      "Peer learning",
    ],
    cta: { label: "Get Academic Support", href: "/what-we-do#academic-support" },
  },
  {
    number: "02",
    title: "Learning & Development",
    tagline: "Learning experiences that go beyond theory.",
    description:
      "From practical skills to professional development, our programmes are designed to help people learn, practise and apply.",
    items: [
      "Practical training",
      "Digital learning",
      "Physical classes",
      "Workshops",
      "Masterclasses",
      "Skill-development programmes",
      "Professional development",
    ],
    cta: { label: "Explore Programmes", href: "/programmes" },
  },
  {
    number: "03",
    title: "Opportunities",
    tagline: "Your next opportunity could be one connection away.",
    description: "Curated opportunities that can help people move forward.",
    items: [
      "Internships",
      "Training programmes",
      "Scholarships",
      "Competitions",
      "Fellowships",
      "Conferences",
      "Volunteering",
      "Jobs",
      "Grants",
      "Events",
    ],
    cta: { label: "Explore Opportunities", href: "/opportunities" },
    note: "Opportunities shared through PENOVA may be provided by external organisations. Eligibility, application requirements and selection decisions remain with the respective opportunity providers.",
  },
  {
    number: "04",
    title: "Experiences",
    tagline: "Learning should be experienced.",
    description:
      "PENOVA creates experiences that expose people to environments beyond their immediate circles.",
    items: [
      "Industrial visits",
      "Career experiences",
      "Networking events",
      "Conferences",
      "Community events",
      "Leadership experiences",
      "Practical projects",
      "Educational excursions",
    ],
    cta: { label: "See Upcoming Experiences", href: "/community#events" },
  },
  {
    number: "05",
    title: "Community",
    tagline: "People grow better when they don't grow alone.",
    description:
      "A community of people who are learning, building, discovering and becoming.",
    items: [
      "Learn",
      "Ask questions",
      "Share opportunities",
      "Meet people",
      "Discover talent",
      "Collaborate",
      "Exchange ideas",
      "Find useful resources",
      "Build meaningful relationships",
    ],
    cta: { label: "Join Community", href: "/community" },
  },
  {
    number: "06",
    title: "Visibility & Connection",
    tagline: "You may already have value. You may just need the right platform.",
    description:
      "We connect people with potential, value, or something to offer with the people who need it — skills, ideas, businesses, products, services, knowledge, creativity and experiences.",
    items: [
      "Skills",
      "Ideas",
      "Businesses",
      "Products",
      "Services",
      "Knowledge",
      "Creativity",
      "Experiences",
    ],
    cta: { label: "Get Connected", href: "/contact" },
  },
];

export type Audience = {
  slug: string;
  title: string;
  headline: string;
  body: string;
  items: string[];
  cta: { label: string; href: string };
};

export const audiences: Audience[] = [
  {
    slug: "students",
    title: "For Students",
    headline: "Wherever you are in your academic journey, there is room to grow.",
    body: "PENOVA supports students beyond the classroom. Don't just pass through school — build while you're there.",
    items: [
      "Improve your academic performance",
      "Build practical skills",
      "Find relevant opportunities",
      "Prepare for examinations",
      "Connect with mentors",
      "Discover career possibilities",
      "Join learning communities",
      "Attend educational experiences",
      "Develop professionally",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    slug: "graduates",
    title: "For Graduates & Young Professionals",
    headline:
      "The transition from school to the world can be difficult. You don't have to navigate it alone.",
    body: "PENOVA provides platforms for early-career individuals to grow their skills, exposure and professional identity.",
    items: [
      "Develop practical skills",
      "Discover opportunities",
      "Build professional relationships",
      "Gain exposure",
      "Learn from experienced people",
      "Showcase their abilities",
      "Participate in projects",
      "Strengthen their professional identity",
    ],
    cta: { label: "Explore Career Development", href: "/opportunities" },
  },
  {
    slug: "entrepreneurs",
    title: "For Entrepreneurs & Creators",
    headline: "You have something to offer. Let's help it reach the right people.",
    body: "PENOVA creates platforms for individuals and businesses to gain visibility, connect with relevant audiences and participate in collaborative opportunities.",
    items: [
      "Showcase your product",
      "Promote your service",
      "Participate in PENOVA events",
      "Collaborate with our community",
      "Access relevant talent",
      "Partner on initiatives",
      "Reach emerging professionals and students",
    ],
    cta: { label: "Showcase Your Value", href: "/contact" },
  },
  {
    slug: "organisations",
    title: "For Organisations & Partners",
    headline: "Partner with potential. Create impact together.",
    body: "Organisations often have opportunities, knowledge, resources and platforms. People often have potential, skills, ideas and ambition. PENOVA helps connect both sides.",
    items: [
      "Deliver training",
      "Reach targeted communities",
      "Sponsor programmes",
      "Provide opportunities",
      "Host events",
      "Discover emerging talent",
      "Support educational initiatives",
      "Build community engagement",
      "Promote products or services",
      "Develop youth-focused programmes",
    ],
    cta: { label: "Become a Partner", href: "/partners" },
  },
];

export const approach = {
  headline: "Why PENOVA?",
  intro:
    "Because the gap between potential and impact is often not ability. Sometimes it is access, support, exposure, preparation, experience or connection. PENOVA is designed around these gaps.",
  steps: [
    { title: "Discover", body: "We identify people, ideas, skills and opportunities." },
    { title: "Support", body: "We provide the assistance required to take the next step." },
    { title: "Develop", body: "We create learning and growth experiences." },
    { title: "Prepare", body: "We help people become ready for real-world opportunities." },
    { title: "Experience", body: "We create opportunities to practise and apply." },
    { title: "Connect", body: "We connect people to communities, opportunities, organisations and audiences." },
    { title: "Impact", body: "The ultimate goal is meaningful value created by people who have been given the platform to grow." },
  ],
};

export const values = [
  { title: "Excellence", body: "We believe potential deserves high standards." },
  { title: "Character", body: "Competence without character is incomplete." },
  { title: "Growth", body: "We believe people can continuously become better." },
  { title: "Access", body: "Opportunity becomes more meaningful when people can reach it." },
  { title: "Service", body: "PENOVA exists to create value for others." },
  { title: "Collaboration", body: "Impact grows when people build together." },
  { title: "Innovation", body: "We challenge ordinary approaches to learning and development." },
  { title: "Impact", body: "We measure success by the value created, not merely the activity completed." },
];

export const vision =
  "A world where potential has access to a platform. PENOVA envisions a future where people are not limited by the absence of information, support, exposure or connection — where a person's potential can find the right platform, develop into capability and ultimately become meaningful impact.";

export const mission =
  "To create and connect people to platforms that support learning, development, opportunity, experience and meaningful connection. Through programmes, communities, partnerships and experiences, PENOVA helps individuals move from potential to capability, and from capability to impact.";

export const aboutStory = {
  question: "What happens when potential meets the right platform?",
  paragraphs: [
    "PENOVA was created from the belief that people don't always lack potential. Sometimes they lack the platform to express it.",
    "So rather than building another platform that simply tells people what to learn, PENOVA seeks to build an ecosystem around their growth: learning opportunities, support, connection, experiences, shared opportunities and platforms to showcase value — held together by partnerships that make these possibilities accessible to more people.",
    "PENOVA is not here to define what you can become. We are here to help you discover, develop and express what you can become.",
  ],
};

export const programmes = {
  featured: {
    name: "SUPERIORPOINTS Training Scheme",
    tagline: "Turn accounting knowledge into practical skills.",
    body: "A PENOVA-supported training initiative designed to help participants move from understanding accounting concepts to applying them in practical environments.",
    cta: { label: "Learn More", href: "/contact" },
  },
  future: [
    { name: "PENOVA Academy", body: "Structured learning and professional development experiences." },
    { name: "PENOVA Experiences", body: "Practical exposure, visits, events and immersive learning." },
    { name: "PENOVA Connect", body: "Connecting people, talent, businesses and opportunities." },
    { name: "PENOVA Opportunities", body: "A curated ecosystem of relevant opportunities." },
    { name: "PENOVA Community", body: "A growing network of learners, builders and emerging professionals." },
  ],
};

// Placeholder — wire to real counts (Supabase view or manual update) before launch.
export const impactStats = [
  { label: "People reached", value: "XX+" },
  { label: "Community members", value: "XX+" },
  { label: "Learning experiences", value: "XX+" },
  { label: "Opportunities shared", value: "XX+" },
  { label: "Partners & collaborators", value: "XX+" },
  { label: "Programmes delivered", value: "XX+" },
];

export const impactStatement = [
  "People who learned.",
  "People who built.",
  "People who connected.",
  "People who discovered opportunities.",
  "People who became more capable.",
  "People who turned potential into impact.",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  group: "Students" | "Graduates" | "Programme participants" | "Partners" | "Organisations";
};

// Placeholder testimonials — replace with real quotes and photos before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "PENOVA connected me with a mentor and a study community when I was struggling to keep up with coursework.",
    name: "Placeholder Name",
    role: "Student",
    group: "Students",
  },
  {
    quote:
      "The SUPERIORPOINTS scheme gave me practical accounting experience I couldn't get from lectures alone.",
    name: "Placeholder Name",
    role: "Programme participant",
    group: "Programme participants",
  },
  {
    quote:
      "Partnering with PENOVA gave us direct access to motivated, well-prepared young talent.",
    name: "Placeholder Organisation",
    role: "Partner",
    group: "Partners",
  },
];

export type Opportunity = {
  title: string;
  organisation: string;
  category: string;
  deadline: string;
  location: string;
  eligibility: string;
  description: string;
};

// Sample data — replace with a real feed (e.g. a Supabase `opportunities` table).
export const opportunities: Opportunity[] = [
  {
    title: "Undergraduate Research Fellowship",
    organisation: "Example Foundation",
    category: "Fellowships",
    deadline: "Rolling",
    location: "Remote",
    eligibility: "Undergraduates in any discipline",
    description: "A short-term fellowship supporting independent research projects.",
  },
  {
    title: "Frontend Development Internship",
    organisation: "Example Tech Co.",
    category: "Internships",
    deadline: "Rolling",
    location: "Lagos, Nigeria",
    eligibility: "Students and recent graduates",
    description: "Hands-on experience building production web applications.",
  },
  {
    title: "Community Impact Grant",
    organisation: "Example Trust",
    category: "Grants",
    deadline: "Rolling",
    location: "Nigeria-wide",
    eligibility: "Early-stage community projects",
    description: "Seed funding for youth-led community initiatives.",
  },
];

export const opportunityCategories = [
  "Internships",
  "Scholarships",
  "Training",
  "Competitions",
  "Fellowships",
  "Jobs",
  "Volunteering",
  "Events",
  "Grants",
];

export type PenovaEvent = {
  name: string;
  date: string;
  location: string;
  format: string;
  description: string;
};

// Sample data — replace with a real feed once events are scheduled.
export const upcomingEvents: PenovaEvent[] = [
  {
    name: "PENOVA Community Meetup",
    date: "TBD",
    location: "Lagos, Nigeria",
    format: "In person",
    description: "A first gathering for students, graduates and partners in the PENOVA community.",
  },
];

export const insightsCategories = [
  { name: "Learn", body: "Educational and academic resources." },
  { name: "Build", body: "Skills, careers and professional development." },
  { name: "Discover", body: "Opportunities and emerging trends." },
  { name: "Perspectives", body: "Ideas, opinions and conversations." },
  { name: "Stories", body: "People and experiences from the PENOVA ecosystem." },
];

export const partnershipTypes = [
  { title: "Programme Partnership", body: "Build or deliver initiatives together." },
  { title: "Community Partnership", body: "Reach and engage relevant communities." },
  { title: "Training Partnership", body: "Deliver practical learning experiences." },
  { title: "Opportunity Partnership", body: "Bring opportunities to the PENOVA ecosystem." },
  { title: "Sponsorship", body: "Support programmes and experiences." },
  { title: "Talent & Visibility", body: "Connect with emerging talent and audiences." },
];

export const partnerAudiences = [
  "Organisation",
  "Business",
  "School",
  "University",
  "NGO",
  "Professional body",
  "Training provider",
  "Startup",
  "Community",
  "Corporate institution",
];

export const faqItems = [
  {
    question: "Is PENOVA a tutorial centre?",
    answer:
      "No. PENOVA is a broader learning and development ecosystem. Academic support is one part of what we do, but our work extends into skills development, opportunities, experiences, community, professional development, partnerships and connection.",
  },
  {
    question: "Who can join PENOVA?",
    answer:
      "PENOVA is designed for students, graduates, young professionals, entrepreneurs, creators and other individuals seeking opportunities to learn, grow, connect and create value.",
  },
  {
    question: "Is PENOVA only for students?",
    answer:
      "No. Students are an important part of the PENOVA community, but PENOVA is designed to grow beyond a student-only audience.",
  },
  {
    question: "Does PENOVA provide opportunities?",
    answer:
      "Yes. PENOVA shares and creates relevant opportunities through its ecosystem. Some opportunities are created by PENOVA, while others come from external organisations.",
  },
  {
    question: "Does PENOVA offer paid programmes?",
    answer: "Some PENOVA programmes may be free, subsidised or paid depending on the programme.",
  },
  {
    question: "Can my organisation partner with PENOVA?",
    answer:
      "Yes. Organisations can collaborate with PENOVA through training, events, sponsorship, opportunity provision, community engagement, talent discovery and other mutually valuable initiatives.",
  },
  {
    question: "Can I offer my service through PENOVA?",
    answer:
      "You can submit your offering for consideration. PENOVA may connect suitable offerings with relevant audiences within its ecosystem.",
  },
];

export const contactReasons = [
  "Joining",
  "Academic Support",
  "Programme",
  "Opportunity",
  "Partnership",
  "Sponsorship",
  "Offering a service",
  "General enquiry",
];

export const footerLinks = {
  quickLinks: primaryNav,
  getInvolved: [
    { label: "Join PENOVA", href: "/community" },
    { label: "Become a Partner", href: "/partners" },
    { label: "Submit an Opportunity", href: "/contact" },
    { label: "Offer Your Value", href: "/contact" },
  ],
};
