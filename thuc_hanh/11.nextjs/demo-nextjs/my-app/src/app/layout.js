import React from "react";
import "./globals.css";
import ClientLayout from "@/layout/ClientLayout";

function layout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/img/client-fav.png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </head>
        <body data-scrolling-animation="true">
          <div className="sp-body">
            <ClientLayout>{children}</ClientLayout>
          </div>
        </body>
      </html>
    </>
  );
}

export default layout;
