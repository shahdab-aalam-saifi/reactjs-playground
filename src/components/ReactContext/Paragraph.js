import React, { Component } from "react";
import PropTypes from "prop-types";

class Paragraph extends Component {
  render() {
    const { coloredTheme } = this.context;
    return <p style={{ color: coloredTheme }}>{this.props.children}</p>;
  }
}

Paragraph.contextTypes = {
  coloredTheme: PropTypes.string
};

export default Paragraph;