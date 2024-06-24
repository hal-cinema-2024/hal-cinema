import { createLazyFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import Slideshow from "./ components/Slideshow";
import MovieBox from "./ components/MovieBox";
import { InfoList } from "./ components/TimeData";

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
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  padding-top: 4vh;
  margin-bottom: -2.5vh;
  font-size: 2rem;
  color: white;
`;
