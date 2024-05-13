import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import styled from "styled-components";

type Slide = {
  bg: string;
  text: string;
};
const slide: Slide[] = [
  {
    bg: "primary",
    text: "1",
  },
  {
    bg: "secondary",
    text: "2",
  },
  {
    bg: "warning",
    text: "3",
  },
  {
    bg: "danger",
    text: "4",
  },
  {
    bg: "primary",
    text: "5",
  },
  {
    bg: "secondary",
    text: "6",
  },
  {
    bg: "danger",
    text: "7",
  },
  {
    bg: "primary",
    text: "8",
  },
  {
    bg: "secondary",
    text: "9",
  },
];

const Slideshow = () => {
  return (
    <Sdiv>
      <SCarousel slideSize="33.333%" slidesToScroll={3} loop={false}>
        {slide.map((item, index) => (
          <CarouselSlide key={index} bg={item.bg}>
            <Sp>{item.text}</Sp>
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

const Sp = styled.p`
  //htmlは.
  font-size: 40px;
  color: white;
  text-align: center;
`;
