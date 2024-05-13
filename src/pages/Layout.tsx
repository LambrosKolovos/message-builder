import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../App.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  );
}
