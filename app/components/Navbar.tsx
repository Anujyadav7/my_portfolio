"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Creators", href: "#collaborations" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs"
          : "bg-white/80 backdrop-blur-sm border-b border-neutral-200/40"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-6 lg:px-[10vw]">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="font-heading text-xl font-extrabold tracking-tight text-neutral-950 hover:opacity-80 transition-opacity flex items-center gap-1.5 shrink-0"
          >
            <span>Anuj Yadav</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 inline-block" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-neutral-100/80 p-1 rounded-full border border-neutral-200/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-1 text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors rounded-full hover:bg-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1myNMIpEIrMn89H4ZOqMcDMzoqtStVfFw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-2xs active:scale-95"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors border border-neutral-200"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-neutral-950/40 backdrop-blur-xs z-40"
              style={{ height: "100dvh" }}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-0 inset-x-0 bg-white border-b border-neutral-200 z-50 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
                <span className="font-heading text-lg font-bold text-neutral-950">Anuj Yadav</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="py-2.5 px-3 text-sm font-medium text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 mt-3 border-t border-neutral-100">
                <a
                  href="https://drive.google.com/file/d/1myNMIpEIrMn89H4ZOqMcDMzoqtStVfFw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg bg-neutral-950 text-white hover:bg-neutral-800"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
