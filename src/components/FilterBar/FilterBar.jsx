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
    if (ref && ref.current.offsetTop <= window.pageYOffset && !isFixed) {
      toggleFixed(true);
    } else if (ref.current.offsetTop > window.pageYOffset && isFixed) {
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
        <div className={`filter-bar py-4 ${fixed}`} ref={this.ref}>
          {children}
        </div>
        {isFixed && <div className="placeholder"></div>}
      </>
    );
  }
}

export default FilterBar;
