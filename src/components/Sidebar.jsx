// Sidebar.jsx
import React from "react";
import avatar from '../assets/images/avatar.png';
import addressPin from '../assets/images/location.svg';
import linkedInIcon from '../assets/images/linkedInIcon.svg';
import gitHubIcon from '../assets/images/githubIcon.svg';
import personIcon from '../assets/images/personIcon.svg';
import projectIcon from '../assets/images/project.svg';
import resumeIcon from '../assets/images/resumeIcon.svg';
import hiremeIcon from '../assets/images/hireme.svg';


const Sidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="nav-side-bar side-bar" id="sidebar">
                <h2>Quang Bui</h2>
                <img src={avatar} alt="avatar" className="img-ava" />
                <p>Hi, I'm Quang Bui | SWE intern at American Fidelity | Graduate Student at Oklahoma City University</p>
                <div className="logo-div">
                    <img src={addressPin} alt="Address Pin" className="address-pin" />
                    <p>Houston, Texas</p>
                </div>
                <div className="line-break"></div>

                <div className="logo-div">
                    <a href="https://www.linkedin.com/in/duyquangbui99/" target="_blank" rel="noreferrer">
                        <img src={linkedInIcon} alt="LinkedIn Logo" className="linkedin-icon" />
                    </a>
                    <a href="https://github.com/duyquangbui99" target="_blank" rel="noreferrer">
                        <img src={gitHubIcon} alt="Github Logo" className="github-icon" />
                    </a>
                </div>
                {/* Hidden Sidebar items for navigation for smaller screen */}
                <div className="padd20 hidden-deft">
                    <a href="#aboutme" id="aboutMe">
                        <div className="logo-div">
                            <img src={personIcon} alt="person Logo" className="person-icon" />
                            <h3>About Me</h3>
                        </div>
                    </a>
                    <a href="#projects" id="hahaproject">
                        <div className="logo-div">
                            <img src={projectIcon} alt="project Logo" className="project-icon" />
                            <h3>Projects</h3>
                        </div>
                    </a>
                    <a href="/resume">
                        <div className="logo-div logo-section">
                            <img src={resumeIcon} alt="resume Logo" className="resume-icon" />
                            <h3>Resume</h3>
                        </div>
                    </a>
                    <div className="hire-me-button" id="btn-contact">
                        <a href="#contact">
                            <div className="logo-div logo-section">
                                <img src={hiremeIcon} alt="hireme Logo" className="hireme-icon" />
                                <h3 className="white">Hire me</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            { /* Sidebar items for navigation */}
            <div className="side-bar nav-items" id="nav-items">
                <a href="#aboutme" id="aboutMe">
                    <div className="logo-div">
                        <img src={personIcon} alt="person Logo" className="person-icon" />
                        <h3>About Me</h3>
                    </div>
                </a>
                <a href="#projects" id="hahaproject">
                    <div className="logo-div">
                        <img src={projectIcon} alt="project Logo" className="project-icon" />
                        <h3>Projects</h3>
                    </div>
                </a>
                <a href="/resume">
                    <div className="logo-div logo-section">
                        <img src={resumeIcon} alt="resume Logo" className="resume-icon" />
                        <h3>Resume</h3>
                    </div>
                </a>
                <div class="hire-me-button" id="btn-contact">
                    <a href="#contact">
                        <div className="logo-div logo-section">
                            <img src={hiremeIcon} alt="hireme Logo" className="hireme-icon" />
                            <h3 className="white">Hire me</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
