import React from "react";
import Header from "./components/Header";
import theme from "./components/UI/Theme";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Try from "./components/Try";
import Hero from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Hero />
      </Router>
    </ThemeProvider>
  );
}

export default App;
