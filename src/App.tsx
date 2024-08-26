import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "leaflet/dist/leaflet.css";

import Contact from "./pages/Contact";
import ChartsMaps from "./pages/ChartsMaps";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import store from "./redux/store";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
