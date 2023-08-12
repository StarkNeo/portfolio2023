import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
function Root() {
  
  return (
    <>
    <Navigation />
    <Outlet />
    </>
  )
}

export default Root;