"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const WORDS = ["Embodiment", "Presence", "Sensation"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${styles.rotatingWord} ${fade ? styles.fadeIn : styles.fadeOut}`}>
      {WORDS[index]}
    </span>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M4 7l8 5.5L20 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Sensory System&trade; NYC. All rights reserved.</span>
        <span>Sensory System is a registered studio. Unauthorized use strictly prohibited.</span>
      </footer>

      {/* Mobile Layout */}
      <div className={styles.mobileLayout}>
        <nav className={styles.mobileNav}>
          <div className={styles.navIcons}>
            <a
              href="https://www.instagram.com/sensorysystem/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={22} />
            </a>
            <a href="mailto:info@sensorysystem.com" aria-label="Email">
              <MailIcon size={22} />
            </a>
          </div>
        </nav>

        <div className={styles.mobileHeadline}>
          <h1>
            Tools &amp; Experiences
            <br />
            for <RotatingWord />
          </h1>
        </div>

        <div className={styles.mobileHero}>
          <img src="/body.jpg" alt="Sensory System" className={styles.heroImg} />
          <img
            src="/white-logo.jpg"
            alt="Sensory System logo"
            className={styles.logoOverlay}
          />
        </div>

      </div>

      {/* Desktop Layout */}
      <div className={styles.desktopLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <img
              src="/body.jpg"
              alt="Sensory System"
              className={styles.heroImg}
            />
            <img
              src="/white-logo.jpg"
              alt="Sensory System logo"
              className={styles.logoOverlay}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.rightContent}>
            <div className={styles.desktopHeadline}>
              <h1>
                Tools &amp; Experiences
                <br />
                for <RotatingWord />
              </h1>
            </div>

            <section>
              <h2 className={styles.sectionHeading}>About</h2>
              <p className={styles.missionText}>
                Sensory System is a virtual studio founded by Justine Pierre and
                Sabrina Reales, devoted to presence, embodiment, and conscious
                living. We create tools and experiences that invite you back into
                your body — bridging the gap between the digital world and the
                felt sense of being alive.
              </p>
            </section>

            <section>
              <h2 className={styles.sectionHeading}>Contact</h2>
              <div className={styles.contactIcons}>
                <a
                  href="https://www.instagram.com/sensorysystem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={32} />
                </a>
                <a
                  href="mailto:info@sensorysystem.com"
                  aria-label="Email"
                >
                  <MailIcon size={32} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
