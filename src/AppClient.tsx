import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes.client";

const AppRoutes = () => {
  const routeContent = useRoutes(routes);
  return routeContent;
};

const AppClient = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className="shell-container">
        <h2 className="shell-header">Shell App</h2>
        <nav className="shell-nav">
          <a style={{display: 'block'}}href="/" className="shell-link">Home</a>
          <a style={{display: 'block'}} href="/exercises" className="shell-link">Frontend Exercises</a>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default AppClient;