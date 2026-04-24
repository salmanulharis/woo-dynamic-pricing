import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/rules", label: "Pricing Rules" },
  { to: "/settings", label: "Settings" },
];

export default function SidebarNav() {
  return (
    <nav className="acowdp-nav" aria-label="Admin sections">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? "acowdp-nav-link is-active" : "acowdp-nav-link"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
