import styled from "styled-components";
import ScreenTime from "./ScreenTime";
import { TheaterSchedule } from "../types/TransFormData";

export const ScreenData = (props: TheaterSchedule) => {
  const { theaterId } = props;

  return (
    <MovieContainer>
      {theaterId.map((data) => (
        <ScreenContainer key={data.scheduleId}>
          <Number>スクリーン{theaterId.theaterId}</Number>
          <ScreenTime screenData={theaterId.string} />
        </ScreenContainer>
      ))}
    </MovieContainer>
  );
};

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
  color: #fff;
`;
