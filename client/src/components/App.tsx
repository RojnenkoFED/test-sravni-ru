import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OffersPage from "./OffersPage/OffersPage";
import AboutOfferPage from "./AboutOfferPage/AboutOfferPage";

import './index.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={OffersPage} path="/" exact />
        <Route component={AboutOfferPage} path="/about/:offerId" exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
