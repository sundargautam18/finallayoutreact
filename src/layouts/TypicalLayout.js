import React from "react";
import { Outlet } from "react-router-dom";

const TypicalLayout = () => {
  return (
    <>
      <main className="main-content">
        <Outlet />
      </main>
      <footer>I am footer</footer>
    </>
  );
};

export default TypicalLayout;
