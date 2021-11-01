import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import * as pages from "../../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={pages.Home} path="/" exact />
        <Route component={pages.Home} path="*" />
      </Switch>
    </BrowserRouter>
  );
};
