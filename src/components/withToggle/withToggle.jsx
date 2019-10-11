import React from "react";
import { hideScrollOnBody, showScrollOnBody } from "../../utils/scroll";

export const withToggle = Component =>
  class extends React.Component {
    state = {
      ref: null,
      isOpen: false
    };

    toggleMenu = () => {
      this.setState(state => {
        return { isOpen: !state.isOpen };
      });
    };

    setRef = element => {
      const { ref } = this.state;

      if (!ref)
        this.setState({
          ref: element
        });
    };

    render() {
      const { isOpen } = this.state;
      const { toggleMenu, setRef } = this;

      const body = document.querySelector("body");

      if (isOpen) {
        hideScrollOnBody();
      } else {
        showScrollOnBody();
      }

      const extendedProps = {
        isOpen,
        toggleMenu,
        setRef,
        ...this.props
      };

      return <Component {...extendedProps} />;
    }
  };

export default withToggle;
