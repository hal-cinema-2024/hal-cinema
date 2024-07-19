/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const SchedulesIndexLazyImport = createFileRoute('/schedules/')()
const ProfileIndexLazyImport = createFileRoute('/profile/')()
const MoviesIndexLazyImport = createFileRoute('/movies/')()
const MoviesMovieIdIndexLazyImport = createFileRoute('/movies/$movieId/')()
const GoogleCallbackIndexLazyImport = createFileRoute('/google/callback/')()
const SchedulesScheduleIdFormIndexLazyImport = createFileRoute(
  '/schedules/$scheduleId/form/',
)()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SchedulesIndexLazyRoute = SchedulesIndexLazyImport.update({
  path: '/schedules/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/schedules/index.lazy').then((d) => d.Route),
)

const ProfileIndexLazyRoute = ProfileIndexLazyImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile/index.lazy').then((d) => d.Route))

const MoviesIndexLazyRoute = MoviesIndexLazyImport.update({
  path: '/movies/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/movies/index.lazy').then((d) => d.Route))

const MoviesMovieIdIndexLazyRoute = MoviesMovieIdIndexLazyImport.update({
  path: '/movies/$movieId/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/movies/$movieId/index.lazy').then((d) => d.Route),
)

const GoogleCallbackIndexLazyRoute = GoogleCallbackIndexLazyImport.update({
  path: '/google/callback/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/google/callback/index.lazy').then((d) => d.Route),
)

const SchedulesScheduleIdFormIndexLazyRoute =
  SchedulesScheduleIdFormIndexLazyImport.update({
    path: '/schedules/$scheduleId/form/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/schedules/$scheduleId/form/index.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/movies/': {
      id: '/movies/'
      path: '/movies'
      fullPath: '/movies'
      preLoaderRoute: typeof MoviesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/schedules/': {
      id: '/schedules/'
      path: '/schedules'
      fullPath: '/schedules'
      preLoaderRoute: typeof SchedulesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/google/callback/': {
      id: '/google/callback/'
      path: '/google/callback'
      fullPath: '/google/callback'
      preLoaderRoute: typeof GoogleCallbackIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/movies/$movieId/': {
      id: '/movies/$movieId/'
      path: '/movies/$movieId'
      fullPath: '/movies/$movieId'
      preLoaderRoute: typeof MoviesMovieIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/schedules/$scheduleId/form/': {
      id: '/schedules/$scheduleId/form/'
      path: '/schedules/$scheduleId/form'
      fullPath: '/schedules/$scheduleId/form'
      preLoaderRoute: typeof SchedulesScheduleIdFormIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  MoviesIndexLazyRoute,
  ProfileIndexLazyRoute,
  SchedulesIndexLazyRoute,
  GoogleCallbackIndexLazyRoute,
  MoviesMovieIdIndexLazyRoute,
  SchedulesScheduleIdFormIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/movies/",
        "/profile/",
        "/schedules/",
        "/google/callback/",
        "/movies/$movieId/",
        "/schedules/$scheduleId/form/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/movies/": {
      "filePath": "movies/index.lazy.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.lazy.tsx"
    },
    "/schedules/": {
      "filePath": "schedules/index.lazy.tsx"
    },
    "/google/callback/": {
      "filePath": "google/callback/index.lazy.tsx"
    },
    "/movies/$movieId/": {
      "filePath": "movies/$movieId/index.lazy.tsx"
    },
    "/schedules/$scheduleId/form/": {
      "filePath": "schedules/$scheduleId/form/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
