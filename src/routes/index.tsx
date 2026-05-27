import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyVisonwrk } from "@/components/site/WhyVisonwrk";
import { Pricing } from "@/components/site/Pricing";
import { Founder } from "@/components/site/Founder";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visonwrk — AI Automation Studio" },
      {
        name: "description",
        content:
          "Visonwrk builds AI-powered automation systems for modern businesses — lead follow-up, custom workflows, and quiet operational infrastructure.",
      },
      { property: "og:title", content: "Visonwrk — AI Automation Studio" },
      {
        property: "og:description",
        content:
          "Automating business. Elevating growth. Custom AI automation systems for modern companies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <WhyVisonwrk />
      <Pricing />
      <Founder />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
