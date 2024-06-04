import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function About() {
  const history = useHistory();
  console.log(history);
  return <h1 style={{ textAlign: "center" }}>About</h1>;
}

export default About;
