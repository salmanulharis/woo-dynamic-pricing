import SidebarNav from "../navigation/SidebarNav";
import ExternalLinkIcon from "../../assets/icons/externalLinkIcon";
import "./style.css";

export default function AdminLayout({ children }) {
  return (
    <div className="acowdp-shell">
      <div className="acowdp-header">
        <h1 className="acowdp-logo">Dynamic Pricing</h1>
        <div className="acowdp-header-buttons">
          <button className="acowdp-header-button acowdp-btn-sm acowdp-btn-ghost">
            <ExternalLinkIcon />
            Docs
          </button>
        </div>
      </div>
      <main className="acowdp-content">{children}</main>
    </div>
  );
}
