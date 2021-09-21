import React from "react";
import { Home } from "./Home";
import { AddTask } from "./AddTask";
import { EditTask } from "./EditTask";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./GlobalState";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddTask} />
            <Route path="/edit/:id" component={EditTask} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
