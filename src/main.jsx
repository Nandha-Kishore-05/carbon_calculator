import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import karma from "../src/features/karma";
import data from "../src/features/data";
import header from "../src/features/header"
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage";
import { PersistGate } from 'redux-persist/integration/react';
import sessionStorage from 'redux-persist/lib/storage/session';
const persistConfig = {
  key: "root",
  storage: sessionStorage, 
};
const rootReducer = combineReducers({ karma: karma ,data:data,header:header});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor=persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
