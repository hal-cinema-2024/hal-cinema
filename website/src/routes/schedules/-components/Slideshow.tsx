import { useState } from "react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { SlideType, slideData } from "./daliy";
import DateDisp from "./DateDisp";
import "../styles/Slideshow.css";

const Slideshow = () => {
  const [color, setColor] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const changeColor = (index: number) => {
    setColor(index);
    setSelectedIndex(index);
  };

  const selectedDate = slideData[selectedIndex];

  return (
    <div className="SlideContainer">
      <Carousel
        slideSize="25%"
        slidesToScroll={4}
        loop={false}
        className="Carousel"
      >
        {slideData.map((item: SlideType, index: number) => (
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
            <div className="DateContainer">
              <p className="MonthDay">
                {item.month}/{item.day}
              </p>
              <p className="Week">({item.week})</p>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
      {selectedDate && <DateDisp date={selectedDate} />}
    </div>
  );
};

export default Slideshow;
