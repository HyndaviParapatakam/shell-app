import React from "react";
import { RouteObject } from "react-router-dom";
import ExercisesAppWrapper from "./ExercisesAppWrapper";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <h3>Welcome to Shell App</h3>,
  },
  {
    path: "/exercises",
    element: <ExercisesAppWrapper />,
  },
  {
    path: "*",
    element: <div />, // Or show a NotFound component if needed
  }
];