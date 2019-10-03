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
    if (window.innerWidth > 768) {
      this.setState({ offsetTop: ref.current.offsetTop - 26 });
    } else {
      this.setState({ offsetTop: ref.current.offsetTop });
    }
  }

  componentWillUnmount() {
    const { onScroll, resizeHandler } = this;
    window.removeEventListener("resize", resizeHandler);
    window.removeEventListener("scroll", onScroll);
  }

  resizeHandler = () => {
    if (window.innerWidth > 768) {
      this.setState({ offsetTop: 60 });
    } else {
      this.setState({ offsetTop: 55 });
    }
  };

  onScroll = () => {
    const { toggleFixed } = this;

    if (1 <= window.scrollY) {
      toggleFixed(true);
    } else if (81 > window.scrollY) {
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
    const style = fixed ? { top: offsetTop } : {};

    return (
      <div className={`filter-bar ${fixed}`} style={style} ref={this.ref}>
        <div className="filter-bar__inner">{children}</div>
      </div>
    );
  }
}

export default FilterBar;
