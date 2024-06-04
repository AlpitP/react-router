import React from "react";
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function Contact() {
  return (
    <BrowserRouter>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <ol style={{ marginInline: "47%" }}>
        <li>
          <Link to="/contact/a">A</Link>
        </li>
        <li>
          <Link to="/contact/b">B</Link>
        </li>
        <li>
          <Link to="/contact/c">C</Link>
        </li>
      </ol>
      <Switch>
        <Route path="/contact/a" component={A} />
        <Route path="/contact/b" component={B} />
        <Route path="/contact/c" component={C} />
        <Redirect to="/contact" />
      </Switch>
    </BrowserRouter>
  );
}
const A = () => {
  return <div style={{ textAlign: "center" }}>Contact A</div>;
};
const B = () => {
  return <div style={{ textAlign: "center" }}>Contact B</div>;
};
const C = () => {
  return <div style={{ textAlign: "center" }}>Contact C</div>;
};

export default Contact;
export { A, B, C };
