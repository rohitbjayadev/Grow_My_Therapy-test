# Conejo Valley Family Counseling - Website Clone

A professional, responsive Next.js + Tailwind CSS clone of the Conejo Valley Family Counseling homepage.

## Project Structure

```
app/
├── components/
│   ├── Header.tsx              - Sticky navigation with logo and menu
│   ├── HeroSection.tsx         - Main hero with headline and CTA
│   ├── Card.tsx                - Reusable card component
│   ├── Footer.tsx              - Multi-column footer
│   ├── SectionHeader.tsx       - Reusable section title component
│   ├── TeamCard.tsx            - Team member card
│   ├── SpecialtyCard.tsx       - Specialty service card
│   ├── index.ts                - Component barrel exports
│   └── sections/
│       ├── WhoWeHelpSection.tsx    - Services overview (Adults, Couples, Children)
│       ├── SpecialtiesSection.tsx  - Treatment specialties grid
│       ├── MethodsSection.tsx      - Therapeutic methods with descriptions
│       ├── TeamSection.tsx         - Team member showcase
│       ├── CTASection.tsx          - Call-to-action section
│       └── index.ts                - Section barrel exports
├── lib/
│   ├── constants.ts            - Design tokens, colors, company info, team data
│   └── utils.ts                - Helper functions
├── layout.tsx                  - Root layout with metadata
├── page.tsx                    - Main page composition
└── globals.css                 - Global styles and CSS variables

public/                        - Static assets
package.json                   - Dependencies and scripts
tailwind.config.ts            - Tailwind configuration
tsconfig.json                 - TypeScript configuration
```

## Key Features

### 8 Main Sections
1. **Navigation** - Sticky header with responsive menu
2. **Hero** - Eye-catching headline with call-to-action
3. **Who We Help** - Services for Adults, Couples, Children & Teens
4. **Specialties** - 12 treatment specialties including Trauma, EMDR, Dissociation, Brainspotting, Somatic Therapy, Parts Work
5. **Methods** - 4 therapeutic approaches with detailed descriptions
6. **Team** - 9 licensed therapists with credentials and specialties
7. **CTA** - "Your Needs Are Always Top Priority" with appointment booking
8. **Footer** - Complete footer with contact info, links, and legal pages

### Design System
- **Colors**: Uses Tailwind's blue palette with consistent primary colors
- **Typography**: System font stack with responsive heading sizes
- **Spacing**: Generous padding (py-20 md:py-32) for visual breathing room
- **Responsive**: Mobile-first design with seamless tablet and desktop layouts
- **Accessibility**: Semantic HTML, proper heading hierarchy, readable contrast

### Content
- **Team**: 9 licensed therapists (LMFT, AMFT, APCC)
- **Contact**: 925 Broadbeck Dr, Suites 200 & 225, Newbury Park, CA 91320
- **Phone**: 805.242.3120
- **Email**: info@conejovalleycounseling.com
- **Service Areas**: Thousand Oaks, Westlake Village, Camarillo, Moorpark, Simi Valley

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

## Data Management

All dynamic content is centralized in `app/lib/constants.ts`:
- Team members
- Specialties
- Navigation links
- Contact information
- Company information

To update content, modify the constants file and it will propagate throughout the site.

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: #2d5f7d;
  --primary-light: #4a7fa0;
  --accent: #c89066;
  ...
}
```

### Content
Update `app/lib/constants.ts`:
```typescript
export const teamMembers = [
  { name: '...', title: '...', specialty: '...' },
  ...
];
```

### Components
All components are small, focused, and easy to modify:
- `Card.tsx` - Generic card with optional link
- `TeamCard.tsx` - Team member display
- `SpecialtyCard.tsx` - Service specialty card

## Responsive Design

- **Mobile** (< 640px): Single-column layouts, stacked navigation
- **Tablet** (640px - 1024px): Two-column grids, side navigation
- **Desktop** (> 1024px): Three-column grids, full navigation

## Build Status
✅ Production build successful with zero errors
✅ TypeScript type checking passes
✅ All routes pre-rendered as static content

## Next Steps
- [ ] Replace image placeholders with actual photography
- [ ] Implement mobile hamburger menu functionality
- [ ] Add booking form integration
- [ ] Implement contact form
- [ ] Add FAQ section
- [ ] Add testimonials/reviews
- [ ] Add animations and transitions
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Deploy to hosting platform
