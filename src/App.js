import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyles";
import { ListOfPhotoCards } from "./containers/ListOfPhotoCards";
import { Logo } from "./components/Logo";
export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </React.Fragment>
);
