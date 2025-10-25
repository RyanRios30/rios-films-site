import React from "react";

export default function App() {
  const toggleMobile = () => {
    const el = document.getElementById("mobileNav");
    el.style.display = el.style.display === "block" ? "none" : "block";
  };

  return (
    <>
      <header className="site-header" aria-label="Primary">
       <div className="brand">
  
  <div className="brand__name">Rios Films</div>
</div>

        <nav className="nav" aria-label="Main">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            href="https://calendly.com/your-username/consultation"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)" }}
          >
            Book
          </a>
        </nav>
        <button
  className="hamburger"
  aria-label="Open menu"
  onClick={toggleMobile}
  style={{ display: "none" }}
>
  ☰
</button>
<div
  className="mobile-nav"
  id="mobileNav"
  role="menu"
  style={{ display: "none" }}
>
          <a href="#top" role="menuitem">Home</a>
          <a href="#about" role="menuitem">About</a>
          <a href="#contact" role="menuitem">Contact</a>
          <a href="https://calendly.com/your-username/consultation" target="_blank" rel="noopener noreferrer" role="menuitem">Book</a>
        </div>
      </header>

      <main id="top" className="hero" aria-label="Hero">
        <div className="hero__media" aria-hidden="true">
          {/* files live in public/assets/... so use a leading slash */}
          <video id="heroVideo" autoPlay muted loop playsInline poster="/assets/img/cover.jpg">
            <source src="/assets/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>
        </div>
        <section className="hero__content">
          <div>
            <h1 className="headline">Capturing Life&apos;s Precious Moments</h1>
            <p className="subhead">Weeding Videographers and Editors Based In Bellevue WA</p>
            <div className="cta">
              <a className="btn btn--primary" href="#packages">
                View Wedding Video Packages
              </a>
            </div>
          </div>
        </section>
      </main>

<section style={{ height: "30vh" }} />


      <footer>© 2025 Rios Films · Seattle & Bellevue · PNW</footer>
    </>
  );
}
