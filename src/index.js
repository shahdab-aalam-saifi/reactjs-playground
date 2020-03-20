import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import HackerNews from "./components/HackerNews";

///////////////////////////////////////////////////////////////////////////////

ReactDOM.render(<HackerNews />, document.getElementById("root"));

///////////////////////////////////////////////////////////////////////////////

// ReactDOM.render(
//   <SearchableList
//     list={list}
//   />,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////////////////////////////

// const list = [
//   { id: 1, name: "ABC" },
//   { id: 2, name: "DEF" },
//   { id: 3, name: "HIJ" },
//   { id: 4, name: "KLM" },
//   { id: 5, name: "NOP" }
// ];

// const coloredTheme = "green";

// ReactDOM.render(
//   <ThemeProvider coloredTheme={coloredTheme}>
//     <ReactContext />
//   </ThemeProvider>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////////////////////////////

// PlainRedux();

///////////////////////////////////////////////////////////////////////////////

// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////////////////////////////

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
