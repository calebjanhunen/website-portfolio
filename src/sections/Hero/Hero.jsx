import React, { useRef } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import resume from '../../documents/calebjanhunen_resume.pdf';

import './Hero.scss';

import profilePicture from '../../images/CalebJanhunen-profile.png';

const Hero = () => {
    const linkedinRef = useRef();
    const githubRef = useRef();

    //removes animation class after animation is done
    setTimeout(() => {
        linkedinRef.current?.classList.remove('social-link--expand');
        githubRef.current?.classList.remove('social-link--expand');
    }, 1000);

    return (
        <section className="section-hero" id="hero">
            <div className="hero">
                <img
                    className="hero__img"
                    src={profilePicture}
                    alt="Headshot"
                />
                <div className="hero__text">
                    <h1 className="heading-primary hero__heading">
                        Hi, I'm{' '}
                        <span className="hero__name">Caleb Janhunen</span>
                    </h1>
                    <p className="hero__subtitle">
                        A{' '}
                        <span className="hero__rotating-text">
                            Computer Engineer
                        </span>{' '}
                        <span className="hero__rotating-text">
                            Back End Developer
                        </span>{' '}
                        <span className="hero__rotating-text">
                            Front End Developer
                        </span>
                    </p>

                    <ul className="hero__socials-list">
                        <li className="social-list__item">
                            <a
                                href="https://www.linkedin.com/in/caleb-janhunen-362b62171/"
                                target="_blank"
                                className="social-link social-link--expand"
                                rel="noreferrer"
                                ref={linkedinRef}
                            >
                                <FaLinkedin size={40} />
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a
                                href="https://github.com/calebjanhunen"
                                target="_blank"
                                className="social-link social-link--expand"
                                rel="noreferrer"
                                ref={githubRef}
                            >
                                <FaGithubSquare size={40} />
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a
                                href={resume}
                                target="_blank"
                                className="social-link social-link--expand"
                                rel="noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>

                    <a href="#contact-form" className="btn hero__cta">
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
