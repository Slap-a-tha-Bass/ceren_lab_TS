import React, { useState } from "react";
import { ScrollUpButton } from "../styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollUpButton
        style={{display: visible ? 'inline' : 'none'}}
      onClick={scrollToTop}
    ><i className="bi bi-arrow-up"></i></ScrollUpButton>
  );
};

export default ScrollButton;
