import SidebarHeader from "./SidebarHeader";
import HeaderContent from "./HeaderContent";
import BodyContent from "./BodyContent";
import ExtraButtons from "./ExtraButtons";
import FooterContent from "./FooterContent";
import ActionButtons from "./ActionButtons";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <SidebarHeader />
        <div style={{ fontWeight: "600" }}>Content</div>
        <HeaderContent />
        <BodyContent />
        <FooterContent />
        <ExtraButtons />
      </div>
      <div className="sidebar-action-buttons">
        <ActionButtons />
      </div>
    </div>
  );
}

export default Sidebar;
