import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import React from "react";

function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <div className="main-wrapper border flex h-screen">
        <Sidebar />
        <main className="flex-2">{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default ClientLayout;
