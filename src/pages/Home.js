import React from "react";
import { Route } from "react-router-dom";
function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Home </h1>
      <Route path="/abc">
        <h1>Home</h1>
      </Route>
    </>
  );
}
export default Home;
