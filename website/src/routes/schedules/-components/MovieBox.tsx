import styled from "styled-components";
// import ScreenTime from "./ScreenTime";
import { ScreenData } from "./ScreenData";
import { TransformedData } from "../-types/TransFormData";
type MovieBoxProps = {
  schedules: TransformedData[];
};

export const MovieBox = (props: MovieBoxProps) => {
  const { schedules } = props;

  return (
    <>
      <ListContainer>
        <NameContainer>
          <p>映画一覧</p>
        </NameContainer>
        {schedules && <ScreenData theaterSchedule={schedules} />}
      </ListContainer>
    </>
  );
};
export default MovieBox;

const ListContainer = styled.div`
  width: 1050px;
  margin: 0px auto 0px auto;
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
