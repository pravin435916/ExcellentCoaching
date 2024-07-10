import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-2 rounded-full cursor-pointer z-50"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <MdKeyboardArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;