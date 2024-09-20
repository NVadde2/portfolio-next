import React, { useState, useEffect } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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

        // const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 150);

        // return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, currentTextIndex, texts]);

    return (
        <>
            <section className="section top work-about">
                <div className="static-contain">
                    <div className="text-contain">
                        <h1 className="animated-text">{displayedText}<span className="cursor">|</span><br /></h1>
                        <p>A software engineer with three years of experience, specializing in Java, JavaScript, React, SQL.<br />‍<br />
                            Adept at collaborating with diverse teams to develop creative technical solutions for complex software engineering issues.
                        </p>
                        <Button variant="contained" color="success" className="btn work-primary w-button">
                            Download Resume
                        </Button>
                    </div>
                </div>
            </section>
            <p> Social Media Icons</p>
            <div>
                <a href="mailto:your-email@example.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://www.linkedin.com/in/nehareddyv">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/NehaReddyV">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            {/* Rotate this section animate */}
            <div className="tools-section">
                <div className="static-contain">
                    <div className="tools-grid">
                        <div className="logo-wrap">
                            <img src={require('../assets/HTML.jpg')} loading="lazy" alt="" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            <img src={require('../assets/Css.jpg')} loading="lazy" alt="" className="tool-logo" />
                        </div>
                        <div className="logo-wrap">
                            {/* <img src="https://cdn.prod.website-files.com/5cd989a4d99e0749be50103e/5f48126aa8836377857dd6bf_zapier-logo.png" loading="lazy" alt="" className="tool-logo"> */}
                        </div>
                        <div className="logo-wrap">
                            {/* <img src="https://cdn.prod.website-files.com/5cd989a4d99e0749be50103e/5f4812da3f79001dd39afcd4_parabola-logo.png" loading="lazy" alt="" className="tool-logo"> */}
                        </div>
                        <div className="logo-wrap">
                            {/* <img src="https://cdn.prod.website-files.com/5cd989a4d99e0749be50103e/5f48130cd848613d6210a208_mapbox.logo.png" loading="lazy" alt="" className="tool-logo"> */}
                        </div>
                    </div>
                </div>
            </div>
            <section id="experience" className="home-section wg-experience">
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
