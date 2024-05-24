import styled from "styled-components";
import ScreenTime from "./ScreenTime";
// import { MovieType } from "./TimeData";
import { Movie } from "./TimeData";

// type Movie = {
//   screenings: MovieType[];//omit nammeをのぞく
// };
// type ScreenDataProps = {
//     screenings: MovieType[];//omit nammeをのぞく
//   };

// type Movie = Omit<MovieType, "name">;

const ScreenData = (props: Movie) => {
  const { screenings } = props;

  return (
    <MovieContainer>
      {screenings.map((screening, screenIndex) => (
        <ScreenContainer key={screenIndex}>
          <Number>スクリーン{screening.screenNumber}</Number>
          <ScreenTime screenData={screening.screenData} />
        </ScreenContainer>
      ))}
    </MovieContainer>
  );
};

export default ScreenData;

const MovieContainer = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

const ScreenContainer = styled.div`
  padding: 10px 0px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Number = styled.div`
  font-size: 30px;
`;
