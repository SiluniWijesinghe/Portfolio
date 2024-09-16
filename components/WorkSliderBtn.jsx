"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useState } from "react";

const WorkSliderBtn = ({ containerStyle, btnStyles, iconsStyle }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyle} />
      </button>
      <button className={btnStyles}onClick={()=>swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyle} />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
