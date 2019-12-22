import React,{useContext,Suspense} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Router, Redirect } from '@reach/router'
import {Context} from './Context';
import { NotFount } from "./pages/NotFound";


const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));

export const App = () => {
  const { isAuth  } = useContext(Context);
  return(
    <Suspense fallback={<div/>}>
      <GlobalStyle />
      <Logo />
      <Router>
          <NotFount default/>
          <Home path="/"/>
          <Home path="/pet/:categoryid"/>
          <Detail path="/detail/:detailId" />
          <NotRegisterUser path="/login"/>
          {!isAuth && <NotRegisterUser path="/login"/>}
          {!isAuth && <Redirect from="/favs" to="/login" noThrow/>}
          {!isAuth && <Redirect from="/user" to="/login" noThrow />}
          {isAuth && <Redirect from="/login" to="/" noThrow />}
          <Favs path="/favs" />
          <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  )
}
