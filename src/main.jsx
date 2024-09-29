import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import karma from '../src/features/karma'
const store = configureStore({
  reducer: karma,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
   
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
     
    </Routes>
  </BrowserRouter>
  </Provider>
);
