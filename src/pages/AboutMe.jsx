"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AboutMe = () => {
    const [imageError, setImageError] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="relative px-[5%] py-16 md:py-20 bg-background2 overflow-hidden">
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
                        About Dr. Maya Reynolds
                    </h2>
                    <p className="text-base sm:text-lg text-[#2D3436]/80 max-w-2xl mx-auto">
                        Licensed Clinical Psychologist serving Santa Monica and California
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14 items-start">
                    {/* Image Column - Takes 2 columns on large screens */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-3/4 overflow-hidden bg-[#4A7C7E]/10 flex items-center justify-center">
                            {!imageError ? (
                                <Image
                                    src="/"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, California"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="text-center p-8">
                                    <div className="text-6xl text-[#4A7C7E]/40 mb-4">👤</div>
                                    <p className="text-lg text-[#2D3436]/60">
                                        Dr. Maya Reynolds
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Text Column - Takes 3 columns on large screens */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        {/* Credentials */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-[#4A7C7E] mb-2">
                                Dr. Maya Reynolds, PsyD
                            </h3>
                            <p className="text-lg text-[#2D3436]/80">
                                Licensed Clinical Psychologist
                            </p>
                            <p className="text-base text-[#2D3436]/70 mt-2">
                                <span className="font-medium">Office:</span> 123th Street 45 W,
                                Santa Monica, CA 90401
                            </p>
                        </div>

                        {/* Bio Paragraphs - Condensed Version (Always Visible) */}
                        <div className="space-y-5 text-base md:text-lg text-[#2D3436]/80 leading-relaxed">
                            <p>
                                I'm a licensed clinical psychologist based in Santa Monica,
                                California, specializing in anxiety, panic, trauma, and burnout
                                therapy for adults. Many of my clients are high-achieving
                                professionals, entrepreneurs, and creatives who appear
                                "functional" on the outside but struggle internally with chronic
                                worry, exhaustion, and the lasting effects of difficult
                                experiences.
                            </p>

                            <p>
                                My approach integrates evidence-based methods including
                                cognitive-behavioral therapy (CBT), EMDR for trauma processing,
                                mindfulness-based practices, and body-oriented techniques. I
                                work collaboratively with clients to address both the emotional
                                and physiological aspects of anxiety and trauma, helping them
                                feel more grounded and regulated in daily life.
                            </p>

                            <p>
                                Trauma work is a core part of my practice. I support adults who
                                have experienced single-incident trauma as well as complex,
                                long-standing patterns stemming from childhood, relationships,
                                or chronic stress. My approach emphasizes safety, stabilization,
                                and sustainable healing, not just symptom relief.
                            </p>

                            {/* Expanded Content (Toggleable) */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="space-y-5 overflow-hidden"
                                    >
                                        <p>
                                            Clients frequently come to me feeling overwhelmed by
                                            constant worry, tension in their body, difficulty
                                            sleeping, or a sense that they're always bracing for
                                            something to go wrong. Others are navigating professional
                                            burnout, perfectionism, and high internal pressure after
                                            years of pushing through stress.
                                        </p>

                                        <p>
                                            I offer both in-person therapy from my Santa Monica office
                                            and secure telehealth sessions for clients located
                                            anywhere in California. My office is a quiet, private
                                            space designed to feel calm and grounding, with natural
                                            light and a comfortable, uncluttered environment. Sessions
                                            are structured enough to feel supportive while leaving
                                            space for reflection and depth.
                                        </p>

                                        <p className="font-medium text-[#4A7C7E]">
                                            If you're looking for a therapist who combines practical
                                            tools with depth-oriented work and who understands the
                                            realities of living and working in a fast-paced
                                            environment, I may be a good fit.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Read More / Show Less Button */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center gap-2 text-[#4A7C7E] font-semibold hover:text-[#4A7C7E]/80 transition-colors mt-2"
                            >
                                <span>{isExpanded ? "Show Less" : "Read More"}</span>
                                <motion.svg
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </motion.svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Dividing Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A7C7E]/30 to-transparent"></div>
        </section>
    );
};

export default AboutMe;
