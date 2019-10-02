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
    const { onScroll, resizeHandler, ref } = this;
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeHandler);
    this.setState({ offsetTop: ref.current.offsetTop });
  }

  componentWillUnmount() {
    const { onScroll, resizeHandler } = this;
    window.removeEventListener("resize", resizeHandler);
    window.removeEventListener("scroll", onScroll);
  }

  resizeHandler = () => {
    const { ref } = this;
    debugger;
    this.setState({ offsetTop: ref.current.offsetTop });
  };

  onScroll = () => {
    const { toggleFixed } = this;
    const { offsetTop } = this.state;

    if (offsetTop < window.pageYOffset) {
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
    const { isFixed, offsetTop } = this.state;
    const fixed = isFixed ? "fixed" : "";
    if (fixed) {
      debugger;
    }
    const style = fixed ? { top: offsetTop } : {};

    return (
      <div className={`filter-bar ${fixed}`} style={style} ref={this.ref}>
        <div className="filter-bar__inner">{children}</div>
      </div>
    );
  }
}

export default FilterBar;
