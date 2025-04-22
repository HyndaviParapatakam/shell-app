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
      <div>
        <h2>Shell App (Client)</h2>
        <nav>
          <a href="/">Home</a> | <a href="/exercises">Frontend Exercises</a>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default AppClient;