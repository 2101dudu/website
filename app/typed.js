import React from "react";
import Typed from "typed.js";

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "$ Hello, I'm Eduardo.",
      ],
      typeSpeed: 100,
      backSpeed: 15,
      backDelay: 2000,
      loop: false,
      smartBackspace: true,
      cursorChar: "\u2588",
    };
    
    this.typed = new Typed(this.el, options);
  }

  

  componentWillUnmount() {
    // Cleanup animation
    this.typed.destroy();
  }

  render() {
    return (
      <span
        style={{ whiteSpace: "pre" }}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export default Typing;
