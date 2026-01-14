const Sidebar = ({ ref, ...props }) => {
  return (
    <div ref={ref} className="sidebar">
      <div className="logo">
        <img src={`${import.meta.env.BASE_URL}gk_new.ico`} alt="Logo" />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Sidebar;
