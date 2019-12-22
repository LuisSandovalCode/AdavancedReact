import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyles";
import { ListOfPhotoCards } from "./containers/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { from } from "apollo-boost";
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  console.log(detailId);
  return(
    <React.Fragment>
    <GlobalStyle />
    <Logo />
    {
      detailId
      ?
      <PhotoCardWithQuery id={detailId}/>
      :
      <React.Fragment>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={2} />
      </React.Fragment>
    }
</React.Fragment>
  )
}
