import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminAddNewMed from "./pages/AdminAddNewMed";
import Update from "./pages/Update";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/login"
          element={
            <>
              <NavBar /> <Login />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AdminAddNewMed />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
