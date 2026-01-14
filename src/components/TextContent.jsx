import { forwardRef } from "react";
import { useTextSplit } from "../hooks/useTextSplit";

const TextContent = forwardRef((props, ref) => {
  const headerRef = useTextSplit("h1");
  const siteInfoRef = useTextSplit("h2, p");
  const footerRef = useTextSplit("h2");

  return (
    <>
      <div ref={headerRef} className="header">
        <h1>Full Stack Developer & Software Engineer</h1>
      </div>

      <div ref={siteInfoRef} className="site-info">
        <h2>
          Computer Science graduate specializing in web development, algorithms,
          and system design
        </h2>
        <div className="divider"></div>
        <div className="site-info-copy">
          <p>Passionate problem solver</p>
          <p>Available for opportunities</p>
        </div>
      </div>

      <div ref={footerRef} className="hero-footer">
        <h2>View My Work</h2>
      </div>
    </>
  );
});

TextContent.displayName = "TextContent";

export default TextContent;
