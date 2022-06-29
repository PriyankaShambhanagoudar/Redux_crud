
import './App.css';
import User from "./pages/user";
import { Switch, Route } from "react-router-dom"
import Couter from "./Couter/Couter"
import Header from "./Navbar/Mainheader"
import Home from "./Home/Home"
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Auth from "./userComponent/Auth"

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <Fragment>
      <div className="App">
        {(isAuth && <Header />)}

        {!isAuth && <Auth />}

        {isAuth &&
          (
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/crud" component={User} />
                <Route path="/counter" component={Couter} />
              </Switch>
            </main>
          )}



      </div>
    </Fragment>
  );
}

export default App;
