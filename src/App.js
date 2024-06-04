import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import ShowLocationWithRouter from "./WithRouter";
import ProtectedRoute from "./pages/ProtectedRouter";
import { routes } from "./routes";

const DashBoard = () => {
  console.log("Dashboard render");
  return <h1 style={{ textAlign: "center" }}>DashBoard</h1>;
};

const App = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  const handleNext = () => {
    history.goForward();
  };
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            style={(isActive) => {
              return { color: isActive ? "red" : "white" };
            }}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            style={(isActive) => {
              return { color: isActive ? "red" : "white" };
            }}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={(isActive) => {
              return { color: isActive ? "red" : "white" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={(isActive) => {
              return { color: isActive ? "red" : "white" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/withRouter"
            style={(isActive) => {
              return { color: isActive ? "red" : "white" };
            }}
          >
            WithRouter
          </NavLink>
        </li>
      </ul>
      {/* {match && match.isExact ? <Profile /> : null} */}
      {/* <Prompt message="Are you sure." /> */}
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={route.id}
            />
          );
        })}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/users/" component={Users} sensitive />
        <Route path="/users/:id" component={UserInfo} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
       */}
        <ProtectedRoute
          path="/dashboard"
          component={DashBoard}
          isAuthenticated={false}
        />
        <Route path="/withRouter" component={ShowLocationWithRouter} />
      </Switch>
      {/* <Redirect to="/" /> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleBack}>back</button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
};

export default App;
