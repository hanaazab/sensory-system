import styles from "./page.module.css";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13L2 4" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Mobile Layout */}
      <div className={styles.mobileLayout}>
        <nav className={styles.mobileNav}>
          <div className={styles.navIcons}>
            <a
              href="https://www.instagram.com/sabreally"
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
            <span className={styles.underline}>Tools</span> &amp;{" "}
            <span className={styles.underline}>Experiences</span>
            <br />
            for embodiment.
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
              <div className={styles.contactLinks}>
                <div className={styles.contactRow}>
                  <a
                    href="https://www.instagram.com/sabreally"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sabrina on Instagram"
                    className={styles.contactLink}
                  >
                    <InstagramIcon size={18} />
                    <span>@sabreally</span>
                  </a>
                  <a
                    href="https://www.instagram.com/justinedpierre"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Justine on Instagram"
                    className={styles.contactLink}
                  >
                    <InstagramIcon size={18} />
                    <span>@justinedpierre</span>
                  </a>
                </div>
                <a
                  href="mailto:info@sensorysystem.com"
                  aria-label="Email"
                  className={styles.contactLink}
                >
                  <MailIcon size={18} />
                  <span>info@sensorysystem.com</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
