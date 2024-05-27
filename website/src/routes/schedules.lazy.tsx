import { createLazyFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import Slideshow from "../pages/schedules/Slideshow";
import MovieBox from "../pages/schedules/MovieBox";
import { InfoList } from "../pages/schedules/TimeData";

export const Route = createLazyFileRoute("/schedules")({
  component: Index,
});

function Index() {
  return (
    <SchedulesContainer>
      <Title>上映スケジュール</Title>
      <Slideshow />
      <MovieBox infoList={InfoList} />
    </SchedulesContainer>
  );
}

const SchedulesContainer = styled.div`
  padding: 30px 0 100px;
  /* background-color: pink; */
`;

const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
  font-size: 40px;
`;
