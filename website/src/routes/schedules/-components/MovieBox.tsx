import styled from "styled-components";
import { ScreenData } from "./ScreenData";
import { ScheduleMock } from "../../../../../mock/types/schedule";
type MovieBoxProps = {
  schedules: ScheduleMock[];
};

export const MovieBox = (props: MovieBoxProps) => {
  const { schedules } = props;
  return (
    <>
      <ListContainer>
        {schedules && <ScreenData schedules={schedules} />}
      </ListContainer>
    </>
  );
};
export default MovieBox;

const ListContainer = styled.div`
  width: 1050px;
  margin: 0px auto 0px auto;
`;
