import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Contact from "./pages/Contact";
import ChartsMaps from "./pages/ChartsMaps";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import store from "./redux/store";

// Create a new instance of QueryClient, which will handle caching and fetching in react-query
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // Wrap the app in Redux Provider to make the Redux store available to all components
    <Provider store={store}>
      {/* Wrap the app in QueryClientProvider to provide react-query context */}
      <QueryClientProvider client={queryClient}>
        {/* Use React Router for navigation within the app */}
        <Router>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex-1 p-8">
                <Routes>
                  <Route path="/" element={<Contact />} />
                  <Route path="/charts-maps" element={<ChartsMaps />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
