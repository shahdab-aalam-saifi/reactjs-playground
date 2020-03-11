import React, { Component } from "react";
import PropTypes from "prop-types";

class ThemeProvider extends Component {
  getChildContext() {
    return {
      coloredTheme: this.props.coloredTheme
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

ThemeProvider.childContextTypes = {
  coloredTheme: PropTypes.string
};

export default ThemeProvider;