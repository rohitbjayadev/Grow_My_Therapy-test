'use client';

import { Header, HeroSection, Footer } from '@/app/components/index';
import {
  HoldingHopeSection,
  WhoWeHelpSection,
  WorthyPlaceSection,
  ExpertiseAreasSection,
  MakingDifferenceSection,
  HonoringSection,
  SpecialtiesSection,
  OurOfficeSection,
  TeamSection,
} from '@/app/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HoldingHopeSection />
        <WhoWeHelpSection />
        <WorthyPlaceSection />
        <ExpertiseAreasSection />
        <MakingDifferenceSection />
        <HonoringSection />
        <SpecialtiesSection />
        <OurOfficeSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
