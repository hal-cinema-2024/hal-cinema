import styled from "styled-components";
import ScreenTime from "./ScreenTime";
import { TransformedData } from "../-types/TransFormData";
import { Fragment } from "react";

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
            <Fragment key={theaterData.theater}>
              <Number>スクリーン {theaterData.theater}</Number>
              {theaterData.schedules.map((schedule, scheduleIndex) => (
                <ScreenTime
                  key={scheduleIndex}
                  startTime={schedule.startTime}
                  endTime={schedule.endTime}
                  isAvailable={schedule.isAvailable}
                />
              ))}
            </Fragment>
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
