import React, { useState } from "react";

export default function StickyFooter() {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideFooter = () => setIsVisible(false);

  return (
    <footer
      className={`bg-slate-500 p-4 fixed bottom-0 left-0 w-full transition-transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <p className='text-center text-white'>
        Get in touch{" "}
        <a className='text-yellow-300 hover:text-gray-300' href='#'>
          here!
        </a>
      </p>
      <span
        className='absolute w-6 top-1/2 right-10 translate-y-[-50%] cursor-pointer'
        onClick={handleHideFooter}
      >
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z'
            fill='white'
          ></path>
        </svg>
      </span>
    </footer>
  );
}
