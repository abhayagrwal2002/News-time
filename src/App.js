import "./App.css";
// require("dotenv").config();
// API KEYS :- b02d5a2c6cb34e73ad34188310295958    c1bc64df59eb47b68e7a619f4241739e
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = "pub_116608fb6a9af6021e5afc4128283a0cc5711";
  const [progress,setProgress] =useState(0);

  return (
    <>
      <div>
        <Router>
          <LoadingBar height={3} color="#f11946" progress={progress}/>
          <Navbar />
          <Routes>
            <Route path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="top"
                  country={"in"}
                  category="top"
                />
              }
            />
            <Route path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  country={"in"}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  country={"in"}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  country={"in"}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  country={"in"}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  country={"in"}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  country={"in"}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;