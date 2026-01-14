const Sidebar = ({ ref, ...props }) => {
  return (
    <div ref={ref} className="sidebar">
      <div className="logo">
        <img src="/cap3-square.jpg" alt="Logo" />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Sidebar;
