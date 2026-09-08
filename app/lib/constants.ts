// Typography
export const typography = {
  fontFamily: {
    heading: "'Cormorant Infant', serif",
    body: "'Muli', sans-serif",
  },
};

export const companyInfo = {
  name: 'Conejo Valley Family Counseling',
  logo: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w',
};

// Header navigation (matches live site's header, including dropdown folders)
export const navLinks = [
  { label: 'About', href: '/therapists-newbury-park' },
  {
    label: 'Our Team',
    href: '/our-team',
    children: [
      { label: 'Jennifer Anderson, LMFT', href: '/jennifer-anderson' },
      { label: 'Candace Bletscher, AMFT', href: '/candace-bletscher' },
      { label: 'Heather Williams-Baumgart, AMFT', href: '/heather-williams-baumgart' },
      { label: 'Michaela Gorospe, AMFT', href: '/michaela-gorospe' },
      { label: 'Samantha Johnson, AMFT', href: '/samantha-johnson' },
      { label: 'Autumn Bodily, AMFT', href: '/autumn-bodily' },
      { label: 'Andrea Watkins, APCC', href: '/andrea-watkins' },
      { label: 'Rosa Gomez, AMFT', href: '/rosa-gomez' },
      { label: 'Chad Flores, AMFT', href: '/chad-flores' },
    ],
  },
  {
    label: 'Specialties',
    href: '/specialties',
    children: [
      { label: 'Dissociation', href: '/dissociative-identity-disorder-therapist-newbury-park' },
      { label: 'Trauma', href: '/trauma-counseling-newbury-park' },
      { label: 'Special Needs Parenting', href: '/counseling-special-needs-parents-newbury-park' },
      { label: 'Couples', href: '/couples-therapy' },
      { label: 'Children & Teens', href: '/children-and-teens' },
      { label: 'Anxiety & Depression', href: '/anxiety-depression' },
      { label: 'Adoption', href: '/adoption-therapy-ventura-county-ca' },
    ],
  },
  {
    label: 'Methods',
    href: '/methods',
    children: [
      { label: 'EMDR', href: '/emdr-therapy-newbury-park' },
      { label: 'Brainspotting', href: '/brainspotting' },
      { label: 'Somatic Therapy', href: '/somatic-therapy' },
      { label: 'Parts Work Therapy', href: '/parts-work-therapy' },
    ],
  },
  { label: 'FAQs', href: '/faqs' },
];

export const contactInfo = {
  addressLine1: '925 Broadbeck Dr',
  addressLine2: 'Suites 200 and 225',
  addressLine3: 'Newbury Park, CA 91320',
  phone: '805.242.3120',
  phoneHref: 'tel:8052423120',
  email: 'info@conejovalleycounseling.com',
  serviceAreas: 'Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley',
};

// Footer "Navigate" column
export const footerNavLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/therapists-newbury-park' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

// Footer "Our Team" column
export const footerTeamLinks = [
  { label: 'Jennifer Anderson', href: '/jennifer-anderson' },
  { label: 'Heather Williams-Baumgart', href: '/heather-williams-baumgart' },
  { label: 'Autumn Bodily', href: '/autumn-bodily' },
  { label: 'Michaela Gorospe', href: '/michaela-gorospe' },
  { label: 'Candace Bletscher', href: '/candace-bletscher' },
  { label: 'Samantha Johnson', href: '/samantha-johnson' },
  { label: 'Andrea Watkins', href: '/andrea-watkins' },
  { label: 'Rosa Gomez', href: '/rosa-gomez' },
  { label: 'Chad Flores', href: '/chad-flores' },
];

export const footerLegalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export const gettingStartedContent = {
  paragraph:
    "We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
};

// The 4 in-depth specialty cards ("Our specialties include…")
export const specialties = [
  {
    title: 'Trauma',
    desc: "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
    href: '/trauma-counseling-newbury-park',
  },
  {
    title: 'Dissociation',
    desc: 'The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we\'ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.',
    href: '/dissociative-identity-disorder-therapist-newbury-park',
  },
  {
    title: 'EMDR',
    desc: 'Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.',
    href: '/emdr-therapy-newbury-park',
  },
  {
    title: 'Special Needs Parenting',
    desc: 'Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.',
    href: '/counseling-special-needs-parents-newbury-park',
  },
];

// "Our areas of expertise" tag cloud
export const expertiseTags = [
  { label: 'Dissociation', href: '/dissociative-identity-disorder-therapist-newbury-park' },
  { label: 'Trauma', href: '/trauma-counseling-newbury-park' },
  { label: 'Family conflict', href: undefined },
  { label: 'Special needs parenting', href: '/counseling-special-needs-parents-newbury-park' },
  { label: 'Depression', href: '/anxiety-depression' },
  { label: 'marriage', href: '/couples-therapy' },
  { label: 'anxiety', href: '/anxiety-depression' },
  { label: 'relationships', href: undefined },
  { label: 'children', href: '/children-and-teens' },
  { label: 'teens', href: '/children-and-teens' },
  { label: 'intimacy & connection', href: '/couples-therapy' },
  { label: '…and more.', href: undefined },
];

export const heroSectionContent = {
  eyebrow: 'ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA',
  mainHeading: 'Rebuild your foundation on solid ground and finally begin to thrive.',
  subheading: 'Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.',
};

export const holdingHopeContent = {
  heading: "You're holding onto hope that life can be better than it is right now.",
};

export const conejoPurposeContent = {
  heading: 'At Conejo Valley Family Counseling we want to make that hope a reality.',
  description:
    "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life's ups and downs.",
  furtherDescription:
    "First and foremost, we believe what you're going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
};

export const whoWeHelpContent = {
  heading: 'Who we help',
  adults: {
    title: 'Adults',
    href: undefined as string | undefined,
    description:
      'Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.',
  },
  couples: {
    title: 'Couples',
    href: '/couples-therapy',
    description:
      "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  childrenTeens: {
    title: 'Children & Teens',
    href: '/children-and-teens',
    description:
      'Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.',
  },
};

export const worthyPlaceContent = {
  heading: 'You deserve a place where your story is heard, valued, and understood.',
  subheading: 'Nothing will be too heavy for us to carry together.',
};

export const makingDifferenceContent = {
  eyebrow: 'HOW WE WORK',
  heading: "We're here to make a difference.",
  mainPoint:
    "The clients we work with are balancing so many things at once, it's often hard for them to put themselves first.",
  description:
    'Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won\'t find anything “one-size-fits-all” here.) If you\'re ready to do the work, we\'re ready to help.',
  secondDescription:
    "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you've learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what's hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
  buttonLabel: 'Learn more about us',
  buttonHref: '/therapists-newbury-park',
};

export const teamContent = {
  eyebrow: 'SCHEDULE AN APPOINTMENT',
  heading: 'Find a therapist who is the right fit for you.',
  paragraph:
    "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
  secondParagraph: 'Click the button below to schedule an appointment.',
  buttonLabel: 'Book now',
  buttonHref: '/contact',
};
