import React from "react";
// components
import Home from "./Home";
import Navbar from "./Navbar";
import Video from "./Video";
import Footer from "./Footer";
import News from "./News";
import Admin from "./Admin";
import NewsDetails from "./News-details";
import Uploads from "./uploads";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
                <Footer />
              </Route>
              <Route path="/video">
                <Video />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/news-details/:id">
                <NewsDetails />
              </Route>
              <Route path="/uploads">{() => <Uploads />}</Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
