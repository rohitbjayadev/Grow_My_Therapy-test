'use client';

import { Header, HeroSection, Footer } from '@/app/components/index';
import {
  WhoWeHelpSection,
  SpecialtiesSection,
  MethodsSection,
  TeamSection,
  CTASection,
} from '@/app/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <WhoWeHelpSection />
      <SpecialtiesSection />
      <MethodsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}
