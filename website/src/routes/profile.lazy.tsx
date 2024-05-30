import { createLazyFileRoute } from "@tanstack/react-router";
import { MovieCard } from "../pages/profile/components/MovieCard";

export const Route = createLazyFileRoute("/profile")({
  component: MovieCard,
});
