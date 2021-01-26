import React from "react";
import Container from "react-bootstrap/Container";

import UserDetails from "./UserDetails";

export const App = () => (
  <Container>
    <h1
      style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
      className="mt-5"
    >
      Data Connectivity Application Form Generator
    </h1>
    <div
      style={{ textAlign: "center", fontWeight: "lighter" }}
      className="mb-3"
    >
      Fill up the fields below to generate a pdf which you <strong>must</strong>{" "}
      sign and email to secretariat@gisaid.org
    </div>
    <UserDetails />
  </Container>
);

export default App;
