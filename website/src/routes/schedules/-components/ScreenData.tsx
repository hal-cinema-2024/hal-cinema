import styled from "styled-components";
import ScreenTime from "./ScreenTime";
import { TransformedData } from "../-types/TransFormData";
// import { Fragment } from "react";

type ScreenDataProps = {
  theaterSchedule: TransformedData[];
};

export const ScreenData = (props: ScreenDataProps) => {
  const { theaterSchedule } = props;

  return (
    <MovieContainer>
      {theaterSchedule.map((scheduleData, index) => (
        <ScreenContainer key={index}>
          {scheduleData.theaterSchedule.map((theaterData) => (
            <StyleFragment key={theaterData.theater}>
              <Number>スクリーン<br/> {theaterData.theater}</Number>
              {theaterData.schedules.map((schedule, scheduleIndex) => (
                <ScreenTime
                  key={scheduleIndex}
                  startTime={schedule.startTime}
                  endTime={schedule.endTime}
                  isAvailable={schedule.isAvailable}
                />
              ))}
            </StyleFragment>
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
  /* background-color: #ddd; */
`;

const StyleFragment = styled.div`
  display: flex;
  align-items: center;
`;


const Number = styled.div`
  font-size: 30px;
  color: #fff;
  text-align: center;
`;
