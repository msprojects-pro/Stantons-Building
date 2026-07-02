import React from "react";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY_DETAILS, SERVICES_DATA } from "../data";

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
    <footer className="bg-brand-darker text-white/90 border-t border-brand-green/20 relative z-20 overflow-hidden">
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans font-light">
              We are a dedicated family-run team offering premium building, masonry, paving, and landscaping services across South Yorkshire. Over {COMPANY_DETAILS.yearsExperience} combined years of British building expertise.
            </p>
            <div className="flex gap-2.5 items-center text-xs font-semibold text-brand-accent">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>Fully Insured & Guaranteed Work</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-5">
            <h4 className="font-display font-bold text-base text-brand-accent uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home / Welcome", id: "hero" },
                { name: "About Family Business", id: "about" },
                { name: "Our Services", id: "services" },
                { name: "Our Work Gallery", id: "gallery" },
                { name: "Client Testimonials", id: "testimonials" },
                { name: "Contact & Estimates", id: "contact" }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-white/75 hover:text-brand-accent text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-green group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Major Services List */}
          <div className="space-y-5">
            <h4 className="font-display font-bold text-base text-brand-accent uppercase tracking-wider">
              Our Specialties
            </h4>
            <ul className="space-y-3 text-white/75 text-xs sm:text-sm font-light">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span>{srv.title}</span>
                </li>
              ))}
              <li className="text-brand-accent font-medium text-xs">
                + Many more bespoke building solutions
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact Info & CTA */}
          <div className="space-y-5">
            <h4 className="font-display font-bold text-base text-brand-accent uppercase tracking-wider">
              Stantons Headquarters
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-light">
              <li className="flex items-start gap-3 text-white/85">
                <MapPin className="w-4.5 h-4.5 text-brand-green shrink-0 mt-0.5" />
                <span>South Yorkshire, United Kingdom (Sheffield, Rotherham, Barnsley, Doncaster coverage)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-green shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-brand-accent font-semibold transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-green shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-brand-accent font-semibold transition-colors break-all text-xs">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenQuote}
              className="w-full bg-brand-green hover:bg-brand-accent text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-colors cursor-pointer text-center"
            >
              Request A Free Visit
            </button>
          </div>

        </div>

        {/* Sub-Footer Copyright & Local Claim */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Made with pride in Yorkshire</span>
            <Heart className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
            <span>• Fully Insured Tradesmen</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
