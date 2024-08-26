import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
      >
        ☰
      </button>
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-52 z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <button
            onClick={closeSidebar}
            className="md:hidden text-white text-lg"
          >
            x
          </button>
        </div>
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
    </>
  );
};

export default Sidebar;
