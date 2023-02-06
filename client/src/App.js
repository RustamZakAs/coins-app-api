import React, { Component } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Components/Login.jsx";

import store from "./Redux/store";

export default class App extends Component {
  state = {
    pagenameH: "Homepage",
    pagenameL: "Adminpage",
  };
  render() {
    return (
      <>
        <Provider store={store}>
            <Routes>
              <Route
                path="*"
                element={
                  <>
                    <Header pagename={this.state.pagenameH} />
                    <Main />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/login"
                element={<Login pagename={this.state.pagenameL} />}
              />
            </Routes>
        </Provider>
      </>
    );
  }
}
