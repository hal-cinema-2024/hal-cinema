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
// type Slide = {
//   bg: string;
//   text: string;
// };
const slide: Slide[] = [
  {
    bg: "primary",
    month: "5",
    day: "1",
    week: "月",
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
    week: "金",
  },
  {
    bg: "secondary",
    month: "5",
    day: "6",
    week: "土",
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
    week: "月",
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
    week: "金",
  },
  // {
  //   bg: "secondary",
  //   text: "12",
  // }
];

const Slideshow = () => {
  const [color, setColor] = useState<number | null>(null);

  const changeColor = (index: number) => {
    setColor(index);
  };

  return (
    <Sdiv>
      <SCarousel slideSize="25%" slidesToScroll={4} loop={false}>
        {slide.map((item, index) => (
          <CarouselSlide
            key={index}
            bg={index === color ? "blue" : item.bg}
            onClick={() => changeColor(index)}
          >
            <Spp>
              {item.month}/{item.day}
            </Spp>
            <Sp>（{item.week}）</Sp>
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
`;

const Spp = styled.p`
  //htmlは.
  /* margin: 100px 0 0 0; */
  font-size: 60px;
  color: white;
  text-align: center;
`;

const Sp = styled.p`
  //htmlは.
  /* margin: 60px 0 0 0; */
  font-size: 40px;
  color: white;
  text-align: center;
`;
