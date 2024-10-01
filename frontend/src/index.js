import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
import Index from "./pages/Index" ;
import AddExpense from "./pages/AddExpense";
import ViewExpenses from "./pages/ViewExpenses"
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/viewexpense" element={<ViewExpenses />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
