import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <div className="main">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/portfolio" component={PortfolioPage} exact />
          <Route path="/contact" component={ContactPage} exact />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
