import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import meadow from './assets/meadow.png';
import CosmosPage from './CosmosPage';  // import the new page component

const HomePage = () => {
    const [listItems, setListItems] = useState([
        'Hanging out with friends!',
        'Listening to music',
        'Playing videogames like Counter Strike',
        'Playing tennis',
    ]);
    const shuffleButtonRef = useRef(null);

    const shuffleList = () => {
        const shuffled = [...listItems];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setListItems(shuffled);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && shuffleButtonRef.current === document.activeElement) {
                shuffleList();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [listItems]);

    return (
        <div>
            <h2>Hello Visitors, Welcome in.</h2>
            <p>
                I am Veer S. I am a CS major student. This is my first website and first time web developing! Thanks for visiting again.
            </p>
            <div className="list-image-container">
                <ul id="listItems">
                    <strong>Things that interest me!</strong>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul> 
                <img src={meadow} alt="meadow" className="interests-img" />
            </div>
            <button ref={shuffleButtonRef} className="shuffle-button" onClick={shuffleList} tabIndex="0">
                Shuffle List
            </button>
            <section className="documentation">
                <h3>Documentation</h3>
                <p>
                    Welcome to my personal website! This site is designed to showcase my interests and provide resources that I find interesting.
                </p>
                <h4>Usage</h4>
                <p>
                    On the Home page, you'll see a list of my interests accompanied by an image. You can shuffle this list using the "Shuffle List" button to see the items in a different order.
                    On the "Things to Read" page, you'll find a collection of links to external websites that I find worth reading.
                </p>
                <h4>Keyboard Navigation</h4>
                <p>
                    -<strong>Navigation Bar:</strong> Use the <code>Tab</code> key to navigate through the links in the navigation bar.
                    Press <code>Enter</code> to select a link.
                </p>
                <p>
                    -<strong>Shuffle Button:</strong> On the Home page, press the <code>Tab</code> key until the "Shuffle List" button is highlighted.
                     Press <code>Enter</code> to shuffle the list.
                </p>
                <p>
                    -<strong>Links on "Things to Read" page:</strong> Use the <code>Tab</code> key to navigate through the links.
                      Press <code>Enter</code> to open the selected link.
                </p>
            </section></div>
        
    );
};

const ThingsToRead = () => {
    const links = [
        { href: "https://www.example.com", text: "Example Website" },
        { href: "https://www.github.com", text: "Github" },
        { href: "https://www.youtube.com", text: "Youtube" },
        { href: "https://www.reddit.com", text: "Reddit" },
        { href: "https://www.wikipedia.org", text: "Wikipedia" },
        { href: "https://www.stackoverflow.com", text: "Stack Overflow" },
        { href: "https://www.news.google.com", text: "Google News" },
        { href: "https://www.amazon.com", text: "Amazon" },
        { href: "https://www.netflix.com", text: "Netflix" },
        { href: "https://www.discord.com", text: "Discord" },
    ];
    return (
        <div>
            <h2>Things to Read</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index} tabIndex="0">
                        <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App = () => (
    <BrowserRouter>
        <nav className="navbar">
        <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/things-to-read">Things to Read</NavLink></li>
            <li><NavLink to="/cosmos">The Cosmos</NavLink></li>
        </ul>
          
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/things-to-read" element={<ThingsToRead />} />
            <Route path="/cosmos" element={<CosmosPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;



