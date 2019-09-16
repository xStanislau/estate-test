import React, { Component } from "react";

class FilterBar extends Component {
  render() {
    const { className, children } = this.props;

    return <div className={className}>{children}</div>;
  }
}

export default FilterBar;
