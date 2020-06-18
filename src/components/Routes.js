import React from "react";
import { Route, Switch } from "react-router-dom";

import homepage from "./start/homepage";
import pagesearch from "./start/page_search";
import pagelocation from "./start/page_location";
import login from "./authlogin/Login";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/Login" exact component={login} />
        <Route path="/start" component={homepage} />
        <Route path="/page_search" component={pagesearch} />
        <Route path="/pagelocation" component={pagelocation} />
      </Switch>
    );
  }
}

export default Routes;
