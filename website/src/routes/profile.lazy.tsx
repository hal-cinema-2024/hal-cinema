import { createLazyFileRoute } from "@tanstack/react-router";
import { MovieCard } from "../pages/profile/components/MovieCard";
import { ProfileCard } from "../pages/profile/components/ProfileCard";

export const Route = createLazyFileRoute("/profile")({
  component: Index,
});

function Index() {
  return (
    <>
      <ProfileCard />
      <MovieCard />
    </>
  );
}
