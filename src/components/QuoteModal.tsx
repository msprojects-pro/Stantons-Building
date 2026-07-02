import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Calendar, ShieldCheck, PhoneCall } from "lucide-react";
import { QuoteRequest } from "../types";
import { COMPANY_DETAILS, SERVICES_DATA } from "../data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedService = "",
}) => {
  const [form, setForm] = useState<QuoteRequest>({
    name: "",
    email: "",
    phone: "",
    service: selectedService || SERVICES_DATA[0].title,
    postcode: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteRequest, string>>>({});

  // Sync selected service if changed from parent
  React.useEffect(() => {
    if (selectedService) {
      setForm((f) => ({ ...f, service: selectedService }));
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteRequest, string>> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(?:(?:\+44\s?|0)7\d{3}\s?\d{6}|(?:(?:\+44\s?|0)[12358]\d\s?\d{3}\s?\d{3,4}))$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid UK phone number";
    }
    if (!form.postcode.trim()) {
      newErrors.postcode = "Postcode is required (South Yorkshire & surrounding areas)";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please describe your project details";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission to server & log to console
    setTimeout(() => {
      console.log("=== STANTONS QUOTE REQUEST SUBMITTED ===");
      console.log("Details:", form);
      console.log("========================================");

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
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

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-darker/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-brand-light rounded-2xl overflow-hidden shadow-2xl border border-brand-sand z-10"
          >
            {/* Top Bar Accent */}
            <div className="h-2 bg-gradient-to-r from-brand-brown via-brand-green to-brand-accent" />

            {/* Header */}
            <div className="p-6 pb-4 border-b border-brand-sand flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-brand-dark">
                  Request a Free Quote
                </h3>
                <p className="text-xs text-brand-green font-medium mt-1">
                  Family-Run • Fully Insured • South Yorkshire Specialists
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg bg-brand-sand/50 text-brand-dark/70 hover:bg-brand-sand hover:text-brand-dark transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                        errors.name ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                      }`}
                      placeholder="e.g. John Stanton"
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
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                          errors.email ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                        }`}
                        placeholder="john@example.com"
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
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                          errors.phone ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                        }`}
                        placeholder="07437 048983"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service & Postcode Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-sand bg-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all text-sm"
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
                        UK Postcode *
                      </label>
                      <input
                        type="text"
                        value={form.postcode}
                        onChange={(e) => setForm({ ...form, postcode: e.target.value.toUpperCase() })}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm ${
                          errors.postcode ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                        }`}
                        placeholder="e.g. S1 2AA"
                      />
                      {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-1.5">
                      Describe Your Project *
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition-all text-sm resize-none ${
                        errors.message ? "border-red-500" : "border-brand-sand focus:border-brand-green"
                      }`}
                      placeholder="Please include approximate dimensions or materials desired (e.g. 5x4m porcelain paving, new slatted fencing, turfing...)"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Security/Trust Badges */}
                  <div className="bg-brand-sand/30 rounded-xl p-3 flex items-center gap-3 border border-brand-sand">
                    <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
                    <p className="text-[11px] text-brand-dark/70 leading-normal">
                      We value your privacy. Stantons will never share your details. Your details are solely used to organize your free quote site visit.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-olive to-brand-green hover:from-brand-green hover:to-brand-accent text-white py-3 px-6 rounded-xl font-semibold text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Generating Request...
                      </>
                    ) : (
                      "Submit Quote Request"
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 px-4 text-center space-y-5"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mb-2 border border-brand-green/20">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-brand-dark">
                      Thank You, {form.name.split(" ")[0]}!
                    </h4>
                    <p className="text-brand-green font-medium text-sm mt-1">
                      Your quote request has been received.
                    </p>
                  </div>
                  <p className="text-sm text-brand-dark/70 max-w-sm mx-auto leading-relaxed">
                    A family member from Stantons will review your details and contact you within{" "}
                    <strong>24 hours</strong> at <strong>{form.phone}</strong> to discuss your project or arrange a free site visit.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left max-w-md mx-auto">
                    <div className="bg-brand-sand/40 border border-brand-sand/60 rounded-xl p-3 flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-brand-brown shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-brand-dark">Fast Site Visits</p>
                        <p className="text-[10px] text-brand-dark/70">Flexible times tailored to you</p>
                      </div>
                    </div>
                    <div className="bg-brand-sand/40 border border-brand-sand/60 rounded-xl p-3 flex items-start gap-3">
                      <PhoneCall className="w-4 h-4 text-brand-brown shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-brand-dark">Need us sooner?</p>
                        <p className="text-[10px] text-brand-dark/70">Call us on {COMPANY_DETAILS.phoneDisplay}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="mt-6 inline-flex items-center justify-center bg-brand-dark text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-brown transition-colors duration-300"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
