"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutOrigins from "@/components/about/AboutOrigins";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutAwards from "@/components/about/AboutAwards";
import AboutQuote from "@/components/about/AboutQuote";
import AboutCta from "@/components/about/AboutCta";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutOrigins />
      <AboutTeam />
      <AboutValues />
      <AboutAwards />
      <AboutQuote />
      <AboutCta />
      <SiteFooter />
    </main>
  );
}
