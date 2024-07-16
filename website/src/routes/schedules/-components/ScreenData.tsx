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
    <>
      {theaterSchedule.map((scheduleData, index) => (
        <MovieContainer key={index}>
          {scheduleData.theaterSchedule.map((theaterData) => (
            <ScreenContainer key={theaterData.theater}>
              <Number>スクリーン<br/> {theaterData.theater}</Number>
              <TimeContainer>
                {theaterData.schedules.map((schedule, scheduleIndex) => (
                <ScreenTime
                  key={scheduleIndex}
                  startTime={schedule.startTime}
                  endTime={schedule.endTime}
                  isAvailable={schedule.isAvailable}
                />
                ))}
              </TimeContainer>
            </ScreenContainer>
          ))}
        </MovieContainer>
      ))}
    </>
  );
};

const MovieContainer = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

const ScreenContainer = styled.div`
  padding: 10px 0px 10px 15px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Number = styled.div`
  font-size: 30px;
  color: #fff;
  text-align: center;
`;

const TimeContainer = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
`;