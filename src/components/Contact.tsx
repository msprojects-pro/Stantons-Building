import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, CalendarCheck, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS, SERVICES_DATA } from "../data";
import { QuoteRequest } from "../types";

export const Contact: React.FC = () => {
  const [form, setForm] = useState<QuoteRequest>({
    name: "",
    email: "",
    phone: "",
    service: SERVICES_DATA[0].title,
    postcode: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteRequest, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteRequest, string>> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    if (!form.postcode.trim()) {
      newErrors.postcode = "Postcode is required";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please enter your project details";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      console.log("=== STANTONS CONTACT FORM SUBMISSION ===");
      console.log("Customer Details:", form);
      console.log("========================================");

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      service: SERVICES_DATA[0].title,
      postcode: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  const contactCards = [
    {
      icon: <Phone className="w-5 h-5 text-brand-green" />,
      title: "Call Us Directly",
      details: COMPANY_DETAILS.phoneDisplay,
      sub: "Mon - Sat: 8:00 AM - 6:00 PM",
      href: `tel:${COMPANY_DETAILS.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-green" />,
      title: "Email Our Estimators",
      details: COMPANY_DETAILS.email,
      sub: "We reply within 24 hours",
      href: `mailto:${COMPANY_DETAILS.email}`,
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand-green" />,
      title: "Our Coverage Area",
      details: "South Yorkshire & Surrounds",
      sub: "Sheffield, Barnsley, Doncaster, Rotherham",
      href: "#",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-green" />,
      title: "Operating Hours",
      details: "Monday - Saturday",
      sub: "Closed Sundays & Public Holidays",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-82 h-82 rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-brown bg-brand-sand/40 px-3 py-1 rounded-full border border-brand-sand/60">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Let's Discuss Your <span className="text-brand-green">Next Project</span>
          </h2>
          <p className="text-brand-dark/70 font-sans text-sm sm:text-base leading-relaxed">
            Ready to remodel your garden, pave a new driveway, or require professional brickwork? Fill out our simple form below to arrange a free site assessment and customized quote.
          </p>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information & Styled Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-display font-bold text-2xl text-brand-dark">
              Contact Information
            </h3>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-brand-sand/20 border border-brand-sand/60 p-4 rounded-xl flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center border border-brand-green/15 mb-4 shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-dark/50 mb-1">{card.title}</h4>
                    {card.href !== "#" ? (
                      <a href={card.href} className="text-brand-dark hover:text-brand-green font-semibold text-sm transition-colors">
                        {card.details}
                      </a>
                    ) : (
                      <p className="text-brand-dark font-semibold text-sm">{card.details}</p>
                    )}
                    <p className="text-[10px] text-brand-dark/60 mt-1 leading-normal">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Stantons Family Guarantee Box */}
            <div className="bg-[#455025] text-[#EAE6DF] rounded-2xl p-6 border border-[#5F752D]/40 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl" />
              <h4 className="font-display font-bold text-lg text-brand-accent mb-2">The Stantons Family Promise</h4>
              <p className="text-xs text-[#EAE6DF]/90 leading-relaxed mb-4">
                "We don't believe in cutting corners or pushy sales tactics. As a family business, our pride and family name are stamped onto every single brick we lay and fence we secure. We stand behind our work with a 100% satisfaction guarantee."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-accent/15 flex items-center justify-center border border-brand-accent/25">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-brand-accent font-bold leading-none mb-0.5">Stantons Quality Seal</p>
                  <p className="text-[11px] text-white/80 font-medium">Fully Insured, Guaranteed Workmanship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quote Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-brand-sand shadow-lg">
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-1">
              Send a Message
            </h3>
            <p className="text-brand-dark/60 text-xs sm:text-sm mb-6">
              Fill in your request below and one of our estimators will get back to you with a free site assessment estimate.
            </p>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                        errors.name ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                      }`}
                      placeholder="e.g. William Stanton"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                          errors.email ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                        }`}
                        placeholder="will@example.net"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                          errors.phone ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                        }`}
                        placeholder="e.g. 07437 048983"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service dropdown & Postcode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-brand-light focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all text-sm text-brand-dark"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                        South Yorkshire Postcode *
                      </label>
                      <input
                        type="text"
                        value={form.postcode}
                        onChange={(e) => setForm({ ...form, postcode: e.target.value.toUpperCase() })}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                          errors.postcode ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                        }`}
                        placeholder="e.g. S1 2AA"
                      />
                      {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
                    </div>
                  </div>

                  {/* Project Specifications text */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                      Your Project Details *
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm resize-none ${
                        errors.message ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                      }`}
                      placeholder="Please share dimensions or details e.g. 'I want to paving a new porcelain patio 6m by 4m, with raised garden beds...'"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy details */}
                  <div className="bg-brand-sand/30 p-3 rounded-xl border border-brand-sand flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
                    <p className="text-[10px] text-brand-dark/70 leading-normal">
                      We never sell your data. A family member from Stantons will only use these details to contact you and schedule a free inspection visit.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-brown to-brand-green hover:from-brand-green hover:to-brand-accent text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Send Message & Book Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-2xl text-brand-dark">Message Sent Safely!</h4>
                    <p className="text-brand-green font-medium text-xs uppercase tracking-wider">Stantons Estimating Team Notified</p>
                  </div>
                  <p className="text-brand-dark/70 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to us. A family member will review your project details and call you on <strong>{form.phone}</strong> or email you at <strong>{form.email}</strong> within <strong>24 hours</strong> to organize a free site assessment.
                  </p>

                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl bg-brand-sand text-brand-dark text-xs font-semibold hover:bg-brand-dark hover:text-white transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
