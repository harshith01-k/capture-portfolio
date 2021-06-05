import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./Components/Nav";
import MovieDetails from "./pages/MovieDetails";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const Location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={Location} key={Location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
