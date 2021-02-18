import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GloablLayout } from "./layouts/GlobalLayout";
import { routes } from "./routes";

const App = () => {
  return (
    <Router>
      <GloablLayout>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
        </Switch>
      </GloablLayout>
    </Router>
  );
};

export default App;
