import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <h1 className="logo">CoolSite</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <section className="hero">
          <h2>Welcome to CoolSite</h2>
          <p>Your go-to platform for amazing experiences.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </header>
      <main>
        <section id="about" className="content-section">
          <h2>About Us</h2>
          <p>We are a team of passionate developers creating beautiful web experiences.</p>
        </section>
        <section id="services" className="content-section">
          <h2>Our Services</h2>
          <p>We provide top-notch web development and design services.</p>
        </section>
        <section id="contact" className="content-section">
          <h2>Contact Us</h2>
          <p>Email us at contact@coolsite.com.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 CoolSite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
