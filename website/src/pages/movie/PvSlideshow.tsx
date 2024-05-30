import { pvslide } from "./youtubeIds";
import "./movie.css";

interface PvSlideProps {
  MovieId: pvslide[];
}

export const PvSlide = (props: PvSlideProps) => {
  const { MovieId } = props;

  return (
    <>
      {MovieId.map((item: pvslide) => {
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/watch?v=${item.Id}`}
        />;
      })}
    </>
  );
};
