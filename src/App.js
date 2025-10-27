import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Packages from "./pages/Packages";

function Home() {
  return (
    <>
      <main id="top" className="hero" aria-label="Hero">
        <div className="hero__media" aria-hidden="true">
          <video
            id="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/img/cover.jpg"
          >
            <source src="/assets/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>
        </div>

        <section className="hero__content">
          <div>
            <h1 className="headline">Capturing Life&apos;s Precious Moments</h1>
            <p className="subhead">
              Wedding Films Based in Bellevue, Washington
            </p>
            <div className="cta">
              <Link className="btn btn--primary" to="/packages">
                View Wedding Video Packages
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Spacer or later footer intro section */}
      <section style={{ height: "10vh" }} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header" aria-label="Primary">
        <div className="brand">
          <div className="brand__name">Rios Films</div>
        </div>

        <nav className="nav" aria-label="Main">
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
        </nav>

        {/* Hide mobile menu for now */}
        <button
          className="hamburger"
          aria-label="Open menu"
          style={{ display: "none" }}
        >
          ☰
        </button>
        <div
          className="mobile-nav"
          id="mobileNav"
          role="menu"
          style={{ display: "none" }}
        />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>

      <footer>© 2025 Rios Films · Seattle & Bellevue · PNW</footer>
    </BrowserRouter>
  );
}
