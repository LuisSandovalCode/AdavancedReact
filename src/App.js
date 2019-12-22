import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Router } from '@reach/router'

const UserLogged = ({ children })=>{
  return children({ isAuth: false });
}
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return(
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
          <Home path="/"/>
          <Home path="/pet/:categoryid"/>
          <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
            {
              ({ isAuth }) => (
                isAuth 
                ?
                <Router>
                    <Favs path="/favs" />
                    <User path="/user" />
                </Router>
                :
                <Router>
                  <NotRegisterUser path="/favs" />
                  <NotRegisterUser path="/user" />
                </Router>
              )
            }
      </UserLogged>

      <NavBar />
    </React.Fragment>
  )
}
