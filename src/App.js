import React, { lazy, Suspense } from "react";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./Pages/Home"));
  const About = lazy(() => import("./Pages/About"));
  const FAQ = lazy(() => import("./Pages/FAQ"));
  const Press = lazy(() => import("./Pages/Press"));

  return (
    <div>
      <Nav />
      <div>
        <Routes className="r-container">
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FAQ />
              </Suspense>
            }
          />
          <Route
            path="/press"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Press />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
