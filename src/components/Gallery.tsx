import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, ZoomIn, Info } from "lucide-react";
import { PROJECTS_DATA, GALLERY_CATEGORIES } from "../data";
import { Project } from "../types";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter projects based on selected category
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredProjects.length - 1 : prev - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredProjects.length - 1 ? 0 : prev + 1;
    });
  };

  const activeProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-brand-brown/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-brown bg-brand-sand/40 px-3 py-1 rounded-full border border-brand-sand/60">
              Our Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
              Showcase of <span className="text-brand-green">Completed Work</span>
            </h2>
            <p className="text-brand-dark/70 font-sans text-sm sm:text-base leading-relaxed">
              Take a look at some of our recent residential projects. Every image represents real Stantons craftsmanship carried out across South Yorkshire.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null); // close lightbox if open to prevent context mismatch
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative cursor-pointer ${
                  selectedCategory === cat
                    ? "text-white font-bold"
                    : "text-brand-dark/70 hover:text-brand-dark bg-brand-sand/30 hover:bg-brand-sand/60 border border-brand-sand/50"
                }`}
              >
                {/* Active category background bubble */}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-brand-green rounded-xl -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-brand-sand/20 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/40 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* Info Text in overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 sm:translate-y-4 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 z-10">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-accent mb-1">{project.category}</p>
                  <h4 className="font-display font-bold text-white text-base leading-snug">{project.title}</h4>
                  <div className="flex items-center gap-1.5 mt-2.5 text-white/80 text-[11px] font-medium border-t border-white/10 pt-2.5">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-accent" />
                    <span>View Project Spec</span>
                  </div>
                </div>

                {/* Tiny Floating zoom indicator */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-brand-darker/60 backdrop-blur-md border border-white/10 text-white opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Immersive Lightbox overlay */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darker/95 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 cursor-zoom-out"
              />

              {/* Close button top right */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-dark/80 border border-white/10 text-white hover:bg-brand-brown hover:text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main lightbox card container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full bg-brand-dark rounded-2xl overflow-hidden border border-brand-green/20 shadow-2xl flex flex-col md:flex-row z-10"
              >
                {/* Image Section */}
                <div className="relative flex-1 bg-black flex items-center justify-center aspect-[4/3] md:aspect-auto md:h-[500px]">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Navigation Arrows on image */}
                  {filteredProjects.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="absolute left-4 p-2 rounded-full bg-brand-dark/70 hover:bg-brand-brown text-white border border-white/10 transition-all cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-4 p-2 rounded-full bg-brand-dark/70 hover:bg-brand-brown text-white border border-white/10 transition-all cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Details Section */}
                <div className="w-full md:w-[320px] p-6 md:p-8 flex flex-col justify-between bg-brand-darker text-white border-t md:border-t-0 md:border-l border-brand-green/10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-green/20 px-2.5 py-1 rounded-md border border-brand-green/30 inline-block">
                      {activeProject.category}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-snug">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-sans">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6 space-y-4">
                    <div className="flex items-start gap-2.5 text-xs text-white/60">
                      <Info className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <p>Built with tanalised (pressure-treated) heavy duty materials in South Yorkshire, UK.</p>
                    </div>
                    
                    <button
                      onClick={() => setLightboxIndex(null)}
                      className="w-full py-2.5 bg-brand-green hover:bg-brand-accent text-white rounded-xl text-xs font-bold shadow-md transition-colors text-center"
                    >
                      Back to Gallery
                    </button>
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
