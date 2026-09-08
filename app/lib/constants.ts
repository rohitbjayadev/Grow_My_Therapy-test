// Color Palette
export const colors = {
  primary: '#2d5f7d',
  primaryLight: '#4a7fa0',
  primaryLighter: '#e8f1f6',
  accent: '#c89066',
  accentLight: '#ddb799',
  background: '#ffffff',
  surface: '#f9f7f4',
  text: '#2c2c2c',
  textLight: '#666666',
  textLighter: '#999999',
  border: '#e8e6e3',
  success: '#6b9a7a',
  warning: '#c89066',
  error: '#c94a3d',
};

// Spacing Scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
};

// Typography
export const typography = {
  fontFamily: {
    sans: "system-ui, -apple-system, 'Segoe UI', 'Roboto', sans-serif",
    serif: "'Georgia', 'Times New Roman', serif",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

// Border Radius
export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Methods', href: '#methods' },
];

export const contactInfo = {
  address: '925 Broadbeck Dr, Suites 200 & 225, Newbury Park, CA 91320',
  phone: '805.242.3120',
  email: 'info@conejovalleycounseling.com',
  serviceAreas: 'Thousand Oaks, Westlake Village, Camarillo, Moorpark, Simi Valley',
};

export const companyInfo = {
  name: 'Conejo Valley Family Counseling',
  tagline: 'Rebuild your foundation on solid ground',
  description:
    'Professional mental health services providing compassionate care to families and individuals.',
};

export const teamMembers = [
  { name: 'Jennifer Anderson', title: 'LMFT', specialty: 'Trauma & EMDR' },
  { name: 'Candace Bletscher', title: 'AMFT', specialty: 'Family Therapy' },
  { name: 'Heather Williams-Baumgart', title: 'AMFT', specialty: 'Couples Counseling' },
  { name: 'Michaela Gorospe', title: 'AMFT', specialty: 'Anxiety & Depression' },
  { name: 'Samantha Johnson', title: 'AMFT', specialty: 'Trauma & PTSD' },
  { name: 'Autumn Bodily', title: 'AMFT', specialty: 'Child & Teen Therapy' },
  { name: 'Andrea Watkins', title: 'APCC', specialty: 'Individual Therapy' },
  { name: 'Rosa Gomez', title: 'AMFT', specialty: 'Family Systems' },
  { name: 'Chad Flores', title: 'AMFT', specialty: 'Couples & Intimacy' },
];

export const specialties = [
  { title: 'Trauma', desc: 'We don\'t always know when and how we\'ve experienced trauma. In therapy, we\'ll work together to help you process your past, understand what\'s causing you to stay "stuck," and regain a sense of safety, control, and hope. You don\'t have to carry your burdens alone.' },
  { title: 'Dissociation', desc: 'The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we\'ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.' },
  { title: 'EMDR', desc: 'Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.' },
  { title: 'Special Needs Parenting', desc: 'Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.' },
  { title: 'Brainspotting', desc: 'Advanced trauma processing technique that accesses the brain\'s natural healing mechanisms.' },
  { title: 'Somatic Therapy', desc: 'Body-based healing approaches that recognize the connection between mind and body.' },
  { title: 'Parts Work Therapy', desc: 'Internal Family Systems approaches to help you understand different parts of yourself.' },
  { title: 'Couples Therapy', desc: 'Relationships require effort, and we\'re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.' },
];
