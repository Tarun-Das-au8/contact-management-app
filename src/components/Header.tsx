import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { titles } from "../utils/types"; // Import title mappings for different routes

const Header: React.FC = () => {
  // Get the current location object to access the pathname
  const location = useLocation();

  // Use useMemo to compute the title based on the current pathname
  // This memoizes the value and only recalculates when location.pathname changes
  const title = useMemo(() => {
    return titles[location.pathname];
  }, [location.pathname]);

  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <div className="text-center text-3xl font-bold">{title}</div>
    </header>
  );
};

export default Header;
