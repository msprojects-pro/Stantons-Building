import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, FileText } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY_DETAILS } from "../data";

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight
      const sections = ["hero", "about", "services", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", targetId: "hero" },
    { name: "About Us", href: "#about", targetId: "about" },
    { name: "Services", href: "#services", targetId: "services" },
    { name: "Our Work", href: "#gallery", targetId: "gallery" },
    { name: "Testimonials", href: "#testimonials", targetId: "testimonials" },
    { name: "Contact", href: "#contact", targetId: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-darker/95 backdrop-blur-md shadow-lg border-b border-brand-green/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="outline-none">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className={`font-sans text-[14px] font-medium tracking-wide transition-colors relative py-1 outline-none ${
                    activeSection === link.targetId
                      ? "text-brand-accent font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {activeSection === link.targetId && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-brand-accent text-sm font-semibold transition-colors bg-brand-dark/40 py-2 px-3.5 rounded-xl border border-brand-green/30"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="bg-gradient-to-r from-brand-brown to-brand-green hover:from-brand-green hover:to-brand-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-brand-green/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-brand-green/20 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-darker/90 backdrop-blur-md"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-dark border-l border-brand-green/20 p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between">
                  <Logo iconOnly />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-white hover:bg-brand-green/20 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col gap-5 pt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.targetId)}
                      className={`text-lg font-display font-semibold py-1 outline-none transition-colors border-b border-brand-sand/10 pb-2 ${
                        activeSection === link.targetId
                          ? "text-brand-accent"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer footer / contact shortcuts */}
              <div className="space-y-4 pt-6 border-t border-brand-sand/10">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center justify-center gap-3 w-full bg-brand-darker/60 text-white py-3 rounded-xl border border-brand-green/30 font-semibold text-sm hover:text-brand-accent transition-colors"
                >
                  <Phone className="w-4.5 h-4.5 text-brand-accent animate-pulse" />
                  <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-gradient-to-r from-brand-brown to-brand-green text-white py-3 rounded-xl font-bold text-sm shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4.5 h-4.5" />
                  <span>Get a Free Quote</span>
                </button>
                <p className="text-[10px] text-center text-white/40 font-medium">
                  Family Run • Yorkshire Pride • No Job Too Small
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
