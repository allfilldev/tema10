import { ArticleCards } from '@/sections/ArticleCards';
import { ClientLogos } from '@/sections/ClientLogos';
import { ContactCta } from '@/sections/ContactCta';
import { FaqList } from '@/sections/FaqList';
import { Hero } from '@/sections/Hero';
import { Plans } from '@/sections/Plans';
import { ProcessSteps } from '@/sections/ProcessSteps';
import { ServiceBand } from '@/sections/ServiceBand';
import { ServicesBento } from '@/sections/ServicesBento';
import { StatsPanel } from '@/sections/StatsPanel';
import { Testimonials } from '@/sections/Testimonials';
import { WorkGrid } from '@/sections/WorkGrid';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceBand />
      <ClientLogos />
      <ServicesBento />
      <StatsPanel />
      <WorkGrid limit={4} />
      <ProcessSteps />
      <Plans />
      <Testimonials />
      <ArticleCards limit={3} />
      <FaqList />
      <ContactCta />
    </>
  );
}
