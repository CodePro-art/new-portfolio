import React, { useState } from 'react';
import Tab from 'components/Tab';
import './index.css';


const Project = ({ imgSrc, title, subtitle, description, gitLink, siteLink }) => {
    return (
        <div className="tile">
            <img src={imgSrc} alt={title} />
            <div className="text">
                <h1 className="project-title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                <p className="description">{description}</p>
                <div className="project-links">
                    <a href={gitLink} className="project-link">to Git</a>
                    <a href={siteLink} className="project-link">to Site</a>
                </div>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

// TabsMenu component
const TabsMenu = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { icon: 'code', text: 'Frontend' },
        { icon: 'backend', text: 'Backend' },
        { icon: 'ai', text: 'AI' },
        { icon: 'hardware', text: 'Hardware' },
    ];

    const tabContents = [
        'Frontend content goes here...',
        'Backend content goes here...',
        'AI content goes here...',
        'Hardware content goes here...',
    ];

    var projects = require('assets/jsons/projects.json');
    // const projects = [
    //     {
    //         imgSrc: '/src/img/minecraft1.jpg',
    //         title: '2D Minecraft',
    //         subtitle: '2 Dimensional Minecraft',
    //         description: 'Dive into an epic single-player adventure of 2D Minecraft! Explore infinite worlds, build anything you can imagine, and conquer unique challenges. Unleash your creativity, craft legendary items, and survive in a world of endless possibilities. Get ready to embark on your ultimate journey today!',
    //         gitLink: '#',
    //         siteLink: 'https://nm-minecraft.netlify.app/'
    //     },
    //     {
    //         imgSrc: '/src/img/chess.jpg',
    //         title: 'Chess Game',
    //         subtitle: 'Online chess game',
    //         description: 'Play against AI at various difficulty levels, or log in to challenge other players online. Compete and climb the leaderboard to the top! Hit "PLAY" now and join the fun!',
    //         gitLink: '#',
    //         siteLink: '#'
    //     },
    //     {
    //         imgSrc: '/src/img/cube.jpg',
    //         title: "Rubik's Cube",
    //         subtitle: 'Online interactive puzzle game',
    //         description: "Are you familiar with the famous Rubik's Cube? challenge yourself with and online version with custom settings.",
    //         gitLink: 'https://github.com/CodePro-art/rubiks',
    //         siteLink: 'https://rubicks.netlify.app/'
    //     },
    //     {
    //         imgSrc: '/src/img/todo.png',
    //         title: 'To Do App',
    //         subtitle: 'A simple todo list',
    //         description: 'Stay organized and boost your productivity with my intuitive To-Do List app! Easily create, manage, and prioritize tasks to keep your day on track. Set reminders, check off completed items, and achieve your goals effortlessly. Simplify your life with the ultimate task manager today!',
    //         gitLink: '#',
    //         siteLink: 'https://nm-todolist.netlify.app/'
    //     },
    //     {
    //         imgSrc: '/src/img/wave.png',
    //         title: 'Wave Packet',
    //         subtitle: 'A wave packet simulation',
    //         description: 'A simulation of Physical concepts in Physics - wave: phase, velocity, wavelength, and pulse width.',
    //         gitLink: 'https://github.com/CodePro-art/wave-visualization',
    //         siteLink: 'https://wave-packet.netlify.app/'
    //     },
    //     {
    //         imgSrc: '/src/img/interference.png',
    //         title: 'Wave Interference',
    //         subtitle: 'A spherical wave simulation',
    //         description: 'A simulation of Physical experiment: Interference of Spherical Waves.',
    //         gitLink: 'https://github.com/CodePro-art/spherical-waves',
    //         siteLink: 'https://spherical-wave.netlify.app'
    //     },
    //     {
    //         imgSrc: '/src/img/dice.jpg',
    //         title: 'Predefined Dice Roll',
    //         subtitle: 'A spherical wave simulation',
    //         description: 'Choose the number of dice total result and you are guaranteed to get the same result every time you roll the dice.',
    //         gitLink: 'https://github.com/CodePro-art/dice-roll-predetermined/blob/main/README.md',
    //         siteLink: 'https://predefined-dice.netlify.app/'
    //     },
        
    // ];
    

    return (
        <div className="tabs-container">
            <nav className="navigation-tab">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        icon={tab.icon}
                        text={tab.text}
                        active={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    />
                ))}
            </nav>
            <div className="tab-content">
                <div className="projects-container">
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        {(index % 3 === 0) && index > 0 && <div className="project-row" />}
                        <Project {...project} />
                    </React.Fragment>
                ))}
                </div>
                {tabContents[activeTab]}
            </div>
        </div>
    );
};

export default TabsMenu;
