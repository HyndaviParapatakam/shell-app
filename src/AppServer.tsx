import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";

const AppServer = ({ location }: { location: string }) => {
  return (
    <StaticRouter location={location}>
      <div>
        <Routes>
        <Route path="/" element={<h3>Welcome to Shell App Repo</h3>} />
        <Route path="/exercises" element={<div />} />
        </Routes>
      </div>
    </StaticRouter>
  );
};

export default AppServer;
