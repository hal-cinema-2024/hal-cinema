import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import DateDisp from "./DateDisp";
import "../-styles/slideshow.css";
import { SlideDateType } from "../-types/SlideDate";
import { useScheduleId } from "../-hooks/useScheduleId";
import { get7Days } from "../-utils/getDate";
const Slideshow = () => {
  const { scheduleId, changeId } = useScheduleId();

  const slideData = get7Days();
  const selectedDate = slideData[scheduleId];

  const handleClicked = (index: number) => {
    if (index === undefined) {
      console.log("index is not defined");
    }
    changeId(index);
  };

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
              index === scheduleId
                ? "rgba(4, 157, 130, 0.63)"
                : "rgba(191, 6, 179, 0.5)"
            }
            onClick={() => handleClicked(index)}
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
