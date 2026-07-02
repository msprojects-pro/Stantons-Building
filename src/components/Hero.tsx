import React from "react";
import { motion } from "motion/react";
import { Phone, Calendar, CheckCircle, Shield, Award, MapPin } from "lucide-react";
import { COMPANY_DETAILS } from "../data";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark">
      {/* Background Image with custom overlay gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/stantons_hero_bg_1782997758966.jpg"
          alt="Premium landscaped garden and patio designed by Stantons"
          className="w-full h-full object-cover scale-105 filter brightness-[0.42] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Organic dark-green/earthy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/60 via-brand-dark/85 to-brand-darker" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/90 via-transparent to-brand-darker/40" />
      </div>

      {/* Decorative Warm Backlight */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-brown/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 backdrop-blur-md border border-brand-green/30 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Serving South Yorkshire & Surrounding Areas</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            Crafting Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-sand">Dream Garden</span> & Building Projects
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 font-sans leading-relaxed mb-8 max-w-2xl font-light"
          >
            {COMPANY_DETAILS.tagline} {COMPANY_DETAILS.description}
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-4 mb-12"
          >
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-brown to-brand-green hover:from-brand-green hover:to-brand-accent text-white font-bold text-base shadow-xl hover:shadow-brand-accent/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/25 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Phone className="w-5 h-5 text-brand-accent animate-pulse" />
              <span>Call: {COMPANY_DETAILS.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-2.5 text-white/90">
              <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none mb-0.5">Business</p>
                <p className="text-xs font-semibold">Family Run Team</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-white/90">
              <Award className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none mb-0.5">Experience</p>
                <p className="text-xs font-semibold">{COMPANY_DETAILS.yearsExperience} Years Combined</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-white/90">
              <Shield className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none mb-0.5">Guarantee</p>
                <p className="text-xs font-semibold">Fully Insured Work</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-white/90">
              <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none mb-0.5">Pricing</p>
                <p className="text-xs font-semibold">No-Obligation Quotes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-px">
        <svg
          viewBox="0 0 1200 120"
          className="relative block w-full h-[40px] md:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#F9F9F6"
          />
        </svg>
      </div>
    </section>
  );
};
