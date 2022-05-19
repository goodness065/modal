import React from "react";
import { useGlobalContext } from "./context";
import {
  FaTimes,
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <p className="logo">
          <span className="span1">Living</span>
          <span className="span2">stone</span>
        </p>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        <li>
          <a href="/">
            <FaHome />
            Home
          </a>
        </li>

        <li>
          <a href="/">
            <FaUserFriends />
            Team
          </a>
        </li>

        <li>
          <a href="/">
            <FaFolderOpen />
            Projects
          </a>
        </li>
        <li>
          <a href="/">
            <FaCalendarAlt />
            Calendar
          </a>
        </li>
        <li>
          <a href="/">
            <FaWpforms />
            Documents
          </a>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
        </li>

        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com">
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a href="https://www.behance.net">
            <FaBehance />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
