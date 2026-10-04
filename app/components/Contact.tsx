"use client";

import { motion } from "framer-motion";
import { Send, Linkedin, Mail, Phone, MapPin, Globe, CheckCircle2, AlertCircle, ArrowUpRight, Download, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/infoanuj74@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your internet connection or email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white text-neutral-900">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-neutral-900" />
            <span>Direct Channel</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-xl font-normal">
            Available for operations leadership, influencer marketing partnerships, and strategic consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Direct Contact Info (2 cols) */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#fafafa] rounded-2xl border border-neutral-200/80 p-7 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-heading text-xl font-bold text-neutral-950 pb-4 border-b border-neutral-200/60">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono text-neutral-500">Location</p>
                    <p className="text-neutral-950 font-medium mt-0.5">Sector 62, Noida, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono text-neutral-500">Email</p>
                    <a 
                      href="mailto:infoanuj74@gmail.com" 
                      className="text-neutral-950 font-medium hover:underline mt-0.5 block"
                    >
                      infoanuj74@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono text-neutral-500">Phone</p>
                    <a 
                      href="tel:+916393082589" 
                      className="text-neutral-950 font-medium hover:underline mt-0.5 block"
                    >
                      +91 6393082589
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Linkedin className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono text-neutral-500">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/anuj-yadav-b8288930a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-950 font-medium hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      Anuj Yadav
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Globe className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono text-neutral-500">Portfolio</p>
                    <a 
                      href="https://anujportfolio001.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-950 font-medium hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      anujportfolio001.netlify.app
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-neutral-200/60">
                <a
                  href="https://drive.google.com/file/d/1myNMIpEIrMn89H4ZOqMcDMzoqtStVfFw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-50 transition-colors shadow-2xs"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Form (3 cols) */}
          <div className="md:col-span-3">
            <div className="bg-[#fafafa] rounded-2xl border border-neutral-200/80 p-7 sm:p-9 shadow-xs">
              {status === "success" ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-8 h-8 text-neutral-950" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-neutral-950">Message Sent Successfully</h4>
                  <p className="text-sm text-neutral-600 max-w-sm font-normal">
                    Thank you for reaching out. I will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-mono uppercase tracking-wider text-neutral-950 underline hover:text-neutral-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 transition-all resize-none shadow-2xs"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-neutral-100 border border-neutral-300 text-xs text-neutral-800">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-neutral-950 text-white font-semibold py-3.5 rounded-xl text-sm hover:bg-neutral-800 disabled:bg-neutral-400 transition-all shadow-md shadow-neutral-950/10 active:scale-[0.99]"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Anuj Yadav. All rights reserved.</p>
          <p>Sector 62, Noida • +91 6393082589 • infoanuj74@gmail.com</p>
        </div>

      </div>
    </section>
  );
}
