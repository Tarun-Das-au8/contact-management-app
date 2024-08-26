import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { titles } from "../utils/types";

const Header: React.FC = () => {
  const location = useLocation();

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
