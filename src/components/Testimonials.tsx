import React from "react";
import { motion } from "motion/react";
import { Star, Quote, MapPin, BadgeCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-green/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-brown/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-green/20 px-3.5 py-1.5 rounded-full border border-brand-green/30">
            Client Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by Homeowners <br />
            Across <span className="text-brand-accent">South Yorkshire</span>
          </h2>
          <p className="text-white/70 font-sans text-sm sm:text-base leading-relaxed">
            Customer satisfaction is at the core of our family business. Read what our clients say about our building standards and landscaping transformations.
          </p>
        </div>

        {/* Grid layout for staggered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-darker/60 border border-brand-green/10 hover:border-brand-green/30 p-6 md:p-8 rounded-2xl relative shadow-xl hover:shadow-brand-green/5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Giant quote icon background decoration */}
              <div className="absolute top-6 right-6 text-brand-green/10 group-hover:text-brand-green/15 transition-colors pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-sans font-light italic relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display font-bold text-white text-base leading-none">
                      {testimonial.name}
                    </h4>
                    <BadgeCheck className="w-4.5 h-4.5 text-brand-accent" title="Verified Customer" />
                  </div>
                  <div className="flex items-center gap-1 text-white/50 text-xs mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-green" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent block">
                    {testimonial.service}
                  </span>
                  <span className="text-[10px] text-white/30 block mt-1">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Area Trust Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-brown/10 to-brand-green/10 border border-brand-green/20 rounded-2xl p-6 md:p-8 mt-16 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-lg text-white">Need a project in South Yorkshire?</h4>
            <p className="text-white/70 text-xs sm:text-sm">We provide fast site visits across Sheffield, Barnsley, Rotherham, Doncaster, and surrounding areas.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-brand-green hover:bg-brand-accent text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 text-center w-full sm:w-auto"
          >
            Check Our Coverage
          </a>
        </motion.div>
      </div>
    </section>
  );
};
