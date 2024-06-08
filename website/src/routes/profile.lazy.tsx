import { createLazyFileRoute } from "@tanstack/react-router";
import { MovieCard } from "../pages/profile/components/MovieCard";
import { ProfileCard } from "../pages/profile/components/ProfileCard";
import styled from "styled-components";
import { LoginButton } from "../feature/auth/utils/LoginButton";

export const Route = createLazyFileRoute("/profile")({
  component: Index,
});

function Index() {
  return (
    <Container>
      <ProfileCard />
      <MovieCard />
      <LoginButton />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto 20px auto;
`;
