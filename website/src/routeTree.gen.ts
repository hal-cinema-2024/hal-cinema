/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";

// Create Virtual Routes

const SchedulesRouteLazyImport = createFileRoute("/schedules")();
const ProfileRouteLazyImport = createFileRoute("/profile")();
const MoviesRouteLazyImport = createFileRoute("/movies")();
const RouteLazyImport = createFileRoute("/")();
const ProfileEditRouteLazyImport = createFileRoute("/profile/edit")();
const MoviesMovieIdRouteLazyImport = createFileRoute("/movies/$movieId")();
const GoogleCallbackRouteLazyImport = createFileRoute("/google/callback")();
const SchedulesScheduleIdReservedRouteLazyImport = createFileRoute(
  "/schedules/$scheduleId/reserved"
)();
const SchedulesScheduleIdFormRouteLazyImport = createFileRoute(
  "/schedules/$scheduleId/form"
)();

// Create/Update Routes

const SchedulesRouteLazyRoute = SchedulesRouteLazyImport.update({
  path: "/schedules",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/schedules/route.lazy").then((d) => d.Route)
);

const ProfileRouteLazyRoute = ProfileRouteLazyImport.update({
  path: "/profile",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/profile/route.lazy").then((d) => d.Route)
);

const MoviesRouteLazyRoute = MoviesRouteLazyImport.update({
  path: "/movies",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/movies/route.lazy").then((d) => d.Route));

const RouteLazyRoute = RouteLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/route.lazy").then((d) => d.Route));

const ProfileEditRouteLazyRoute = ProfileEditRouteLazyImport.update({
  path: "/edit",
  getParentRoute: () => ProfileRouteLazyRoute,
} as any).lazy(() =>
  import("./routes/profile/edit/route.lazy").then((d) => d.Route)
);

const MoviesMovieIdRouteLazyRoute = MoviesMovieIdRouteLazyImport.update({
  path: "/$movieId",
  getParentRoute: () => MoviesRouteLazyRoute,
} as any).lazy(() =>
  import("./routes/movies/$movieId/route.lazy").then((d) => d.Route)
);

const GoogleCallbackRouteLazyRoute = GoogleCallbackRouteLazyImport.update({
  path: "/google/callback",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/google/callback/route.lazy").then((d) => d.Route)
);

const SchedulesScheduleIdReservedRouteLazyRoute =
  SchedulesScheduleIdReservedRouteLazyImport.update({
    path: "/$scheduleId/reserved",
    getParentRoute: () => SchedulesRouteLazyRoute,
  } as any).lazy(() =>
    import("./routes/schedules/$scheduleId/reserved/route.lazy").then(
      (d) => d.Route
    )
  );

const SchedulesScheduleIdFormRouteLazyRoute =
  SchedulesScheduleIdFormRouteLazyImport.update({
    path: "/$scheduleId/form",
    getParentRoute: () => SchedulesRouteLazyRoute,
  } as any).lazy(() =>
    import("./routes/schedules/$scheduleId/form/route.lazy").then(
      (d) => d.Route
    )
  );

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof RouteLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/movies": {
      id: "/movies";
      path: "/movies";
      fullPath: "/movies";
      preLoaderRoute: typeof MoviesRouteLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/profile": {
      id: "/profile";
      path: "/profile";
      fullPath: "/profile";
      preLoaderRoute: typeof ProfileRouteLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/schedules": {
      id: "/schedules";
      path: "/schedules";
      fullPath: "/schedules";
      preLoaderRoute: typeof SchedulesRouteLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/google/callback": {
      id: "/google/callback";
      path: "/google/callback";
      fullPath: "/google/callback";
      preLoaderRoute: typeof GoogleCallbackRouteLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/movies/$movieId": {
      id: "/movies/$movieId";
      path: "/$movieId";
      fullPath: "/movies/$movieId";
      preLoaderRoute: typeof MoviesMovieIdRouteLazyImport;
      parentRoute: typeof MoviesRouteLazyImport;
    };
    "/profile/edit": {
      id: "/profile/edit";
      path: "/edit";
      fullPath: "/profile/edit";
      preLoaderRoute: typeof ProfileEditRouteLazyImport;
      parentRoute: typeof ProfileRouteLazyImport;
    };
    "/schedules/$scheduleId/form": {
      id: "/schedules/$scheduleId/form";
      path: "/$scheduleId/form";
      fullPath: "/schedules/$scheduleId/form";
      preLoaderRoute: typeof SchedulesScheduleIdFormRouteLazyImport;
      parentRoute: typeof SchedulesRouteLazyImport;
    };
    "/schedules/$scheduleId/reserved": {
      id: "/schedules/$scheduleId/reserved";
      path: "/$scheduleId/reserved";
      fullPath: "/schedules/$scheduleId/reserved";
      preLoaderRoute: typeof SchedulesScheduleIdReservedRouteLazyImport;
      parentRoute: typeof SchedulesRouteLazyImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  RouteLazyRoute,
  MoviesRouteLazyRoute: MoviesRouteLazyRoute.addChildren({
    MoviesMovieIdRouteLazyRoute,
  }),
  ProfileRouteLazyRoute: ProfileRouteLazyRoute.addChildren({
    ProfileEditRouteLazyRoute,
  }),
  SchedulesRouteLazyRoute: SchedulesRouteLazyRoute.addChildren({
    SchedulesScheduleIdFormRouteLazyRoute,
    SchedulesScheduleIdReservedRouteLazyRoute,
  }),
  GoogleCallbackRouteLazyRoute,
});

/* prettier-ignore-end */
