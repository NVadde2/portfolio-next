import React, { useState, useEffect } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faJs } from '@fortawesome/free-brands-svg-icons';
import Experience from './Experience';
import Button from '@mui/material/Button';
import ProductCategories from '../modules/views/HobbyCategories';

const About = () => {
    const texts = ["Software Engineer", "Data Engineer", "Frontend Developer"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentTextIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedText(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 150);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, currentTextIndex, texts]);

    return (
        <>
            <section className="section top work-about">
                <div className="static-contain">
                    <div className='about'>
                        <div className="text-contain">
                            <h1 className="animated-text"><span>&lt;</span>{displayedText}<span className="cursor">|</span><span> /&gt;</span><br /></h1>
                            <p>A software engineer with three years of experience, specializing in Java, JavaScript, React, SQL.<br />‍<br />
                                Adept at collaborating with diverse teams to develop creative technical solutions for complex software engineering issues.
                            </p>

                            <Button
                                variant="contained"
                                color="success"
                                className="btn work-primary w-button"
                                sx={{ marginTop: 2 }}
                                href={require("../assets/Neha_Resume.pdf")}
                                target="_blank"
                            >
                                View My Resume
                            </Button>
                        </div>
                        <div className='social-icon'>
                            <a href="mailto:your-email@example.com" target="__blank">
                                <img src={require("../assets/gmail.png")} alt="gmail" className="img-social" />
                            </a>
                            <a href="https://www.linkedin.com/in/nehareddyv" target="__blank">
                                <img src={require("../assets/linkedin.png")} alt="linkedin" className="img-social" />
                            </a>
                            <a href="https://github.com/NehaReddyV" target="__blank">
                                <img src={require("../assets/github.png")} alt="github" className="img-social" />
                            </a>
                            <a href="https://leetcode.com/u/nehareddyvadde/" target="__blank">
                                <img src={require("../assets/leetcode.png")} alt="leetcode" className="img-social" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Rotate this section animate */}
            <div className="tools-section">
                <div className="static-contain ">
                    <h2 className="section-title">Skills</h2>
                    <div className="tools-grid">
                        <div className="logo-wrap">
                            <img src={require('../assets/html.png')} loading="lazy" alt="HTML5" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/css.png')} loading="lazy" alt="CSS3" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/Sass.png')} loading="lazy" alt="Sass" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/javascript.png')} loading="lazy" alt="JavaScript" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/java.png')} loading="lazy" alt="Java" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/python.png')} loading="lazy" alt="Java" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/mysql.png')} loading="lazy" alt="MySQL" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/react.png')} loading="lazy" alt="React" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/node.png')} loading="lazy" alt="Node JS" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/figma.png')} loading="lazy" alt="Figma" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/Docker.png')} loading="lazy" alt="Docker" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            {/* <img src={require('../assets/mysql.png')} loading="lazy" alt="MySQL" className="tool-logo" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <section id="experience" className="section wg-experience">
                <div className="static-contain">
                    <Experience />
                </div>
            </section>
            {/* <section id="experience" className="section"> */}
            <div className="static-contain">
                <ProductCategories />
            </div>
            {/* </section> */}
        </>
    );
};

export default About;
