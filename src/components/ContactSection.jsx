import { forwardRef } from "react";

const ContactSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Contact</h2>
      </div>
      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-grid-item">
            <h3>Socials</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                Github
              </a>
            </div>
          </div>
          <div className="contact-grid-item">
            <h3>Email</h3>
            <a href="mailto:hello@example.com" className="email-link">
              hello@example.com
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <h1 className="footer-cta">Let's work together</h1>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
