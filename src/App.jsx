import React from "react";
import createStore from "./redux/store";
import Navigator from "./navigation/Navigator";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Navigator />
    </Router>
  </Provider>
);

export default App;
