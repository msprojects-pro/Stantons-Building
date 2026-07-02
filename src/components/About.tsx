import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Heart, Sparkles, Users } from "lucide-react";
import { COMPANY_DETAILS } from "../data";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-brand-green" />,
      title: "Family-Run Team",
      desc: "Our family name stands behind every stone we lay and every garden we design. You get direct communication and honest care.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
      title: "Fully Insured & Guaranteed",
      desc: "Sleep easy knowing all building and landscaping work is covered by comprehensive public liability insurance and our iron-clad satisfaction guarantee.",
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-green" />,
      title: "No Job Too Big or Small",
      desc: "Whether replacing a single fence post or undertaking a full structural extension with complete porcelain garden reshaping, we bring the same quality.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-green" />,
      title: "Attention to Detail",
      desc: "We take immense pride in crisp joints, solid sub-bases, correct levels, and flawless masonry. We build things to last a lifetime.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-brand-brown/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage / Visuals */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square md:aspect-[4/3]">
                <img
                  src="/images/lawn_project_1782997793084.jpg"
                  alt="Lawn and raised sleeper garden project by Stantons"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/10 hover:bg-transparent transition-all duration-300" />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-2xl shadow-xl border border-brand-green/30 max-w-[200px] hidden sm:block">
                <p className="text-4xl font-display font-bold text-brand-accent mb-1">{COMPANY_DETAILS.yearsExperience}</p>
                <p className="text-xs uppercase tracking-wider text-brand-sand font-bold">Years Combined Experience</p>
              </div>

              {/* Decorative accent border */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-brown rounded-tl-xl -z-10" />
            </motion.div>
          </div>

          {/* Right Column: Text & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-brown bg-brand-sand/40 px-3 py-1 rounded-full border border-brand-sand/60">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
                Family-Run Pride, <br />
                <span className="text-brand-green">Uncompromised Quality</span>
              </h2>
              <p className="text-brand-dark/80 font-sans leading-relaxed text-base max-w-2xl">
                Stantons Building & Landscaping is built on a foundation of trust, craftsmanship, and local South Yorkshire pride. Led by experienced builders and landscapers, we handle all aspects of domestic construction, garden remodeling, and hard landscaping.
              </p>
              <p className="text-brand-dark/80 font-sans leading-relaxed text-base max-w-2xl">
                We believe that your home doesn't end at your backdoor. Our mission is to seamlessly extend your living spaces into gorgeous, highly functional, and durable outdoor sanctuaries that you can enjoy with family and friends for years to come.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-green/10 shrink-0 border border-brand-green/15 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-brand-dark text-base">{item.title}</h4>
                    <p className="text-brand-dark/70 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
