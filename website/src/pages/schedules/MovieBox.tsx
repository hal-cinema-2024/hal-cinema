import styled from "styled-components";
import ScreenTime from "./ScreenTime";
import { MovieType } from "./TimeData";

type MovieBoxProps = {
  infoList: MovieType[];
};

const MovieBox = ({ infoList }: MovieBoxProps) => {
  return (
    <>
      {infoList.map((item, index) => (
        <ListContainer key={index}>
          <NameContainer>
            <p>{item.name}</p>
            <a href="#">作品詳細へ</a>
          </NameContainer>
          <MovieContainer>
            {item.screenings.map((screening, screenIndex) => (
              <ScreenContainer key={screenIndex}>
                <Number>スクリーン{screening.screenNumber}</Number>
                <ScreenTime screenData={screening.screenData} />
              </ScreenContainer>
            ))}
          </MovieContainer>
        </ListContainer>
      ))}
    </>
  );
};

export default MovieBox;

const ListContainer = styled.div`
  width: 1050px;
  margin: 20px auto 20px auto;
`;
const NameContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #919191;

  p {
    font-size: 35px;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

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
