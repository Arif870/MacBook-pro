import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import Home from "./pages/Home/Home/Home";
import Dinner from "./pages/Home/Recipies/Dinner/Dinner";

import Lunch from "./pages/Home/Recipies/Lunch/Lunch";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SIgnup/SignUp";
import Footer from "./shared/Footer/Footer";

import Menu from "./shared/Navbar/Menu";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
