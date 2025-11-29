import React from "react";
// import profile from '/images/jigar.png'
import profile from "/assets/images/jigar.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // animate only once when visible
        >
          <div className="col-lg-5">
            <div className="about-image-part">
              <img src={profile} alt="about" className="about-img" />
              {/* <h2 className="about-name">Gopal Vaghela</h2> */}
              <h2 className="about-name">Jigar Parsana</h2>
              <div className="about-btn">
                <h6>Available for Work</h6> <span className="status-dot"></span>
              </div>
              {/* <div className="about-social">
                <ul>
                  <li>
                    <a href="#">
                      <FaFacebook className="about-icons" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaXTwitter className="about-icons" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn className="about-icons" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiGithub className="about-icons" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content-part">
              <h2 className="about-title">
                Hello, I’m Jigar Parsana,
                <br />
                <span>Founder of ICONFISYS PVT. LTD.</span> Based in India.
                {/* <span>Full Stack Developer</span> and{" "}
                                Back End Developer Based in India. */}
                {/* <span>Full Services software development</span> {" "} Based in India. */}
              </h2>
              {/* <div className='hero-btn'>
                                <button className="theme-btn">
                                    Download CV
                                    <GoDownload className='ms-1 fs-6' />
                                </button>
                            </div> */}

              <div className="skills-list">
                <span>➜ Flutter Development</span>
                <span>➜ Android App Development (Kotlin/Java)</span>
                <span>➜ React.js Web Development</span>
                <span>➜ Laravel (PHP Backend Development)</span>
                <span>➜ Python Development</span>
                <span>➜ Database Management (MySQL, Firebase)</span>
                <span>➜ Project Management</span>
                <span>➜ RESTful Services</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
