import React from "react";
import { useState } from "react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import DateDisp from "./DateDisp";
import "../styles/Slideshow.css";
import { get7Days } from "../-utils/getDate";
import { SlideDateType } from "../-types/SlideDate";
import { useScheduleId } from "../-hooks/useScheduleId";
const Slideshow = () => {
  const { scheduleId, setScheduleId } = useScheduleId();
  const [color, setColor] = useState<number>(0);

  const changeColor = (index: number) => {
    setColor(index);
    setScheduleId(index);
  };

  const slideData = get7Days();
  const selectedDate = slideData[scheduleId];

  return (
    <div className='SlideContainer'>
      <Carousel
        slideSize='25%'
        slidesToScroll={4}
        loop={false}
        className='Carousel'
      >
        {slideData.map((item: SlideDateType, index: number) => (
          <CarouselSlide
            key={index}
            style={{ cursor: "pointer", position: "relative" }}
            bg={
              index === color
                ? "rgba(4, 157, 130, 0.63)"
                : "rgba(191, 6, 179, 0.5)"
            }
            onClick={() => changeColor(index)}
          >
            <div className='DateContainer'>
              <p className='MonthDay'>
                {item.month}/{item.day}
              </p>
              <p className='Week'>({item.week})</p>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
      {selectedDate && <DateDisp date={selectedDate} />}
    </div>
  );
};

export default Slideshow;
