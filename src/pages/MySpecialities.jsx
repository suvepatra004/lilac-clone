"use client";
import { motion } from "framer-motion";

const specialties = [
    {
        title: "Anxiety & Panic Disorders",
        description:
            "Evidence-based therapy for generalized anxiety, panic attacks, and chronic worry. Helping high-achieving adults in Santa Monica reduce overwhelm and restore calm through CBT and mindfulness techniques.",
    },
    {
        title: "Trauma & PTSD Treatment",
        description:
            "Trauma-focused therapy using EMDR and body-oriented approaches for single-incident and complex trauma. Compassionate support for adults navigating the lasting effects of difficult experiences.",
    },
    {
        title: "Burnout & Professional Stress",
        description:
            "Specialized support for entrepreneurs, creatives, and professionals experiencing burnout, perfectionism, and high internal pressure. Therapy to help you reconnect and build sustainable work-life balance.",
    },
    {
        title: "Mindfulness & Somatic Therapy",
        description:
            "Integrative approaches combining cognitive-behavioral therapy with body-based techniques. Address both emotional and physiological symptoms to help you feel more grounded and regulated.",
    },
];

const MySpecialities = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

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
                        My Specialties
                    </h2>
                    <p className="text-base sm:text-lg text-[#2D3436]/80 max-w-2xl mx-auto">
                        Specialized psychological services for adults in Santa Monica and
                        across California through secure telehealth.
                    </p>
                </motion.div>

                {/* Specialties Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {specialties.map((specialty, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-background border border-[#4A7C7E]/10 p-8 md:p-10 hover:border-[#4A7C7E]/30 transition-all duration-300 hover:shadow-lg"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-[#4A7C7E] mb-4">
                                {specialty.title}
                            </h3>
                            <p className="text-base md:text-lg text-[#2D3436]/80 leading-relaxed">
                                {specialty.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-base md:text-lg text-[#2D3436]/80 max-w-2xl mx-auto">
                        Learn how my evidence-based approach can help you reduce worry,
                        process trauma, and restore balance in Santa Monica, CA.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Dividing Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A7C7E]/30 to-transparent"></div>
        </section>
    );
};

export default MySpecialities;
