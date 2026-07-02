import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutGrid,
  Trees,
  Grid,
  Shield,
  Sprout,
  Layers,
  Home,
  Hammer,
  Check,
  ArrowRight,
  X,
  FileText
} from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

// Safe mapping from data string to Lucide component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Trees,
  Grid,
  Shield,
  Sprout,
  Layers,
  Home,
  Hammer,
};

interface ServicesProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteWithService }) => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand-brown/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-green/20 px-3.5 py-1.5 rounded-full border border-brand-green/30">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Comprehensive <span className="text-brand-accent">Building & Landscaping</span> Services
          </h2>
          <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
            From precision porcelain paving and timber construction to structural home enhancements, we execute every project to British standards with high-grade local materials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layers;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-brand-darker/50 hover:bg-brand-darker/80 border border-brand-green/15 hover:border-brand-accent/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg group relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-green/0 group-hover:from-brand-accent/5 group-hover:to-brand-green/5 transition-all duration-300 pointer-events-none" />
                
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-accent transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Actions inside card */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => setActiveService(service)}
                    className="text-brand-accent text-xs font-bold flex items-center gap-1 hover:text-white transition-colors group/btn cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="text-white/60 text-[11px] font-semibold uppercase tracking-wider hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service detail popup modal */}
        <AnimatePresence>
          {activeService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveService(null)}
                className="fixed inset-0 bg-brand-darker/80 backdrop-blur-sm"
              />

              {/* Popup Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative w-full max-w-2xl bg-brand-light rounded-2xl overflow-hidden shadow-2xl border border-brand-sand z-10"
              >
                {/* Header background accents */}
                <div className="h-2 bg-gradient-to-r from-brand-brown via-brand-green to-brand-accent" />
                
                <div className="p-6 md:p-8 space-y-6">
                  {/* Title and Close button */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
                        {React.createElement(iconMap[activeService.icon] || Layers, { className: "w-6 h-6" })}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-brand-dark leading-tight">
                          {activeService.title}
                        </h3>
                        <p className="text-xs text-brand-green font-semibold uppercase tracking-wider mt-1">Stantons Premium Standard</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveService(null)}
                      className="p-1.5 rounded-lg bg-brand-sand/50 text-brand-dark/70 hover:bg-brand-sand hover:text-brand-dark transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Long Description */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark/80">Service Description</h4>
                    <p className="text-brand-dark/80 font-sans text-sm leading-relaxed">
                      {activeService.longDescription}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark/80">What We Guarantee</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.features.map((feature, i) => (
                        <div key={i} className="flex gap-2.5 items-start bg-brand-sand/20 p-2.5 rounded-xl border border-brand-sand/50">
                          <Check className="w-4.5 h-4.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-brand-dark/90 text-xs sm:text-sm font-medium leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-sand">
                    <p className="text-[11px] text-brand-dark/60 italic text-center sm:text-left">
                      We offer free, no-obligation site surveys and written estimates.
                    </p>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveService(null)}
                        className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-brand-sand text-brand-dark font-semibold text-xs hover:bg-brand-sand transition-colors"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          const serviceTitle = activeService.title;
                          setActiveService(null);
                          onOpenQuoteWithService(serviceTitle);
                        }}
                        className="flex-1 sm:flex-initial px-6 py-2.5 bg-brand-green hover:bg-brand-accent text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Inquire About This</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
