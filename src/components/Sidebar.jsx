import { forwardRef } from "react";

const Sidebar = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="sidebar">
      <div className="logo">
        <img src="/cap3-square.jpg" alt="Logo" />
      </div>
      <div className="divider"></div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
