import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <nav>
        <ul className="space-y-2">
          {/* List item for the Contact page */}
          <li>
            {/* NavLink for the Contact page with dynamic classes based on active state */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-4 ${
                  isActive
                    ? "bg-gray-700 font-medium text-xl"
                    : "font-normal text-lg"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          {/* List item for the Charts & Maps page */}
          <li>
            <NavLink
              to="/charts-maps"
              className={({ isActive }) =>
                `block p-4 ${
                  isActive
                    ? "bg-gray-700 font-medium text-xl"
                    : "font-normal text-lg"
                }`
              }
            >
              Charts & Maps
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
