import styled from "styled-components";
// import ScreenTime from "./ScreenTime";
import { MovieType } from "./TimeData";
import ScreenData from "./ScreenData";

type MovieBoxProps = {
  infoList: MovieType[];
};

const MovieBox = (props: MovieBoxProps) => {
  const { infoList } = props;

  return (
    <>
      {infoList.map((item, index) => (
        <ListContainer key={index}>
          <NameContainer>
            <p>{item.name}</p>
            <a href="#">作品詳細へ</a>
          </NameContainer>
          <ScreenData screenings={item.screenings} />
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
