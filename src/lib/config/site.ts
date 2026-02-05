export const siteConfig = {
    //   BRANDING 
    brand: {
        name: "Hijra",
        logo: "/favicon.svg", 
        description: "Your trusted gateway to the Holy Lands. Facilitating spiritual journeys with comfort and peace of mind.",
        contact: {
            email: "salam@hijra.com",
            phone: "+966 50 000 0000",
            address: "Jeddah, Saudi Arabia"
        },
        credits: {
            text: "Powered By",
            company: "WURKS",
            url: "https://wurks.studio/",
            color: "#FEA6C2"
        }
    },

    //  NAVIGATION 
    nav: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Packages', href: '/packages' },
        { label: 'Contact', href: '/contact' }
    ],

    //  HERO SECTION 
    hero: {
        badge: "Hajj 2026",
        badgeSub: "Registrations Open",
        heading: {
            line1: "The journey of a",
            highlight: "lifetime."
        },
        description: "Experience the sacred pilgrimage with a focus on spirituality and comfort. We handle the complex logistics; you focus on the divine connection.",
        cta: {
            primary: "Explore Packages",
            secondary: "Our Story"
        },
        reelImages: [
            "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800",
            "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800",
            "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800",
            "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=800"
        ]
    },

    //  CTA 
    cta: {
        heading: "Ready to start your",
        highlight: "sacred journey?",
        description: "Your spiritual journey, simplified. We handle the logistics so you can focus on your worship.",
        buttonText: "Get in Touch",
        buttonLink: "/contact"
    },

    //  ABOUT PAGE 
    aboutPage: {
        header: {
            badge: "About Us",
            heading: "Bridging the",
            highlight: "distance.",
            description: "We exist to remove the worldly obstacles between you and the Sacred House. Founded on trust, delivered with excellence."
        },
        hero: {
            heading: "Serving the",
            highlight: "Guests of Allah.",
            description: "We bridge the gap between your intention and the Sacred House. Founded on trust, delivered with excellence since 2010.",
            image: "/3.jpg"
        }
    },

    //  CONTACT PAGE 
    contactPage: {
        header: {
            badge: "Contact Us",
            heading: "Let's plan your",
            highlight: "Sacred Journey.",
            description: "Whether you are ready to book or just have a question about the requirements, our team is here to serve you."
        },
        form: {
            heading: "Get in touch",
            highlight: "directly.",
            description: "Prefer to speak to a human? Our support team in Jeddah is available 24/7 to assist you.",
            labels: {
                sidebarEmail: "Email Address",
                sidebarPhone: "WhatsApp / Call",
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                interest: "Interested In",
                message: "Your Message",
                submit: "Send Message"
            },
            placeholders: {
                name: "e.g. Yusuf Ahmed",
                email: "name@example.com",
                phone: "+1 (555) 000-0000",
                message: "Tell us about your plans..."
            },
            interests: ['Hajj Package', 'Umrah Package', 'Custom Tour', 'Visa Only']
        }
    },

    //  STATS 
    stats: {
        heading: "Built on",
        highlight: "trust & tradition.",
        description: "Numbers aren't just metrics to us; they represent individual spiritual journeys facilitated with precision, care, and the Amanah (trust) placed in our hands.",
        items: [
            { 
                value: "10", 
                suffix: "+", 
                label: "Years Experience", 
                desc: "Serving the guests of Allah since 2010." 
            },
            { 
                value: "15", 
                suffix: "+", 
                label: "Global Reach", 
                desc: "Pilgrims served from over 15 different nations." 
            },
            { 
                value: "100", 
                suffix: "%", 
                label: "Satisfaction", 
                desc: "Based on post-Hajj feedback surveys." 
            }
        ]
    },

    //  PROCESS SECTION 
    process: {
        label: "The Roadmap",
        heading: "Your path to the",
        highlight: "Sacred House.",
        steps: [
            {
                num: "01",
                title: "Consultation",
                desc: "We begin by understanding your intention. Whether it's Hajj or Umrah, we align on your budget and spiritual requirements."
            },
            {
                num: "02",
                title: "Processing",
                desc: "We handle the bureaucracy. From visa applications to vaccination records, our team ensures every document is compliant."
            },
            {
                num: "03",
                title: "The Journey",
                desc: "Depart with peace of mind. Our on-ground team receives you in Jeddah and remains by your side until your return."
            }
        ]
    },

    //  VALUES SECTION 
    values: {
        heading: "Guiding",
        highlight: "Principles.",
        description: "The four pillars that define our service and uphold every journey we craft.",
        items: [
            {
                title: "Amanah",
                label: "Trust",
                desc: "Your journey is a sacred trust. We honor it with transparency and unwavering reliability.",
                img: "/1.jpg" 
            },
            {
                title: "Ihsan",
                label: "Excellence",
                desc: "Perfection in every detail. From the logistics of your flight to the quality of your stay.",
                img: "/2.jpg"
            },
            {
                title: "Khidmah",
                label: "Service",
                desc: "Serving the guests of Ar-Rahman is not a job; it is the highest honor we cherish.",
                img: "/3.jpg"
            },
            {
                title: "Ilm",
                label: "Knowledge",
                desc: "Authentic scholarship ensures every ritual of your Manasik is performed correctly.",
                img: "/4.jpg"
            }
        ]
    },

    //  TEAM SECTION 
    team: {
        heading: "Leadership.",
        description: "The experts ensuring your peace of mind.",
        members: [
            { name: "Sheikh Abdullah", role: "Head of Guidance" },
            { name: "Yusuf Rahman", role: "Operations Director" },
            { name: "Fatima Zahra", role: "Pilgrim Experience" },
            { name: "Omar Farooq", role: "Logistics Lead" }
        ]
    },

    //  FAQ SECTION 
    faq: {
        heading: "Your questions,",
        highlight: "answered.",
        description: "We believe transparency is key to a spiritual journey. Here is how we handle the details so you don't have to.",
        sidebar: {
            label: "Key Information",
            heading: "Support &",
            headingHighlight: "Guidance.",
            description: "Specifics regarding visa processing, accommodation standards, and health requirements.",
            widget: {
                title: "Hajj Concierge",
                subtitle: "Need a tailored itinerary for your family? Our specialists are ready to assist.",
                buttonText: "Book Consultation",
                status: "Online Now"
            }
        },
        items: [
            {
                question: "What documents are required for the visa?",
                answer: "You need a valid passport (6+ months validity), recent passport photos, vaccination certificates (Meningitis, COVID-19), and a confirmed travel package. We handle the entire visa application process for you."
            },
            {
                question: "When should I book my package?",
                answer: "We recommend booking 6-8 months in advance for Hajj due to limited government quotas. For Umrah, booking 2-3 months ahead is ideal to secure the best flight rates and proximity to the Haram."
            },
            {
                question: "What is included in the packages?",
                answer: "Our curated packages include round-trip flights, verified hotel accommodations near the Haram, private ground transportation, visa processing, guided Ziyarat tours, and 24/7 on-ground support."
            },
            {
                question: "Guidance for first-time pilgrims?",
                answer: "Absolutely. We offer comprehensive pre-departure seminars covering rituals, duas, health tips, and logistical expectations. Our team is available throughout your journey for any questions."
            },
            {
                question: "What health precautions should I take?",
                answer: "Mandatory vaccinations include Meningitis ACWY. We recommend being physically fit, packing necessary medications, and purchasing travel insurance. Our team provides a detailed health checklist."
            },
            {
                question: "Can I customize my travel package?",
                answer: "Yes. We offer customizable options for hotel star ratings, flight classes, group size, and additional nights. Contact our team to tailor your perfect spiritual journey."
            },
            {
                question: "What support is available on-ground?",
                answer: "Our dedicated team is available 24/7 in Makkah and Madinah. We provide on-ground assistance, guided tours, and emergency support throughout your stay."
            },
            {
                question: "Cancellation and refund policy?",
                answer: "Cancellation policies vary by package type. Generally, full refunds minus visa fees are available up to 60 days before departure. We offer flexible rebooking options for emergencies."
            }
        ]
    },

    //  TESTIMONIALS SECTION 
    testimonials: {
        label: "Testimonials",
        heading: "Trusted by the",
        highlight: "Ummah.",
        stats: {
            value: "4.9",
            label: "Excellent",
            sub: "On TrustPilot"
        },
        items: [
            {
                name: "Yusuf Ahmed",
                role: "Hajj Package",
                location: "London, UK",
                quote: "The proximity to the Haram was unbelievable. Hijra didn't just book a hotel; they curated an environment where I could focus entirely on my Ibadah. It felt like a sanctuary."
            },
            {
                name: "Fatima Zahra",
                role: "Premium Umrah",
                location: "Dubai, UAE",
                quote: "Walking distance to the Kaaba, and the ground team treated us with the hospitality of the Ansar."
            },
            {
                name: "Zaid Ibrahim",
                role: "Group Leader",
                location: "Cape Town, SA",
                quote: "I have led groups for 10 years. Hijra's attention to logistical detail is unmatched in the industry."
            }
        ],
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1000&auto=format&fit=crop",
                label: "The Holy City",
                alt: "Makkah al-Mukarramah"
            },
            {
                src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
                label: "Global Reach",
                alt: "15+ Countries Served"
            }
        ]
    },

    //  FOOTER SECTION 
    socials: [
        { icon: 'mdi:linkedin', color: '#0077b5', label: 'LinkedIn', href: '#' },
        { icon: 'mdi:instagram', color: '#E4405F', label: 'Instagram', href: '#' },
        { icon: 'mdi:twitter', color: '#1DA1F2', label: 'Twitter', href: '#' },
        { icon: 'mdi:youtube', color: '#FF0000', label: 'YouTube', href: '#' }
    ],
    footerNav: [
        {
            label: 'Services',
            items: [
                { label: 'Umrah Packages', href: '#' },
                { label: 'Hajj Services', href: '#' },
                { label: 'Visa Processing', href: '#' }
            ]
        },
        {
            label: 'Company',
            items: [
                { label: 'About PBIS', href: '#' },
                { label: 'Our Mission', href: '#' },
                { label: 'Testimonials', href: '#' }
            ]
        },
        {
            label: 'Support',
            items: [
                { label: 'Pilgrim Guide', href: '#' },
                { label: 'Contact Us', href: '#' },
                { label: 'FAQ', href: '#' }
            ]
        }
    ]
};