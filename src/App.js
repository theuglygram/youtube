import Home from "components/pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "App.css";
import Channel from "components/pages/Channel";
import VideoPlayer from "components/pages/VideoPlayer";
import ScrollRestore from "components/ScrollRestore";

const App = () => {
  return (
    <Router>
      <ScrollRestore />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/channel/:slug" exact component={Channel} />
        <Route path="/VideoPlayer" exact component={VideoPlayer} />

        <Route component={VideoPlayer} />
      </Switch>
    </Router>
  );
};

export default App;
