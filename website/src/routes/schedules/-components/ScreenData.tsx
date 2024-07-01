import styled from "styled-components";
import ScreenTime from "./ScreenTime";
import { TheaterSchedule } from "../types/TransFormData";

type ScreenDataProps = {
  theaterSchedule: TheaterSchedule[];
};

export const ScreenData = (props: ScreenDataProps) => {
  const { theaterSchedule } = props;

  return (
    <MovieContainer>
      {theaterSchedule.map((data, index) => (
        <ScreenContainer key={index}>
          <Number>スクリーン {index + 1}</Number>
          {data.schedules.map((data) => (
            <ScreenTime
              startTime={data.startTime}
              term={data.term}
              isFull={data.isFull}
            />
          ))}
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
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  font-size: 30px;
  color: #fff;
`;
