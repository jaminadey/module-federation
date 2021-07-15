import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import resolveComponent from "./brandComponentResolver";
import Header from "./Header";

const createRouteToComponent = (componentImport) => {

  const Component = React.lazy(componentImport);

  return ((props) => <React.Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </React.Suspense>);
};

const AmendmentsRouterRoute = createRouteToComponent(resolveComponent("AmendmentsRouter"))
const PolicySummaryRoute = createRouteToComponent(resolveComponent("PolicySummary"));
const PolicyDetailRoute = createRouteToComponent(resolveComponent("PolicyDetail"));

const Frame = () => (
  <Router>
    <Container>
      <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <PolicySummaryRoute {...props} />
            )} />
          <Route
            path="/policy/:id"
            exact
            render={(props) => (
              <PolicyDetailRoute {...props} />
            )} />
          <React.Suspense fallback={null}>
            <Route
              path="/policy/:id/amend"
              component={AmendmentsRouterRoute} />
          </React.Suspense>
        </Switch>
    </Container>
  </Router>
);

export default Frame;
