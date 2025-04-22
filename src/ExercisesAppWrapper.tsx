import React, { lazy, Suspense } from "react";

const ExercisesApp = React.lazy(() => import('frontend_exercises/ExercisesApp'));

const ExercisesAppWrapper = () => (
  <Suspense fallback={<div>Loading Exercises...</div>}>
    <ExercisesApp />
  </Suspense>
);

export default ExercisesAppWrapper;