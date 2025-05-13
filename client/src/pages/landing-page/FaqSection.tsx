import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll"; // Adjust path if needed

const faqs = [
  {
    question: "What is a Bit?",
    answer:
      "A Bit is any personal link you want to share — your content, portfolio, social media, or anything else. Think of it as a building block of your digital identity.",
  },
  {
    question: "What is a Bundle?",
    answer:
      "A Bundle is your personalized page that holds all your Bits. It’s beautifully designed, easy to share, and customizable to reflect your brand or personality.",
  },
  {
    question: "Why use a link-in-bio tool like Bundlebit?",
    answer:
      "Most platforms allow only one bio link — Bundlebit lets you turn that one link into a hub for everything you do online.",
  },
  {
    question: "Is Bundlebit free to use?",
    answer:
      "Yes! You can create and share your Bundle for free. We also plan to offer more features for users who want advanced customization and analytics.",
  },
  {
    question: "Can I sell products or accept payments through my Bundle?",
    answer:
      "We're working on it! Soon you’ll be able to add Bits that link to products, donation pages, or your storefront.",
  },
  {
    question: "Is Bundlebit safe to use on all my social media profiles?",
    answer:
      "Absolutely. Bundlebit links are secure, mobile-friendly, and optimized for all major platforms.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-first-accent/20 to-third-blue/20 rounded-3xl p-8 md:p-12 relative overflow-hidden w-full">
        <RevealOnScroll direction="up">
          <div className="text-center mb-12 w-full">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-first-text-color">
              Got questions?
            </motion.h2>
            <p className="mt-4 text-first-text-color/70 max-w-xl mx-auto">
              Everything you need to know about Bits, Bundles, and making the
              most of your link-in-bio.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto space-y-4 w-full">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="border border-first-section-divider rounded-xl p-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full text-left text-first-text-color font-medium text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl"
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-3 text-first-text-color/70 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
