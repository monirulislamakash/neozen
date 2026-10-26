import ServiceHero from "@/components/service/ServiceHero";
import ServiceSimplicity from "@/components/service/ServiceSimplicity";
import ServiceCards from "@/components/service/ServiceCards";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceQuote from "@/components/service/ServiceQuote";
import AboutCta from "@/components/about/AboutCta";
import SiteFooter from "@/components/SiteFooter";

export default function ServicePage() {
  return (
    <main className="service-page">
      <ServiceHero />
      <ServiceSimplicity />
      <ServiceCards />
      <ServiceProcess />
      <ServiceQuote />
      <AboutCta />
      <SiteFooter />
    </main>
  );
}
