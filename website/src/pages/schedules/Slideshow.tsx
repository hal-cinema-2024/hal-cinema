import { Carousel, CarouselSlide } from "@yamada-ui/carousel";

const Slideshow = () => {
  return (
    <>
      <Carousel>
        <CarouselSlide bg="primary">1</CarouselSlide>
        <CarouselSlide bg="secondary">2</CarouselSlide>
        <CarouselSlide bg="warning">3</CarouselSlide>
        <CarouselSlide bg="danger">4</CarouselSlide>
      </Carousel>
    </>
  );
};

export default Slideshow;
