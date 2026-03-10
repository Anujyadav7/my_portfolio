"use client";

import { motion } from "framer-motion";
import { Send, Linkedin, Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";
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
          _subject: "New Portfolio Message from " + formData.name
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
      setErrorMessage("Something went wrong. Please ensure you have internet access and try again.");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white relative z-10 border-t border-gray-100">
       <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
             Let's Connect
           </h2>
           <p className="text-gray-600 text-lg">
             Ready to scale your operations and automate your workflows?
           </p>
         </motion.div>

         <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-xl shadow-gray-100/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
               <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 text-gray-700">
                       <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex flex-shrink-0 items-center justify-center">
                          <Mail className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                         <a href="mailto:infoanuj74@gmail.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                           infoanuj74@gmail.com
                         </a>
                       </div>
                    </div>

                    <div className="flex items-start gap-4 text-gray-700">
                       <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex flex-shrink-0 items-center justify-center">
                          <Phone className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                         <a href="tel:+916393082589" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                           +91 6393082589
                         </a>
                       </div>
                    </div>

                    <div className="flex items-start gap-4 text-gray-700">
                       <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex flex-shrink-0 items-center justify-center">
                          <Linkedin className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-medium text-gray-500 mb-1">LinkedIn</p>
                         <a 
                           href="https://www.linkedin.com/in/anuj-yadav-b8288930a/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                         >
                           Anuj Yadav
                         </a>
                       </div>
                    </div>
                  </div>
               </div>

               <div>
                 {status === "success" ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 border border-green-100 rounded-2xl"
                   >
                     <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                     <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                     <p className="text-gray-600">Thank you for reaching out. I'll get back to you shortly.</p>
                     <button 
                       onClick={() => setStatus("idle")}
                       className="mt-8 text-green-700 hover:text-green-800 font-medium transition-colors"
                     >
                       Send another message
                     </button>
                   </motion.div>
                 ) : (
                   <form className="space-y-5" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="How can we collaborate?"
                        />
                      </div>
                      
                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <p>{errorMessage}</p>
                        </div>
                      )}

                      <button 
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-blue-600 text-white font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all shadow-sm shadow-blue-600/20 active:scale-[0.98]"
                      >
                        {status === "loading" ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4" />
                      </button>
                   </form>
                 )}
               </div>
            </div>
         </div>

         <footer className="mt-20 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Anuj Yadav. All rights reserved.</p>
         </footer>
       </div>
    </section>
  );
}
