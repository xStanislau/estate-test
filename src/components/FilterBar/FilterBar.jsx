import React, { Component } from "react";
import "./FilterBar.scss";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    isFixed: false
  };

  componentDidMount() {
    const { onScroll, ref } = this;
    window.addEventListener("scroll", onScroll);
    this.setState({ offsetTop: ref.current.offsetTop });
  }

  componentWillUnmount() {
    const { onScroll } = this;
    window.removeEventListener("scroll", onScroll);
  }

  onScroll = () => {
    const { toggleFixed } = this;
    const { offsetTop } = this.state;

    if (offsetTop - 105 < window.pageYOffset) {
      toggleFixed(true);
    } else if (offsetTop > window.pageYOffset) {
      toggleFixed(false);
    }
  };

  toggleFixed = value => {
    this.setState({
      isFixed: value
    });
  };

  render() {
    const { children } = this.props;
    const { isFixed } = this.state;
    const fixed = isFixed ? "fixed" : "";

    return (
      <div className={`filter-bar ${fixed}`} ref={this.ref}>
        <div className="filter-bar__inner">{children}</div>
      </div>
    );
  }
}

export default FilterBar;
