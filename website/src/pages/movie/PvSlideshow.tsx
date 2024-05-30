import { pvslide } from "./youtubeIds";
import "./movie.css";
import { AspectRatio } from "@yamada-ui/react";

interface PvSlideProps {
  MovieIds: pvslide[];
}

export const PvSlideshow = (props: PvSlideProps) => {
  const { MovieIds } = props;
  return (
    <>
      {MovieIds.map((item: pvslide) => {
        showIframe(item);
      })}
    </>
  );
};

const showIframe = (movie: pvslide) => {
  console.log("debug", movie);
  return (
    <>
      <AspectRatio w="full" ratio={16 / 9}>
        <iframe
          z-index="2147483647"
          width="560"
          height="315"
          src={`https://www.youtube.com/watch?v=${movie.Id}`}
        />
      </AspectRatio>
    </>
  );
};

// const showImage = (movie: pvslide) => {
//   return (
//     <>
//       <img src={movie.Id} alt="hoge" />
//     </>
//   );
// };
