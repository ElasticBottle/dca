import React from "react";
import Container from "react-bootstrap/Container";

import UserDetails from "./UserDetails";

import { Font } from "@react-pdf/renderer";
import fontRegular from "./assets/fonts/OpenSans-Regular.ttf";
import fontBold from "./assets/fonts/OpenSans-Bold.ttf";

export const App = () => {
  const registerFont = () => {
    Font.register({
      family: "openSans",
      fonts: [
        { src: fontRegular }, // font-style: normal, font-weight: normal
        { src: fontBold, fontStyle: "bold" },
      ],
    });
  };

  React.useEffect(() => {
    registerFont();
  }, []);

  return (
    <Container>
      <h1
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
        className="mt-5"
      >
        Data Connectivity Application
      </h1>
      <div
        style={{ textAlign: "center", fontWeight: "lighter" }}
        className="mb-3"
      >
        Please complete the application, print it out, sign it, and send it as a
        .pdf by email addressed to dca@gisaid.org
      </div>
      <UserDetails />
    </Container>
  );
};

export default App;

// left justify
// in
