import React from "react";
import "./index.scss";
import BookList from "./components/BookList";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import PageDetails from "./components/PageDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/book/:id/page/:page" component={PageDetails} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
