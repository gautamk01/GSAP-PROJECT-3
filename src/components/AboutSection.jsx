const AboutSection = ({ ref, ...props }) => {
  return (
    <section ref={ref} className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-content">
          <p className="large-text">
            I craft digital experiences that merge art with technology. With a
            background in computer science and a passion for motion design, I
            create web applications that are not only functional but also
            immersive and memorable.
          </p>
          <div className="about-grid">
            <div className="grid-item">
              <h3>Design</h3>
              <p>UI/UX, Interaction Design, Motion Design</p>
            </div>
            <div className="grid-item">
              <h3>Development</h3>
              <p>React, Node.js, WebGL, GSAP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
