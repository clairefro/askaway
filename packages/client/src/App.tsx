import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext, defaultContext } from "./context/AppContext";
import { GloablLayout } from "./layouts/GlobalLayout";
import { routes } from "./routes";

const App = () => {
  return (
    <AppContext.Provider value={defaultContext}>
      <Router>
        <GloablLayout>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
          </Switch>
        </GloablLayout>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
