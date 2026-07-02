/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { QuoteModal } from "./components/QuoteModal";
import { FloatingCallButton } from "./components/FloatingCallButton";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenQuote = () => {
    setPreselectedService("");
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light text-brand-dark selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden antialiased">
      {/* Premium Sticky Navigation Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* About Stantons Section */}
        <About />

        {/* Services Bento Grid */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Work Gallery with interactive Filter & Lightbox */}
        <Gallery />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Contact Form, Company Details, & Coverage Map */}
        <Contact />
      </main>

      {/* Comprehensive Multi-Column Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Call CTA exclusively on Mobile Screens */}
      <FloatingCallButton />

      {/* Reusable Intelligent Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedService={preselectedService}
      />
    </div>
  );
}

