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
    const { onScroll } = this;
    window.addEventListener("scroll", onScroll);
  }

  componentWillUnmount() {
    const { onScroll } = this;
    window.removeEventListener("scroll", onScroll);
  }

  onScroll = () => {
    const { ref, toggleFixed } = this;
    const { isFixed } = this.state;
    const { offsetTop } = ref.current;
    if (1 < window.pageYOffset) {
      toggleFixed(true);
    } else if (offsetTop > window.pageYOffset && isFixed) {
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
      <>
        {/* {isFixed && (
          <div
            className="placeholder"
            style={{ paddingTop: this.ref.current.clientHeight - 24 }}
          ></div>
        )} */}
        <div className={`filter-bar ${fixed}`} ref={this.ref}>
          <div className="filter-bar__inner">{children}</div>
        </div>
      </>
    );
  }
}

export default FilterBar;
