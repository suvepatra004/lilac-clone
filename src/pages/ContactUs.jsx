"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: "",
        inquiryType: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const inquiryOptions = [
        "Initial Consultation Request",
        "Insurance & Payment Questions",
        "Telehealth Availability",
        "Anxiety & Panic Treatment",
        "Trauma & PTSD Therapy",
        "Burnout & Professional Stress",
        "General Inquiry",
    ];

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Inquiry type validation
        if (!formData.inquiryType) {
            newErrors.inquiryType = "Please select an inquiry type";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitError(false);
        setIsSubmitted(false);

        if (validateForm()) {
            // Simulate form submission
            console.log("Form submitted:", formData);

            // Show success message
            setIsSubmitted(true);

            // Reset form
            setFormData({
                email: "",
                inquiryType: "",
                message: "",
            });
            setIsDropdownOpen(false);

            // Hide success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleInquirySelect = (option) => {
        setFormData((prev) => ({
            ...prev,
            inquiryType: option,
        }));
        setIsDropdownOpen(false);
        if (errors.inquiryType) {
            setErrors((prev) => ({
                ...prev,
                inquiryType: "",
            }));
        }
    };

    return (
        <>
            <section
                id="contact"
                className="relative px-[5%] py-16 md:py-20 bg-background overflow-hidden"
            >
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
                            Get in Touch
                        </h2>
                        <p className="text-base sm:text-lg text-[#2D3436]/80 max-w-2xl mx-auto">
                            Ready to start your journey toward healing? Reach out to schedule
                            a consultation or ask any questions.
                        </p>
                    </motion.div>

                    {/* Split Layout: Contact Info + Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                        {/* Left: Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Office Address */}
                            <div>
                                <h3 className="text-2xl font-semibold text-[#4A7C7E] mb-4">
                                    Office Location
                                </h3>
                                <p className="text-base md:text-lg text-[#2D3436]/80 leading-relaxed">
                                    123th Street 45 W<br />
                                    Santa Monica, CA 90401
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div>
                                <h3 className="text-2xl font-semibold text-[#4A7C7E] mb-4">
                                    Contact Details
                                </h3>
                                <div className="space-y-2 text-base md:text-lg text-[#2D3436]/80">
                                    <p>
                                        <span className="font-medium">Phone:</span>{" "}
                                        <a
                                            href="tel:+13105551234"
                                            className="hover:text-[#4A7C7E] transition-colors"
                                        >
                                            (310) 555-1234
                                        </a>
                                    </p>
                                    <p>
                                        <span className="font-medium">Email:</span>{" "}
                                        <a
                                            href="mailto:contact@drmayareynolds.com"
                                            className="hover:text-[#4A7C7E] transition-colors"
                                        >
                                            contact@drmayareynolds.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div>
                                <h3 className="text-2xl font-semibold text-[#4A7C7E] mb-4">
                                    Office Hours
                                </h3>
                                <div className="space-y-1 text-base md:text-lg text-[#2D3436]/80">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                    <p className="text-sm text-[#2D3436]/60 mt-3 italic">
                                        Evening and weekend appointments available by request
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div>
                                <h3 className="text-2xl font-semibold text-[#4A7C7E] mb-4">
                                    Quick Links
                                </h3>
                                <nav className="flex flex-col gap-2 text-base md:text-lg">
                                    <a
                                        href="#about"
                                        className="text-[#2D3436]/80 hover:text-[#4A7C7E] transition-colors"
                                    >
                                        About Dr. Reynolds
                                    </a>
                                    <a
                                        href="#services"
                                        className="text-[#2D3436]/80 hover:text-[#4A7C7E] transition-colors"
                                    >
                                        Services & Specialties
                                    </a>
                                    <a
                                        href="#contact"
                                        className="text-[#2D3436]/80 hover:text-[#4A7C7E] transition-colors"
                                    >
                                        Contact
                                    </a>
                                </nav>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-2xl font-semibold text-[#4A7C7E] mb-4">
                                    Connect With Us
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border-2 border-[#4A7C7E] text-[#4A7C7E] hover:bg-[#4A7C7E] hover:text-white transition-all duration-300"
                                        aria-label="Facebook"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border-2 border-[#4A7C7E] text-[#4A7C7E] hover:bg-[#4A7C7E] hover:text-white transition-all duration-300"
                                        aria-label="X (Twitter)"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border-2 border-[#4A7C7E] text-[#4A7C7E] hover:bg-[#4A7C7E] hover:text-white transition-all duration-300"
                                        aria-label="Instagram"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-base md:text-lg font-medium text-[#2D3436] mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border-2 ${errors.email
                                            ? "border-red-500"
                                            : "border-[#4A7C7E]/20"
                                            } bg-background2 text-[#2D3436] focus:outline-none focus:border-[#4A7C7E] transition-colors`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Inquiry Type Dropdown (FAQ-style accordion) */}
                                <div>
                                    <label className="block text-base md:text-lg font-medium text-[#2D3436] mb-2">
                                        Inquiry Type *
                                    </label>
                                    <div
                                        className={`border-2 ${errors.inquiryType
                                            ? "border-red-500"
                                            : "border-[#4A7C7E]/20"
                                            } bg-background2 overflow-hidden`}
                                    >
                                        {/* Selected Value / Dropdown Trigger */}
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-[#4A7C7E]/5 transition-colors duration-200"
                                        >
                                            <span
                                                className={`${formData.inquiryType
                                                    ? "text-[#2D3436]"
                                                    : "text-[#2D3436]/50"
                                                    }`}
                                            >
                                                {formData.inquiryType || "Select inquiry type..."}
                                            </span>
                                            <motion.span
                                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-2xl text-[#4A7C7E]"
                                            >
                                                {isDropdownOpen ? "−" : "+"}
                                            </motion.span>
                                        </button>

                                        {/* Dropdown Options */}
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden border-t-2 border-[#4A7C7E]/20"
                                                >
                                                    <div className="max-h-60 overflow-y-auto">
                                                        {inquiryOptions.map((option, index) => (
                                                            <button
                                                                key={index}
                                                                type="button"
                                                                onClick={() => handleInquirySelect(option)}
                                                                className="w-full text-left px-4 py-3 hover:bg-[#4A7C7E]/10 transition-colors text-[#2D3436] border-b border-[#4A7C7E]/10 last:border-b-0"
                                                            >
                                                                {option}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {errors.inquiryType && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.inquiryType}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-base md:text-lg font-medium text-[#2D3436] mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className={`w-full px-4 py-3 border-2 ${errors.message
                                            ? "border-red-500"
                                            : "border-[#4A7C7E]/20"
                                            } bg-background2 text-[#2D3436] focus:outline-none focus:border-[#4A7C7E] transition-colors resize-none`}
                                        placeholder="Tell me about what brings you to therapy..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Success Message */}
                                <AnimatePresence>
                                    {isSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded"
                                        >
                                            <p className="font-medium">
                                                Thank you for reaching out!
                                            </p>
                                            <p className="text-sm mt-1">
                                                I'll respond to your inquiry within 24 hours.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap={{ scale: 0.98 }}
                                    className="relative w-full overflow-hidden border-2 border-[#4A7C7E] px-8 py-4 font-semibold text-base md:text-lg tracking-wide text-[#4A7C7E]"
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
                                    <motion.span
                                        variants={{
                                            rest: { color: "#4A7C7E" },
                                            hover: { color: "#ffffff" },
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="relative z-10"
                                    >
                                        Get in Touch
                                    </motion.span>
                                </motion.button>

                                {/* Privacy Note */}
                                <p className="text-sm text-[#2D3436]/60 text-center">
                                    Your privacy is important. All inquiries are confidential and
                                    HIPAA-compliant.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Dividing Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A7C7E]/30 to-transparent"></div>
            </section>

            {/* Footer */}
            <footer className="px-[5%] py-8 bg-[#2D3436] text-center">
                <div className="mx-auto max-w-[1500px]">
                    <p className="text-base text-white/80">
                        © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.
                    </p>
                    <p className="text-sm text-white/60 mt-2">
                        Licensed Clinical Psychologist | Santa Monica, California
                    </p>
                </div>
            </footer>

        </>
    );
};

export default ContactUs;
