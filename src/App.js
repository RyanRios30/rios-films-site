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
  <img 
    src="/assets/img/logo.png" 
    alt="Rios Films Logo" 
    className="brand__logo" 
    onError={(e) => {
      e.target.outerHTML = '<div class="brand__logo" aria-hidden="true">RF</div>';
    }}
  />
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
        <button className="hamburger" aria-label="Open menu" onClick={toggleMobile}>☰</button>
        <div className="mobile-nav" id="mobileNav" role="menu">
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
            <h1 className="headline">Cinematic wedding films that feel like you.</h1>
            <p className="subhead">Seattle · Bellevue · Two-videographer coverage · 6–8 minute highlights</p>
            <div className="cta">
              <a className="btn btn--primary" href="https://calendly.com/your-username/consultation" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
              <a className="btn btn--ghost" href="#reel">Watch a 60s Reel</a>
            </div>
          </div>
        </section>
      </main>

      <section className="strip" aria-label="Key highlights">
        <div className="chip">Two Videographers</div>
        <div className="chip">6–8 Minute Highlight</div>
        <div className="chip">Vows & Speeches Audio</div>
      </section>

      <section id="reel" style={{maxWidth:"var(--maxw)",margin:"24px auto 72px",padding:"0 20px"}}>
        <div style={{position:"relative",paddingTop:"56.25%",border:"1px solid #1b1b1b",borderRadius:"12px",overflow:"hidden",background:"#0b0b0b"}}>
          <iframe
            title="Featured Wedding Reel"
            src="https://player.vimeo.com/video/000000000?h=autoplay=0&muted=0"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0}}
          />
        </div>
        <p style={{color:"var(--muted)",textAlign:"center",margin:"10px 0 0"}}>Featured: Your favorite wedding — Venue, Date</p>
      </section>

      <footer>© 2025 Rios Films · Seattle & Bellevue · PNW</footer>
    </>
  );
}
