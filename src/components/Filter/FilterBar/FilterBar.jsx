import React, { Component } from "react";
import "./FilterBar.scss";
import { Button } from "react-bootstrap";
import FilterBadgeGroup from "./FilterBadgeGroup/FilterBadgeGroup";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    isFixed: false
  };

  componentDidMount() {
    const { onScroll, resizeHandler } = this;
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeHandler);

    if (window.innerWidth > 992) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  componentWillUnmount() {
    const { onScroll, resizeHandler } = this;
    window.removeEventListener("resize", resizeHandler);
    window.removeEventListener("scroll", onScroll);
  }

  resizeHandler = () => {
    if (window.innerWidth > 992) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  };

  onScroll = () => {
    const { toggleFixed } = this;
    if (10 <= window.scrollY) {
      toggleFixed(true);
    } else if (70 > window.scrollY) {
      toggleFixed(false);
    }
  };

  toggleFixed = value => {
    this.setState({
      isFixed: value
    });
  };

  render() {
    const { onClick } = this.props;
    const { isFixed, isMobile } = this.state;
    const fixed = isFixed ? "fixed" : "";

    return (
      <div className={`filter-bar ${fixed}`} ref={this.ref}>
        <div className="filter-bar__inner">
          <Button className="round " variant="danger" onClick={onClick}>
            {isMobile ? "Открыть" : "Открыть фильтр"}
          </Button>
          {!isMobile && <FilterBadgeGroup />}
        </div>
      </div>
    );
  }
}

export default FilterBar;
