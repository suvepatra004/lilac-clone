# ⚕️ Dr. Maya Reynolds - Clinical Psychology Practice

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)

**A modern, responsive landing page for a licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy.**

[View Demo](http://lilac-clone-seven.vercel.app/) · [Report Bug](https://github.com/suvepatra004/lilac-clone/issues) · [Request Feature](https://github.com/suvepatra004/lilac-clone/issues)

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Key Sections](#key-sections)
- [SEO Optimization](#seo-optimization)
- [Performance](#performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## 🎯 About The Project

This is a professional, SEO-optimized landing page built for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, California. The website serves as a digital presence for her therapy practice, specializing in evidence-based treatment for anxiety disorders, trauma/PTSD, professional burnout, and high-pressure stress management.

### Why This Project?

- **Client-Focused Design**: Clean, calming aesthetic that reflects the therapeutic environment
- **Conversion-Optimized**: Strategic CTAs and user flow to encourage consultation bookings
- **SEO-First Approach**: Comprehensive meta tags, structured data, and keyword optimization
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance**: Optimized for Core Web Vitals and fast page load times

## ✨ Features

### 🎨 Design & UX

- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion-powered animations with `whileInView` triggers
- **Custom Color Palette**: Therapeutic color scheme with muted greens, burnt orange accents, and soft backgrounds
- **Accessible Design**: Keyboard navigation, screen reader support, and semantic HTML

### 📄 Page Sections

1. **Hero Section**: Eye-catching introduction with therapist photo and primary CTA
2. **Office Gallery**: Visual showcase of the Santa Monica therapy office
3. **My Specialties**: Four-card grid highlighting core therapeutic services
4. **Client Testimonials**: Social proof with fictional client experiences
5. **About Me**: Expandable bio with "Read More" toggle functionality
6. **FAQs**: Accordion-style answers to common therapy questions
7. **Contact Form**: Client-side validated form with inquiry type dropdown
8. **Footer**: Contact info, social links, and navigation

### 🔧 Technical Features

- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Image Optimization**: Next.js Image component with lazy loading and fallbacks
- **Form Validation**: Real-time client-side validation with error messaging
- **Dynamic Components**: Code-splitting with Next.js `dynamic()` imports
- **Analytics Ready**: Vercel Speed Insights integration

## 🛠 Tech Stack

| Category       | Technology                                                       |
| -------------- | ---------------------------------------------------------------- |
| **Framework**  | [Next.js 14](https://nextjs.org/) (App Router - Pages Directory) |
| **UI Library** | [React 18](https://react.dev/)                                   |
| **Styling**    | [Tailwind CSS 3.4](https://tailwindcss.com/)                     |
| **Animations** | [Framer Motion 11](https://www.framer.com/motion/)               |
| **Deployment** | [Vercel](https://vercel.com/)                                    |
| **Analytics**  | [@vercel/speed-insights](https://vercel.com/docs/speed-insights) |
| **Language**   | JavaScript (ES6+)                                                |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0 or higher)
- **npm** or **yarn** or **pnpm**

```bash
node --version  # Should be v18.0+
npm --version
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/suvepatra004/lilac-clone.git
   cd lilac-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running Locally

1. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. **Open your browser**

   ```
   Navigate to http://localhost:3000
   ```

3. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Project Structure

```
lilac-clone/
├── public/
│   ├── hero.png                    # Hero section doctor image
│   ├── office1.jpeg                # Office gallery images
│   ├── office2.jpeg
│   ├── testimonial1.jpg            # Client testimonial photos
│   ├── testimonial2.jpg
│   ├── testimonial3.jpg
│   ├── about-dr-maya.jpg           # About section image
│   └── faq-therapy-santa-monica.jpg
│
├── src/
│   ├── pages/
│   │   ├── _app.js                 # App wrapper component
│   │   ├── _document.js            # HTML document structure
│   │   ├── index.js                # Main landing page
│   │   ├── MySpecialities.jsx      # Specialties section component
│   │   ├── MyWork.jsx              # Testimonials section component
│   │   ├── AboutMe.jsx             # About section component
│   │   ├── FAQs.jsx                # FAQ accordion component
│   │   └── ContactUs.jsx           # Contact form + footer component
│   │
│   └── styles/
│       └── globals.css             # Global styles + Tailwind config
│
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── jsconfig.json                   # JavaScript configuration
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Dependencies
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── README.md                       # Project documentation
```

## 🔑 Key Sections

### 1. **My Specialties**

Four-card responsive grid showcasing:

- Anxiety & Panic Disorders
- Trauma & PTSD Treatment
- Burnout & Professional Stress
- Mindfulness & Somatic Therapy

### 2. **Client Testimonials**

Three testimonial cards with:

- Client photo (with fallback to initials)
- Name and date
- Short, impactful quotes

### 3. **About Me**

Expandable bio section featuring:

- Professional credentials
- Therapeutic approach
- Office location and availability
- "Read More" toggle for full bio

### 4. **FAQs**

Accordion-style answers to 7 key questions:

- First session expectations
- Telehealth availability
- Session frequency
- Insurance/payment
- Therapy approaches
- Office location
- Confidentiality

### 5. **Contact Form**

Features:

- Email validation
- Custom inquiry type dropdown (FAQ-style)
- Message textarea with character limit
- Success/error state handling
- Privacy disclaimer

## 🔍 SEO Optimization

### Implemented SEO Features

✅ **Meta Tags**

- Title, description, keywords
- Author and viewport settings
- Canonical URL

✅ **Open Graph**

- og:title, og:description, og:image
- og:type (website)
- og:locale

✅ **Twitter Cards**

- twitter:card, twitter:title
- twitter:description, twitter:image

✅ **JSON-LD Structured Data**

- `@type: ProfessionalService`
- Local business information
- Service offerings
- Opening hours
- Geographic coordinates

✅ **Keyword Strategy**

Target keywords naturally integrated:

- "psychologist Santa Monica"
- "anxiety therapy California"
- "trauma therapist"
- "EMDR therapy"
- "burnout treatment"
- "telehealth therapy California"

---

## ⚡ Performance

### Optimization Techniques

1. **Image Optimization**
   - Next.js `<Image>` component with automatic WebP/AVIF
   - Lazy loading for below-fold images
   - Priority loading for hero image

2. **Code Splitting**
   - Dynamic imports for below-fold components
   - Reduced initial JavaScript bundle

3. **Animation Performance**
   - GPU-accelerated CSS transforms
   - `will-change` hints for complex animations
   - Reduced motion support for accessibility

4. **Fonts**
   - Optimized font loading with `next/font`
   - Font display swap

### Performance Scores

| Metric                   | Target  | Status |
| ------------------------ | ------- | ------ |
| First Contentful Paint   | < 1.8s  | ✅     |
| Largest Contentful Paint | < 2.5s  | ✅     |
| Total Blocking Time      | < 200ms | ✅     |
| Cumulative Layout Shift  | < 0.1   | ✅     |

## 🚢 Deployment

### Deployed on Vercel

**Live URL**: [http://lilac-clone-seven.vercel.app/](http://lilac-clone-seven.vercel.app/)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/suvepatra004/lilac-clone)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Configure environment variables (if any)
4. Deploy!

### Environment Variables

No environment variables required for basic deployment. For form submission integration:

```env
# Optional: Add email service API keys
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Code Style Guidelines

- Use Prettier for formatting
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 📬 Contact

**Suvepatra Patra**

- GitHub: [@suvepatra004](https://github.com/suvepatra004)
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

**Project Link**: [https://github.com/suvepatra004/lilac-clone](https://github.com/suvepatra004/lilac-clone)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel](https://vercel.com/)
- [Lilac Template by Squarespace](https://lilac-template.squarespace.com/) (Inspiration)
- [React Icons](https://react-icons.github.io/react-icons/)

---

<div align="center">
  
  **Made with ❤️ by Suvepatra Patra**
  
  ⭐ Star this repo if you found it helpful!
  
</div>
