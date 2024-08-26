import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg font-medium my-4">
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
