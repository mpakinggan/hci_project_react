// Based from https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
// Scroll Position: https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs

import React, { useEffect, useState } from "react";
import './style.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) > 0.25) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
            <button class="scrollToTopBtn">⬆︎</button>
        </div>}
    </div>
  );
}
