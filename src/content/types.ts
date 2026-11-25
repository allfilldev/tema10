// Format konten standar company profile Bratamedia.
// Semua tema memakai nama bagian yang sama, UI boleh berbeda.

export type Img = { src: string; alt: string };
export type Link = { label: string; href: string };

export type Site = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logoText: string;
  city: string;
  foundedYear: number;
  contact: {
    whatsapp: string; // format internasional tanpa +, contoh 6281234567890
    whatsappDisplay: string;
    email: string;
    address: string;
    mapsUrl: string;
    hours: string;
  };
  socials: Link[];
  nav: Link[];
};

export type Hero = {
  eyebrow: string;
  titleLine1: string;
  titleHighlight?: string; // opsional: kata yang diberi stabilo
  titleLine2: string;
  titleAccent: string;
  highlights?: Stat[]; // opsional: kartu angka di hero
  points?: string[]; // opsional: poin kepercayaan di bawah tombol
  description: string;
  primaryCta: Link;
  secondaryCta: Link;
  media: Img;
  mediaCaption: string;
};

export type About = {
  eyebrow: string;
  title: string;
  description: string;
  story: string[];
  vision: string;
  mission: string[];
  values: { title: string; description: string }[];
  image: Img;
};

export type Stat = { value: string; label: string };
export type Step = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  priceFrom: string;
  image: Img;
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: Stat[];
  year: string;
  cover: Img;
  gallery: Img[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  category: string;
  cover: Img;
  body: { heading?: string; paragraphs: string[] }[];
};

export type TeamMember = { name: string; role: string; bio: string; photo: Img };
export type Testimonial = { quote: string; name: string; role: string; company: string; photo?: Img };
export type Faq = { question: string; answer: string };
export type ClientLogo = { name: string };
export type Cta = { title: string; titleAccent: string; description: string };
export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};
export type ThemeVariant = { label: string; href: string; description: string };
