import React from "react";

export default function Packages() {
  return (
    <section style={{maxWidth:"var(--maxw)", margin:"40px auto 80px", padding:"0 20px"}}>
      <header style={{textAlign:"center", margin:"0 0 28px"}}>
        <h2 style={{fontFamily:'"Playfair Display",serif', fontSize:"clamp(28px,4vw,40px)", margin:"0 0 6px"}}>
          Wedding Video Packages
        </h2>
        <p style={{color:"var(--muted)", margin:0}}>All packages Cover Wedding Film and Editting</p>
      </header>

      {/* Packages grid */}
      <div className="pkg-grid">
        {/* Two-Filmmakers */}
        <article className="pkg-card">
          <h3 className="pkg-title"> Dual-Camera Standard $4,000</h3>
          <ul className="pkg-list">
            <li>8-10 minute wedding video</li>
            <li>Two videographers on wedding day</li>
            <li>dual-angle coverage of ceremony & key moments</li>
            <li>Professional audio for vows</li>
            <li>Fully edited and color corrected</li>
          </ul>
        </article>

        {/* Three-Filmmakers */}
        <article className="pkg-card">
          <h3 className="pkg-title">Signature Multi-Camera Coverage $5,000</h3>
          <ul className="pkg-list">
            <li>10-15 minute wedding video</li>
            <li>Three videographers on wedding day</li>
            <li>Multi-angle coverage of ceremony & key moments</li>
            <li>Professional audio for vows & speeches</li>
            <li>Fully edited and color corrected</li>
          </ul>
        </article>
      </div>

      {/* Divider */}
      <div style={{height:1, background:"rgba(255,255,255,.1)", margin:"34px 0"}} />

      {/* Travel / Drive-time note + dropdown */}
      <section aria-label="Travel and drive time">
        <p style={{color:"var(--muted)", margin:"0 0 8px"}}>
          <strong>Travel fees vary depending on location.</strong>
        </p>
        <details className="pkg-details">
          <summary>Drive time (measured from Bellevue)</summary>
          <ul className="drive-list">
            <li>0–25 miles: <strong>$0</strong></li>
            <li>26–50 miles: <strong>$100</strong></li>
            <li>51–100 miles: <strong>$200</strong></li>
            <li>101–200 miles: <strong>$300</strong></li>
            <li>Above 200 miles: <em>custom</em></li>
          </ul>
        </details>
      </section>
    </section>
  );
}
