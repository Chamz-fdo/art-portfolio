import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'about') {
    // Dynamically import and render About page
    const About = require('./About').default;
    return <About onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="portfolio-site">
      <header className="site-header">
        <nav className="navigation">
          <div className="nav-container">
            <a href="/" className="logo">
              <img src="/logo.png" alt="Paddler's Galeria" className="logo-image" />
            </a>
            
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#collection">COLLECTION</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <div className="social-icons">
              <a href="https://www.instagram.com/paddlersgaleria?igsh=OHk5Z21iZXg0cmNk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="mailto:paddlersgaleria@gmail.com" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.5566 13.6772 12.4434 13.6772 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">PADDLER'S GALERIA PORTFOLIO</h1>
          <p className="hero-subtitle">CURATED ART FOR INTERIOR</p>
        </div>
      </section>

      <section className="debut-collection" id="collection">
        <div className="collection-container">
          <h2 className="collection-title">DEBUT COLLECTION</h2>
          <p className="collection-subtitle">The first breath of Paddler's Galleria</p>
          
          <div className="collection-grid">
            <div className="collection-item">
              <div className="collection-image-wrapper">
                <img 
                  src="/collection-1.jpg" 
                  alt="A gentle nebula holds you close"
                  className="collection-image collection-image-front"
                />
                <img 
                  src="/collection-1-back.jpg" 
                  alt="A gentle nebula holds you close - alternate view"
                  className="collection-image collection-image-back"
                />
              </div>
              <h3 className="collection-item-title">A gentle nebula holds you close</h3>
              <p className="collection-item-description">
                Here lives a quiet space, where memory stretches beyond time
              </p>
              <p className="collection-item-medium">Acrylic on canvas</p>
            </div>

            <div className="collection-item">
              <div className="collection-image-wrapper">
                <img 
                  src="/collection-2.jpeg" 
                  alt="Urban Echoes"
                  className="collection-image collection-image-front"
                />
                <img 
                  src="/collection-2-back.jpg" 
                  alt="Urban Echoes - alternate view"
                  className="collection-image collection-image-back"
                />
              </div>
              <h3 className="collection-item-title">Urban Echoes</h3>
              <p className="collection-item-description">
                Each square becomes a moment, crafted to live quietly within contemporary spaces
              </p>
              <p className="collection-item-medium">Acrylic on wood</p>
            </div>

            <div className="collection-item">
              <div className="collection-image-wrapper">
                <img 
                  src="/collection-3.jpg" 
                  alt="A place that waits"
                  className="collection-image collection-image-front"
                />
                <img 
                  src="/collection-3-back.jpg" 
                  alt="A place that waits - alternate view"
                  className="collection-image collection-image-back"
                />
              </div>
              <h3 className="collection-item-title">A place that waits</h3>
              <p className="collection-item-description">
                A place that doesn't move forward or back, only inward, where belonging arrives quietly
              </p>
              <p className="collection-item-medium">Acrylic on canvas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-artist-section" id="about">
        <div className="meet-artist-container">
          <div className="meet-artist-card">
            <div className="galeria-intro">
              <p className="galeria-tagline">PADDLER'S GALERIA CURATES ABSTRACT ART FOR QUIET LIVING</p>
              <p className="galeria-description">
                Each piece is thoughtfully created to bring balance, warmth, and presence into the spaces we live in. Inspired by stillness, earth, and emotion, our artworks are designed to live gently within their surroundings.
              </p>
              <p className="galeria-belief">We believe art should feel personal, timeless, and intentional.</p>
              <p className="galeria-statement">
                This is not decoration.<br />
                This is presence.
              </p>
            </div>
            
            <h2 className="meet-artist-title">MEET THE ARTIST</h2>
            {/* <p className="meet-artist-description">
              A soul split between two worlds - from paddles to palettes.
            </p> */}
            <button className="read-more-btn" onClick={() => setCurrentPage('about')}>READ MORE</button>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-container">
          <h2 className="faq-title">FAQ</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">What inspires your art?</h3>
              <p className="faq-answer">
                Each piece tells a story, reflecting emotions and experiences through color and form. I pour my heart into every canvas, creating works that resonate with depth and authenticity.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What do you create?</h3>
              <p className="faq-answer">
                Art that listen to interiors and responds with intention
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer customized artwork?</h3>
              <p className="faq-answer">
                Absolutely, every piece has its own mood and story<br />
                We tailor each piece to feel right where it belongs
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Are the pieces limited?</h3>
              <p className="faq-answer">
                Yes, we believe in rarity, not repetition
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How do I begin?</h3>
              <p className="faq-answer">
                A message is enough ( DM / WhatsApp / E-mail)<br />
                We'll walk the rest together &lt;3
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2026 Paddler's Galeria. All rights reserved.</p>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/paddlersgaleria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="mailto:paddlersgaleria@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;