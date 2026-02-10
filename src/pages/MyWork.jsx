"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Chen",
        date: "11/2025",
        image: "/testimonial1.jpg",
        quote:
            "Dr. Reynolds helped me understand my anxiety in a way that finally made sense. Her approach is both practical and deeply compassionate.",
    },
    {
        name: "Michael Torres",
        date: "10/2025",
        image: "/testimonial2.jpg",
        quote:
            "After years of burnout, I found clarity and balance through our work together. The EMDR sessions were transformative for processing my past trauma.",
    },
    {
        name: "Emily Patel",
        date: "12/2025",
        image: "/testimonial3.jpg",
        quote:
            "As a high-achieving professional, I struggled with perfectionism and constant stress. Dr. Reynolds created a safe space where I could finally slow down and heal.",
    },
];

const MyWork = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
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
                        Client Experiences
                    </h2>
                    <p className="text-base sm:text-lg text-[#2D3436]/80 max-w-2xl mx-auto">
                        Real stories from individuals who found healing and growth through
                        therapy in Santa Monica.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="flex flex-col items-center text-center bg-background2 border border-[#4A7C7E]/10 p-8 hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image - Conditional Rendering */}
                            <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 overflow-hidden bg-[#4A7C7E]/10 flex items-center justify-center">
                                <Image
                                    src={testimonial.image}
                                    fill
                                    sizes="(max-width: 768px) 128px, 144px"
                                    className="object-cover"
                                    alt={`${testimonial.name} - Client testimonial`}
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                        e.currentTarget.nextElementSibling.style.display = "flex";
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="absolute inset-0 hidden items-center justify-center text-4xl text-[#4A7C7E]/40 font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                            </div>

                            {/* Name and Date */}
                            <div className="flex items-center justify-center gap-3 mb-5">
                                <h4 className="text-lg md:text-xl font-semibold text-[#2D3436]">
                                    {testimonial.name}
                                </h4>
                                <span className="text-sm text-[#2D3436]/60">
                                    {testimonial.date}
                                </span>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-base md:text-lg text-[#2D3436]/80 leading-relaxed italic">
                                "{testimonial.quote}"
                            </blockquote>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-center mt-12 md:mt-14"
                >
                    <p className="text-sm md:text-base text-[#2D3436]/60 italic max-w-xl mx-auto">
                        Names and identifying details have been changed to protect client
                        confidentiality.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Dividing Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A7C7E]/30 to-transparent"></div>
        </section>
    );
};

export default MyWork;
