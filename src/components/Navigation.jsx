import { useTextSplit } from "../hooks/useTextSplit";

const Navigation = ({ ref, ...props }) => {
  const textRef = useTextSplit("a, p");

  return (
    <nav
      ref={(node) => {
        // Handle both refs (forwarded ref and internal textRef)
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
        textRef.current = node;
      }}
    >
      <div className="logo-name">
        <a href="#">GK</a>
      </div>
      <div className="nav-items">
        <div className="links">
          <a href="#">Resume</a>
          <p>/</p>
          <a href="#">Projects</a>
        </div>
        <div className="cta">
          <a href="#">Contact Me</a>
        </div>
      </div>
      <div className="divider"></div>
    </nav>
  );
};

export default Navigation;
