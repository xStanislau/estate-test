import React from "react";

export const withFixed = Component =>
  class extends React.Component {
    state = {
      ref: null,
      isOpen: false,
      isFixed: false
    };

    componentDidMount() {
      const { resizeHandler, onScroll } = this;
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("scroll", onScroll);
    }

    componentWillUnmount() {
      const { resizeHandler, onScroll } = this;
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", onScroll);
    }

    toggleMenu = () => {
      if (window.innerWidth < 992) {
        this.setState(state => {
          return { isOpen: !state.isOpen };
        });
      }
    };

    toggleFixed = value => {
      if (value !== undefined) {
        this.setState({
          isFixed: value
        });
      } else {
        this.setState(state => {
          return { isFixed: !state.isFixed };
        });
      }
    };

    setRef = element => {
      const { ref } = this.state;

      if (!ref)
        this.setState({
          ref: element
        });
    };

    onScroll = () => {
      const { ref } = this.state;
      const { toggleFixed } = this;

      if (ref && ref.offsetTop < window.pageYOffset) {
        toggleFixed(true);
      } else {
        toggleFixed(false);
      }
    };

    resizeHandler = () => {
      const { isOpen } = this.state;
      if (isOpen) {
        if (window.innerWidth > 991) {
          this.toggleMenu();
        }
      }
    };

    render() {
      const { isOpen, isFixed } = this.state;
      const { toggleMenu, setRef } = this;

      const body = document.querySelector("body");

      if (isOpen) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }

      const extendedProps = {
        isFixed,
        isOpen,
        toggleMenu,
        setRef,
        ...this.props
      };

      return <Component {...extendedProps} />;
    }
  };

export default withFixed;
