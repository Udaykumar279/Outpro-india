import React from "react";
import "./styles.css";

/* ---------- Navbar  */
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="container nav-wrapper">
          <h1 className="logo">
            Outpro<span>.India</span>
          </h1>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h1>Transform Your Business</h1>
        <p>We build modern digital solutions</p>
      </div>
    </section>
  );
}

/* ---------- Metrics ---------- */
function Metrics() {
  const metrics = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" }
  ];

  return (
    <section className="metrics-section">
      <div className="container metrics-grid">
        {metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <h3>{m.number}</h3>
            <p>{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Outpro.India</h2>
        <p>We help businesses grow with technology and design.</p>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */
function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>Portfolio</h2>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2>Testimonials</h2>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 Outpro.India — All rights reserved</p>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;