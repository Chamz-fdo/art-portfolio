import React from 'react';
import './About.css';

function About({ onNavigateHome }) {
  return (
    <div className="about-page">
      <header className="site-header">
        <nav className="navigation">
          <div className="nav-container">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="logo">
              <img src="/logo.png" alt="Paddler's Galeria" className="logo-image" />
            </a>
            
            <ul className="nav-menu">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>HOME</a></li>
              <li><a href="#" className="active">ABOUT</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); window.location.hash = 'collection'; }}>COLLECTION</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); window.location.hash = 'faq'; }}>FAQ</a></li>
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

      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">MEET THE ARTIST</h1>
          {/* <p className="about-hero-subtitle">A soul split between two worlds - from paddles to palettes.</p> */}
        </div>
      </section>

      <section className="about-content-section">
        <div className="about-content-container">
          <div className="about-story">
            <p> A soul split between two worlds - from paddles to palettes.</p>
            <p>
              From an early age, I was instinctively drawn to the expressive, the creative, and the delightfully unstructured art. Yet life's path led me down a very different road which is defined by precision, focus, and discipline. As a national-level athlete, my artistic journey was placed on pause, hidden beneath the rigor.
            </p>

            <p>
              Today, I'm rediscovering that long-paused journey, one brushstroke at a time.
            </p>

            <p>
              My art is a personal dialogue, a reflection of emotion, movement, memory, and freedom. I work primarily in semi-abstract forms, allowing texture and color to speak where words fall short. I resist the idea of artistic boundaries and find joy in exploring new techniques, bold palettes, and intuitive expressions.
            </p>

            <p>
              <strong>Paddlers Galleria was born from this same spirit. A belief that spaces deserve to breathe, and that art should feel personal.</strong>
              {' '}
              <p>We don't simply create art to fill walls. We create pieces that belong within the space, that respond to its mood, its light, and its rhythm. From our galleria to your space, we bring art that is handcrafted, thoughtfully designed, and created to live with you.</p>
            </p>

            <p>
              This space is more than a portfolio, it's a visual journal. A place where fragments of feeling, stories, and experience are woven into canvas. I'm deeply grateful for the support of those who encouraged me early on, especially those who resonated with my shared pieces on Instagram. Your kindness gave me the confidence to take this passion seriously.
            </p>

            <p>
              I don't know exactly where this road will lead, but I know it feels right.
              Thank you for walking it with me. Let's keep creating magic.
            </p>

            <p className="about-signature">
              All my love,<br />
              Artist from Paddler's Galeria
            </p>
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

export default About;
