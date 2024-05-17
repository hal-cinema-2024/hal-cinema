import { useState } from "react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import styled from "styled-components";

type Slide = {
  bg: string;
  // text: string;
  month: string;
  day: string;
  week: string;
};
const slide: Slide[] = [
  {
    bg: "primary",
    month: "5",
    day: "1",
    week: "�?",
  },
  {
    bg: "secondary",
    month: "5",
    day: "2",
    week: "火",
  },
  {
    bg: "warning",
    month: "5",
    day: "3",
    week: "水",
  },
  {
    bg: "danger",
    month: "5",
    day: "4",
    week: "木",
  },
  {
    bg: "primary",
    month: "5",
    day: "5",
    week: "�?",
  },
  {
    bg: "secondary",
    month: "5",
    day: "6",
    week: "�?",
  },
  {
    bg: "danger",
    month: "5",
    day: "7",
    week: "日",
  },
  {
    bg: "primary",
    month: "5",
    day: "8",
    week: "�?",
  },
  {
    bg: "secondary",
    month: "5",
    day: "9",
    week: "火",
  },
  {
    bg: "secondary",
    month: "5",
    day: "10",
    week: "水",
  },
  {
    bg: "link",
    month: "5",
    day: "11",
    week: "木",
  },
  {
    bg: "secondary",
    month: "5",
    day: "12",
    week: "�?",
  },
];

const Slideshow = () => {
  const [color, setColor] = useState<number>(0);

  const changeColor = (index: number) => {
    setColor(index);
  };

  return (
    <Sdiv>
      <SCarousel slideSize="25%" slidesToScroll={4} loop={false}>
        {slide.map((item, index) => (
          <CarouselSlide
            key={index}
            style={{ cursor: "pointer", position: "relative" }}
            bg={index === color ? "#049D82" : "#BF06B3"}
            onClick={() => changeColor(index)}
          >
            <SSdiv>
              <Spp>
                {item.month}/{item.day}
              </Spp>
              <Sp>?�?{item.week}?�?</Sp>
            </SSdiv>
          </CarouselSlide>
        ))}
      </SCarousel>
    </Sdiv>
  );
};

export default Slideshow;

const Sdiv = styled.div`
  width: 1000px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
`;

const SCarousel = styled(Carousel)`
  width: 100%;
  opacity: 0.7;
`;

const SSdiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spp = styled.p`
  font-size: 65px;
  color: white;
  text-align: center;
`;

const Sp = styled.p`
  font-size: 35px;
  color: white;
  text-align: center;
`;
