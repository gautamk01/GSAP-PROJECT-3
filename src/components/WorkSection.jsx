import { forwardRef } from "react";

const WorkSection = forwardRef((props, ref) => {
  const projects = [
    { title: "E-Commerce", category: "Web Development", year: "2024" },
    { title: "Portfolio V1", category: "Design / Dev", year: "2023" },
    { title: "Dashboard", category: "Product Design", year: "2023" },
  ];

  return (
    <section ref={ref} className="work-section">
      <div className="work-header">
        <h2 className="section-title">Selected Work</h2>
        <span className="work-count">(03)</span>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-info">
              <span className="project-title">{project.title}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <span className="project-year">{project.year}</span>
            <div className="project-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
});

WorkSection.displayName = "WorkSection";

export default WorkSection;
