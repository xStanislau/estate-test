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
    const { onScroll, resizeHandler, ref } = this;
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeHandler);
    if (window.innerWidth > 768) {
      this.setState({ offsetTop: ref.current.offsetTop - 26, isMobile: false });
    } else {
      this.setState({ offsetTop: ref.current.offsetTop, isMobile: true });
    }

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
    if (window.innerWidth > 768) {
      this.setState({ offsetTop: 60 });
    } else {
      this.setState({ offsetTop: 55 });
    }

    if (window.innerWidth > 992) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
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
    const { onClick } = this.props;
    const { isFixed, offsetTop, isMobile } = this.state;
    const fixed = isFixed ? "fixed" : "";
    const style = fixed ? { top: offsetTop } : {};

    return (
      <div className={`filter-bar ${fixed}`} style={style} ref={this.ref}>
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
