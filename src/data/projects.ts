export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveLink?: string;
  githubLink: string;
  features: string[];
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Legal Support",
    description: "Professional legal assistance services including compliance, contracts, and documentation support.",
    image: "",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    category: "Full Stack",
    githubLink: "https://github.com/RESHAM-KUMARI/kk-legal-support",
    features: [
      "Legal compliance management",
      "Contract documentation system",
      "Business legal support",
      "Document automation"
    ],
    fullDescription: "A comprehensive legal support platform built with Java Spring Boot and React.js. It helps businesses manage legal compliance, contracts, and documentation efficiently."
  },
  {
    id: 2,
    title: "Bank Simulation Mobile App",
    description: "Mobile banking app with user registration, login, account management, and transactions.",
    image: "",
    technologies: ["React Native", "Java", "Spring Boot", "MySQL"],
    category: "Mobile App",
    githubLink: "https://github.com/RESHAM-KUMARI/bankSimulation-main",
    features: [
      "User registration & login",
      "Account management",
      "Money transfer",
      "Transaction history",
      "Balance check",
      "Secure authentication"
    ],
    fullDescription: "A complete mobile banking application built with React Native for frontend and Java Spring Boot for backend. Users can register, login, manage accounts, transfer money, and view transaction history."
  },
  {
    id: 3,
    title: "Quiz Management System",
    description: "Quiz platform with Java for managing quizzes, questions, and real-time scoring.",
    image: "",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    category: "Backend",
    githubLink: "https://github.com/RESHAM-KUMARI/quiz-backend-main",
    features: [
      "Quiz management",
      "Question bank",
      "Real-time scoring",
      "User results tracking",
      "Multiple quiz types"
    ],
    fullDescription: "A robust quiz management system built with Java Spring Boot and Hibernate. It handles quiz creation, question management, real-time scoring, and user result tracking."
  },
  {
    id: 4,
    title: "Padho India",
    description: "Educational platform for Indian students with career guidance and exam preparation.",
    image: "",
    technologies: ["Java", "React.js", "Spring Boot", "MySQL"],
    category: "Full Stack",
    githubLink: "https://github.com/RESHAM-KUMARI/kk-padho-india",
    features: [
      "Career guidance",
      "Exam preparation",
      "Scholarship database",
      "College directory",
      "Study materials"
    ],
    fullDescription: "An educational platform helping Indian students with career guidance, exam preparation resources, scholarship information, and college directory."
  },
  // {
  //   id: 5,
  //   title: "Food Delivery Mobile App",
  //   description: "React Native mobile app for food delivery with restaurant listing and order tracking.",
  //   image: "",
  //   technologies: ["React Native", "Java", "Spring Boot", "REST APIs"],
  //   category: "Mobile App",
  //   githubLink: "https://github.com/RESHAM-KUMARI/food-delivery-app",
  //   features: [
  //     "Restaurant listing",
  //     "Order placement",
  //     "Real-time tracking",
  //     "Payment integration",
  //     "Cart management"
  //   ],
  //   fullDescription: "A complete food delivery mobile app built with React Native. Features restaurant browsing, order placement, real-time order tracking, and payment integration."
  // },
  {
    id: 6,
    title: "Tuition Website",
    description: "Platform connecting students with qualified tutors for personalized learning.",
    image: "",
    technologies: ["Java", "JSP", "Servlet", "JDBC", "MySQL"],
    category: "Full Stack",
    githubLink: "https://github.com/RESHAM-KUMARI/KK-TUTION-WEBSITE-main",
    features: [
      "Tutor-student connection",
      "Personalized learning",
      "Exam board filters",
      "Tutor profiles",
      "Booking system"
    ],
    fullDescription: "A tuition platform connecting students with qualified tutors. Built with Java JSP, Servlets, and MySQL. Features tutor profiles, student search, and booking system."
  },
  {
    id: 7,
    title: "Online Alliance Website",
    description: "Web platform for cross-platform application development and business alliance management.",
    image: "",
    technologies: ["Java", "React.js", "Spring Boot", "MySQL"],
    category: "Web Development",
    githubLink: "https://github.com/RESHAM-KUMARI/mkk-online-alliance",
    features: [
      "Business alliance management",
      "Project showcase",
      "User dashboard",
      "Real-time updates",
      "Team collaboration"
    ],
    fullDescription: "A web platform for managing business alliances and showcasing cross-platform development projects. Built with Java Spring Boot and React.js."
  },
  // {
  //   id: 8,
  //   title: "E-Commerce Mobile App",
  //   description: "React Native e-commerce app with product listing, cart, and order management.",
  //   image: "",
  //   technologies: ["React Native", "Java", "Spring Boot", "MySQL"],
  //   category: "Mobile App",
  //   githubLink: "https://github.com/RESHAM-KUMARI/ecommerce-mobile-app",
  //   features: [
  //     "Product listing",
  //     "Shopping cart",
  //     "Order management",
  //     "User authentication",
  //     "Wishlist"
  //   ],
  //   fullDescription: "A complete e-commerce mobile application built with React Native. Features product browsing, shopping cart, order management, and secure user authentication."
  // },
  // {
  //   id: 9,
  //   title: "Student Management System",
  //   description: "Full-stack application to manage student records with CRUD operations.",
  //   image: "",
  //   technologies: ["Java", "JSP", "Servlet", "JDBC", "MySQL"],
  //   category: "Full Stack",
  //   githubLink: "https://github.com/RESHAM-KUMARI/student-management-system",
  //   features: [
  //     "CRUD operations",
  //     "Admin authentication",
  //     "Student record management",
  //     "Search & filter",
  //     "Fee management"
  //   ],
  //   fullDescription: "A complete student management system built with Java, JSP, Servlets, and MySQL. Features include student registration, grade management, attendance tracking, and admin dashboard."
  // },
  {
    id: 10,
    title: "AI Recruiting Platform",
    description: "Job portal with resume upload, AI-powered job search, and application tracking.",
    image: "",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    category: "Full Stack",
    githubLink: "https://github.com/RESHAM-KUMARI/login-signup.git",
    features: [
      "Resume upload",
      "AI job matching",
      "Job search filters",
      "Admin dashboard",
      "Application tracking",
      "Candidate shortlisting"
    ],
    fullDescription: "An AI-powered recruiting platform built with Java Spring Boot and React.js. Features job posting, resume upload, AI-powered candidate matching, and application tracking."
  },
  {
    id: 11,
    title: "Business BOOST! Society",
    description: "Networking platform for entrepreneurs to connect, collaborate, and grow businesses.",
    image: "",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    category: "Web Development",
    githubLink: "https://github.com/RESHAM-KUMARI/ai-boost-society.git",
    features: [
      "Entrepreneur networking",
      "Business collaboration",
      "Event management",
      "Discussion forums",
      "Resource sharing",
      "Mentorship program"
    ],
    fullDescription: "A networking platform for entrepreneurs to connect, collaborate, and grow their businesses. Features include business profiles, collaboration requests, event management, and discussion forums."
  },
  // {
  //   id: 12,
  //   title: "OTP Verification App",
  //   description: "Secure mobile app with OTP-based user authentication.",
  //   image: "",
  //   technologies: ["React Native", "Java", "Spring Boot", "MySQL"],
  //   category: "Mobile App",
  //   githubLink: "https://github.com/RESHAM-KUMARI/otp-verification-app",
  //   features: [
  //     "OTP authentication",
  //     "Real-time verification",
  //     "Secure login",
  //     "User friendly",
  //     "Email/SMS OTP"
  //   ],
  //   fullDescription: "A secure mobile application with OTP-based authentication. Built with React Native for frontend and Java Spring Boot for backend APIs."
  // },
  // {
  //   id: 13,
  //   title: "Chat Application",
  //   description: "Real-time chat app with private messaging using Java WebSockets.",
  //   image: "",
  //   technologies: ["Java", "WebSockets", "JSP", "Servlet", "MySQL"],
  //   category: "Web Development",
  //   githubLink: "https://github.com/RESHAM-KUMARI/chat-application",
  //   features: [
  //     "Real-time messaging",
  //     "Private rooms",
  //     "User presence",
  //     "Message history",
  //     "File sharing"
  //   ],
  //   fullDescription: "A real-time chat application using Java WebSockets. Features private messaging, group chats, user presence indicators, and message history."
  // },
  // {
  //   id: 14,
  //   title: "Healthcare Management System",
  //   description: "Complete healthcare platform for managing patients, doctors, and appointments.",
  //   image: "",
  //   technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
  //   category: "Full Stack",
  //   githubLink: "https://github.com/RESHAM-KUMARI/healthcare-system",
  //   features: [
  //     "Patient management",
  //     "Doctor scheduling",
  //     "Appointment booking",
  //     "Prescription management",
  //     "Medical records",
  //     "Billing system"
  //   ],
  //   fullDescription: "A comprehensive healthcare management system built with Java Spring Boot and React.js. Manages patients, doctors, appointments, prescriptions, and billing."
  // },
  // {
  //   id: 15,
  //   title: "Hotel Booking App",
  //   description: "Mobile app for hotel search, booking, and payment integration.",
  //   image: "",
  //   technologies: ["React Native", "Java", "Spring Boot", "MySQL"],
  //   category: "Mobile App",
  //   githubLink: "https://github.com/RESHAM-KUMARI/hotel-booking-app",
  //   features: [
  //     "Hotel search",
  //     "Room booking",
  //     "Payment gateway",
  //     "Booking history",
  //     "User reviews",
  //     "Cancellation policy"
  //   ],
  //   fullDescription: "A mobile app for hotel booking built with React Native. Features hotel search, room selection, payment integration, booking history, and user reviews."
  // }
];