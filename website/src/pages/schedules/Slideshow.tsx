import { useState } from "react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import styled from "styled-components";
import type { SlideType } from "./daliy";
import { slideData } from "./daliy";

const Slideshow = () => {
  const [color, setColor] = useState<number>(0);

  const changeColor = (index: number) => {
    setColor(index);
  };

  return (
    <Sdiv>
      <SCarousel slideSize="25%" slidesToScroll={4} loop={false}>
        {slideData.map((item: SlideType, index: number) => (
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
              <Sp>({item.week})</Sp>
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
