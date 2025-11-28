import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    category: "Applications",
    title: "Triftel - Social Media Platform",
    subtitle: "Mobile App Development",
    image: "/assets/images/project-logo.webp", // update with your actual image
    role: "Lead Full Stack Developer",
    duration: "1 Year",
    overview:
      "Developed Triftel, a modern social media platform that allows users to connect, share posts, chat, and engage with a real-time content feed. Designed smooth UI, fast performance, and secure backend features including authentication, media handling, and notifications.",
    technologies: [
      "Kotlin",
      "Laravel",
      "Firebase",
      "API Integration",
      "Twilio",
      "Socket",
      "Web socket",
    ],
    link: "https://play.google.com/store/apps/details?id=com.iconfisys.triftel",
  },
  {
    id: 2,
    category: ["WebSites", "Applications"],
    title: "Diamond Times - Digital News Portal",
    subtitle: "Web & Mobile App Development",
    image: "/assets/images/diamondtimes.png", // replace with your actual image path
    role: "Full Stack Web Developer",
    duration: "Ongoing",
    overview:
      "Developed Diamond Times, a dynamic digital news portal offering real-time updates, categorized news sections, and a user-friendly reading experience. Built a powerful admin panel for news publishing, media management, and content moderation.",
    technologies: [
      "Flutter",
      "IOS",
      "Android",
      "DART",
      "Firebase",
      "React.js",
      "Laravel",
      "MySQL",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    category: ["WebSites", "Applications"],

    title: "The United Frontline - Digital News Portal",
    subtitle: "Web & Mobile App Development",
    image: "/assets/images/tuf.webp", // replace with your actual image path
    role: "Full Stack Web Developer",
    duration: "Ongoing",
    overview:
      "Developed Diamond Times, a dynamic digital news portal offering real-time updates, categorized news sections, and a user-friendly reading experience. Built a powerful admin panel for news publishing, media management, and content moderation.",
    technologies: [
      "Flutter",
      "IOS",
      "Android",
      "DART",
      "Firebase",
      "React.js",
      "Laravel",
      "MySQL",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    category: "Applications",
    title: "Child Safety App",
    subtitle: "Mobile App Development",

    image: "/assets/images/child.webp", // replace with actual image
    role: "Lead Full Stack Developer",
    duration: "Ongoing",
    overview:
      "Developed an AI-powered child safety application designed to help locate missing children using real-time face recognition. Parents register their child's details, and the system automatically scans live faces and matches them with the database. When a match is found, parents receive instant notifications. The app supports community-based reporting and provides high-accuracy face detection and tracking.",
    technologies: [
      "Flutter",
      "Python",
      "ONNX",
      "Firebase",
      "AI/ML",
      "Real-Time Face Recognition",
    ],
  },
  {
    id: 5,
    category: "Applications",
    title: "Essential - Client & Vendor Home Service App",
    subtitle: "Mobile App Development",

    image: "/assets/images/child.webp", // replace with actual image
    role: "Lead Full Stack Developer",
    duration: "Ongoing",
    overview:
      "Developed Essential, a dual-side home service platform where clients can request any household service such as sofa cleaning, plumbing, electrical work, and more. Vendors receive real-time job requests, accept offers, and visit the client's location using a secure OTP-based verification system. The app ensures smooth communication, transparent pricing, and reliable service flow between clients and vendors.",
    technologies: [
      "Flutter",
      "Laravel",
      "Firebase",
      "API Integration",
      "Google Maps",
      "OTP System",
    ],
  },
  {
    id: 6,
    category: "Applications",
    title: "CinInfo - Film Industry Recruitment App",
    subtitle: "Mobile App Development",
    image: "/assets/images/splace_logo.png", // replace with your actual image
    role: "Lead Full Stack Developer",
    duration: "6 month",
    overview:
      "Developed CinInfo, a recruitment platform designed specifically for the film industry. The app connects production houses with actors, crew members, technicians, and other film professionals. Candidates can create detailed profiles, upload portfolios, and apply for roles, while recruiters can post jobs, filter talent, and manage hiring efficiently.",
    technologies: [
      "Kotlin",
      "Laravel",
      "Firebase",
      "API Integration",
      "Real-Time Notifications",
    ],
    link: "", // add your app link when available
  },
  {
    id: 7,
    category: "Applications",
    title: "Elevorce - Attendance & Visa Expiry Alert System",
    subtitle: "Mobile App Development",
    image: "/assets/images/elevorce.png",
    role: "Lead Full Stack Developer",
    duration: "Ongoing",
    overview:
      "Developed Elevorce, a smart workforce management app designed for employees working abroad. The app includes an advanced attendance system with check-in/check-out, location tracking, and daily logs. It also provides automated visa expiry reminders, and important document notifications to ensure timely renewals and compliance.",
    technologies: [
      "Flutter",
      "Laravel",
      "Firebase",
      "Location Services",
      "API Integration",
    ],
  },
  {
    id: 8,
    category: "Applications",
    title: "Wedding Management & Guest Experience App",
    subtitle: "Mobile App Development",
    image: "/assets/images/wedding.png", // replace with your actual image
    role: "Lead Full Stack Developer",
    duration: "Ongoing",
    overview:
      "Developed a complete wedding management app designed to enhance guest experience and streamline event coordination. The app displays all wedding functions with detailed schedules, food menus, and a digital table reservation system for dinner. Guests can also access and download their personalized photos automatically from the event gallery using face recognition technology.",
    technologies: [
      "Flutter",
      "Laravel",
      "Firebase",
      "Face Recognition",
      "Real-Time Sync",
    ],
  },
  {
    id: 9,
    category: "WebSites",
    title: "HypeHy Fashion E-Commerce Website",
    subtitle: "Website Development",
    image: "/assets/images/hypehy.png",
    role: "Full Stack Web Developer",
    duration: "Completed",
    overview:
      "Developed a modern and high-performance fashion e-commerce website for HypeHy, designed to showcase premium clothing collections with a clean and stylish UI. The platform includes product categories, size/variant selection, dynamic pricing, cart and checkout flow, and a fully responsive shopping interface. Integrated an advanced CMS for managing new arrivals, trending collections, banners, and offers. The website focuses on smooth browsing experience, fast loading speed, and a visually appealing presentation aligned with modern fashion brands.",
    technologies: [
      "React.js",
      "Laravel",
      "MySQL",
      "API Integration",
      "Stripe Payment",
      "Responsive UI",
    ],
  },
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  console.log(activeCategory, "activeCategory");

  const categories = ["All", "Applications", "WebSites"];
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : // : projectsData.filter((item) => item.category === activeCategory);
        projectsData.filter((item) => item.category.includes(activeCategory));
  console.log(filteredProjects, "filteredProjects");

  return (
    <section id="project" className="project-area">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Here are some of my projects</p>
          <h2>My Projects</h2>
        </motion.div>

        {/* Tabs */}
        <div className="tab-menu">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row">
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{ scale: 1.02 }}
              // transition={{ duration: 0.4 }}
            >
              <div className="project-card" onClick={() => setSelected(item)}>
                <div className="project-image">
                  <img src={item.image} alt={item.title} />
                  <motion.div
                    className="overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overlay-content">
                      {/* <p>{item.overview}</p> */}
                      <p>
                        {item.overview.length > 300
                          ? item.overview.substring(0, 300) + "..."
                          : item.overview}
                      </p>
                      <div className="tags">
                        {item.technologies.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="project-info">
                  <p className="category">{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <div className="overlay-content">
                    <div className="tags">
                      {item.technologies.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ background: "white" }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selected.title}</h3>
              <div className="modal-image">
                <img src={selected.image} alt={selected.title} />
              </div>
              <p>{selected.overview}</p>
              <div className="tags">
                {selected.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <button className="close-btn" onClick={() => setSelected(null)}>
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
