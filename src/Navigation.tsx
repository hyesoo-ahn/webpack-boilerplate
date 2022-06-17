import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <div style={{ padding: "0 15px", backgroundColor: "gray", height: 50 }}>
          <div className="nav_container">
            <Link to="/">
              <h5 style={{ cursor: "pointer" }}>HOME</h5>
            </Link>
            <Link to="/page1">
              <h5 style={{ cursor: "pointer" }}>PAGE1</h5>
            </Link>
            <Link to="/page2">
              <h5 style={{ cursor: "pointer" }}>PAGE2</h5>
            </Link>
          </div>
        </div>

        <div style={{ padding: "0 15px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
