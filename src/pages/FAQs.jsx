"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const faqData = [
    {
        question: "What can I expect in my first therapy session?",
        answer:
            "Your first session is a chance for us to get acquainted and for me to understand what brings you to therapy. We'll discuss your current concerns, background, and goals. I'll explain my approach and answer any questions you have about the process. Many clients describe the first session as a relief—a chance to be heard without judgment.",
    },
    {
        question: "Do you offer telehealth therapy in California?",
        answer:
            "Yes, I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in California. Telehealth provides flexibility and accessibility while maintaining the same quality of care as in-person sessions. I also offer in-person therapy at my Santa Monica office for those who prefer face-to-face sessions.",
    },
    {
        question: "How many sessions will I need for anxiety or trauma?",
        answer:
            "The number of sessions varies based on individual needs and goals. Some clients experience relief within 8-12 sessions, while deeper trauma work may take longer. We'll regularly check in on your progress and adjust our approach as needed. My goal is to help you build sustainable skills and resilience, not create long-term dependency.",
    },
    {
        question: "What insurance do you accept, or do you offer private pay?",
        answer:
            "I accept select insurance plans and also offer private pay options for clients who prefer to use out-of-network benefits or self-pay. During our initial consultation, we can discuss billing options, superbills for reimbursement, and sliding scale availability based on your financial situation.",
    },
    {
        question: "What therapy approaches do you use?",
        answer:
            "I integrate evidence-based methods including Cognitive-Behavioral Therapy (CBT), EMDR for trauma processing, mindfulness-based practices, and body-oriented techniques. My approach is tailored to each client's unique needs, combining practical tools with deeper emotional work to address both symptoms and root causes.",
    },
    {
        question: "Where is your office located in Santa Monica?",
        answer:
            "My office is located at 123th Street 45 W, Santa Monica, CA 90401. The space is designed to be calm, private, and grounding—with natural light and a comfortable environment. Parking is available nearby, and the office is easily accessible from surrounding Los Angeles areas.",
    },
    {
        question: "Is therapy confidential and secure?",
        answer:
            "Yes, all therapy sessions—both in-person and telehealth—are completely confidential and HIPAA-compliant. I use secure, encrypted platforms for virtual sessions. Confidentiality is only broken in rare circumstances required by law, such as risk of harm to self or others, which I would discuss with you first whenever possible.",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [imageError, setImageError] = useState(false);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative px-[5%] py-16 md:py-20 bg-background overflow-hidden">
            {/* Top Dividing Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A7C7E]/30 to-transparent"></div>

            <div className="mx-auto max-w-[1500px]">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D3436] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-lg text-[#2D3436]/80 max-w-2xl mx-auto">
                        Common questions about therapy services in Santa Monica, CA
                    </p>
                </motion.div>

                {/* Two Column Layout: Image Left, FAQs Right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14 items-start">
                    {/* Left: Image Column - Takes 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative w-full aspect-4/5 overflow-hidden bg-[#4A7C7E]/10 flex items-center justify-center top-8">
                            {!imageError ? (
                                <Image
                                    src="/faq-therapy-santa-monica.jpg"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                    alt="Therapy consultation in Santa Monica - Dr. Maya Reynolds office"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="text-center p-8">
                                    <div className="text-6xl text-[#4A7C7E]/40 mb-4">💬</div>
                                    <p className="text-lg text-[#2D3436]/60">
                                        Frequently Asked Questions
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right: FAQs Accordion Column - Takes 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 space-y-4"
                    >
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-[#4A7C7E]/20 bg-background2 overflow-hidden"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex justify-between items-center hover:bg-[#4A7C7E]/5 transition-colors duration-200"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-base md:text-lg font-semibold text-[#2D3436] pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-2xl text-[#4A7C7E] shrink-0"
                                    >
                                        {openIndex === index ? "−" : "+"}
                                    </motion.span>
                                </button>

                                {/* Answer with Animation */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                                                <p className="text-base md:text-lg text-[#2D3436]/80 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA After FAQs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-base md:text-lg text-[#2D3436]/80 mb-6">
                        Have more questions? Schedule an initial consultation to discuss how
                        therapy can support your goals.
                    </p>
                    <motion.a
                        href="#contact"
                        initial="rest"
                        whileHover="hover"
                        className="relative inline-flex items-center justify-center overflow-hidden border-2 border-[#4A7C7E] px-8 py-4 font-semibold text-base tracking-wide text-[#4A7C7E] transition-colors duration-300 hover:text-white"
                    >
                        <motion.span
                            variants={{
                                rest: { scaleX: 0, originX: 0 },
                                hover: { scaleX: 1, originX: 0 },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 bg-[#4A7C7E]"
                        />
                        <span className="relative z-10">BOOK CONSULTATION</span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Bottom Dividing Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A7C7E]/30 to-transparent"></div>
        </section>
    );
};

export default FAQs;
