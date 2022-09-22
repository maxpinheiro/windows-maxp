import React from "react";
import "./AboutMe.scss";

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <p>Hi, I'm Max! I'm a software developer currently studying at Northeastern University, pursuing a BS in Computer Science and a minor in Interaction Design.</p>
            <p className="header">My skills</p>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p className="header">About this site</p>
            <p>Hopefully by now you've realized this website attempts to simulate the Windows XP operating system! This was the OS I used growing up, and is one of the reasons I developed a passion for both computers and building user interfaces. This recreation is both an experiment to practice my app development and styling skills, and a playful homage to my beginnings.</p>
        </div>
    );
}

export default AboutMe;
