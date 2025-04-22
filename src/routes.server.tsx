import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <h3>Welcome to Shell App</h3>,
  },
  {
    path: "/exercises",
    element: <div />, // placeholder only
  },
  {
    path: "*",
    element: <div />, // Or show a NotFound component if needed
  }
];