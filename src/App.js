import React,{useContext} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Router, Redirect } from '@reach/router'
import {Context} from './Context';
import { NotFount } from "./pages/NotFound";
export const App = () => {
  const { isAuth  } = useContext(Context);
  return(
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
          <NotFount default/>
          <Home path="/"/>
          <Home path="/pet/:categoryid"/>
          <Detail path="/detail/:detailId" />
          {!isAuth && <NotRegisterUser path="/login"/>}
          {!isAuth && <Redirect from="/favs" to="/login"/>}
          {!isAuth && <Redirect from="/user" to="/login"/>}
          {isAuth && <Redirect from="/login" to="/"/>}
          <Favs path="/favs" />
          <User path="/user" />
      </Router>
      <NavBar />
    </React.Fragment>
  )
}
