import styled from "styled-components";
import ScreenTime from "./ScreenTime";

type ScreenInfo = {
  name: string;
  number: string;
};

const InfoList: ScreenInfo[] = [
  {
    name: "HALシネマ特別編",
    number: "5",
  },
];

const MovieBox = () => {
  return (
    <>
      {InfoList.map((item, index) => (
        <ListContainer key={index}>
          <NameContainer>
            <p>{item.name}</p>
            <a href="#">作品詳細へ</a>
          </NameContainer>
          <MovieContainer>
            <Number>スクリーン{item.number}</Number>
            <ScreenTime />
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
  padding: 20px 5px;

  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Number = styled.div`
  font-size: 30px;
`;
