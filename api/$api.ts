import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_17j1g8v } from './login/google';
import type { Methods as Methods_z4p91x } from './v1/movies';
import type { Methods as Methods_3ikcyd } from './v1/movies/_movieId@string';
import type { Methods as Methods_1p1uf81 } from './v1/orders';
import type { Methods as Methods_uv94x9 } from './v1/orders/_orderId@string';
import type { Methods as Methods_1rgm8b3 } from './v1/reservations';
import type { Methods as Methods_f1jgdz } from './v1/reservations/_theaterSeatId@string';
import type { Methods as Methods_1lrqztm } from './v1/schedules';
import type { Methods as Methods_18xz7cx } from './v1/schedules/_scheduleId@string';
import type { Methods as Methods_odq9yo } from './v1/users';
import type { Methods as Methods_e2jjl1 } from './v1/users/_userId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/login/google';
  const PATH1 = '/v1/movies';
  const PATH2 = '/v1/orders';
  const PATH3 = '/v1/reservations';
  const PATH4 = '/v1/schedules';
  const PATH5 = '/v1/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    login: {
      google: {
        /**
         * Google Login
         * @returns A successful response.
         */
        post: (option: { body: Methods_17j1g8v['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17j1g8v['post']['resBody'], BasicHeaders, Methods_17j1g8v['post']['status']>(prefix, PATH0, POST, option).json(),
        /**
         * Google Login
         * @returns A successful response.
         */
        $post: (option: { body: Methods_17j1g8v['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17j1g8v['post']['resBody'], BasicHeaders, Methods_17j1g8v['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
    v1: {
      movies: {
        _movieId: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            /**
             * Get movie details
             * @returns A successful response.
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_3ikcyd['get']['resBody'], BasicHeaders, Methods_3ikcyd['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Get movie details
             * @returns A successful response.
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_3ikcyd['get']['resBody'], BasicHeaders, Methods_3ikcyd['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete movie
             * @returns A successful response.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_3ikcyd['delete']['resBody'], BasicHeaders, Methods_3ikcyd['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete movie
             * @returns A successful response.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_3ikcyd['delete']['resBody'], BasicHeaders, Methods_3ikcyd['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            /**
             * Update movie
             * @returns A successful response.
             */
            put: (option: { body: Methods_3ikcyd['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_3ikcyd['put']['resBody'], BasicHeaders, Methods_3ikcyd['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update movie
             * @returns A successful response.
             */
            $put: (option: { body: Methods_3ikcyd['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_3ikcyd['put']['resBody'], BasicHeaders, Methods_3ikcyd['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Get all movies
         * @returns A successful response.
         */
        get: (option?: { query?: Methods_z4p91x['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_z4p91x['get']['resBody'], BasicHeaders, Methods_z4p91x['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * Get all movies
         * @returns A successful response.
         */
        $get: (option?: { query?: Methods_z4p91x['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_z4p91x['get']['resBody'], BasicHeaders, Methods_z4p91x['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        /**
         * Create movie
         * @returns A successful response.
         */
        post: (option: { body: Methods_z4p91x['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_z4p91x['post']['resBody'], BasicHeaders, Methods_z4p91x['post']['status']>(prefix, PATH1, POST, option).json(),
        /**
         * Create movie
         * @returns A successful response.
         */
        $post: (option: { body: Methods_z4p91x['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_z4p91x['post']['resBody'], BasicHeaders, Methods_z4p91x['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_z4p91x['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      orders: {
        _orderId: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`;

          return {
            /**
             * Get order
             * @returns A successful response.
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_uv94x9['get']['resBody'], BasicHeaders, Methods_uv94x9['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Get order
             * @returns A successful response.
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_uv94x9['get']['resBody'], BasicHeaders, Methods_uv94x9['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete order
             * @returns A successful response.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_uv94x9['delete']['resBody'], BasicHeaders, Methods_uv94x9['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete order
             * @returns A successful response.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_uv94x9['delete']['resBody'], BasicHeaders, Methods_uv94x9['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Get all orders
         * @returns A successful response.
         */
        get: (option?: { query?: Methods_1p1uf81['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1p1uf81['get']['resBody'], BasicHeaders, Methods_1p1uf81['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Get all orders
         * @returns A successful response.
         */
        $get: (option?: { query?: Methods_1p1uf81['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1p1uf81['get']['resBody'], BasicHeaders, Methods_1p1uf81['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        /**
         * Create order
         * @returns A successful response.
         */
        post: (option: { body: Methods_1p1uf81['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1p1uf81['post']['resBody'], BasicHeaders, Methods_1p1uf81['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * Create order
         * @returns A successful response.
         */
        $post: (option: { body: Methods_1p1uf81['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1p1uf81['post']['resBody'], BasicHeaders, Methods_1p1uf81['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1p1uf81['get']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      reservations: {
        _theaterSeatId: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`;

          return {
            /**
             * Delete reservation
             * @returns A successful response.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_f1jgdz['delete']['resBody'], BasicHeaders, Methods_f1jgdz['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete reservation
             * @returns A successful response.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_f1jgdz['delete']['resBody'], BasicHeaders, Methods_f1jgdz['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Create reservation
         * @returns A successful response.
         */
        post: (option: { body: Methods_1rgm8b3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1rgm8b3['post']['resBody'], BasicHeaders, Methods_1rgm8b3['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * Create reservation
         * @returns A successful response.
         */
        $post: (option: { body: Methods_1rgm8b3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1rgm8b3['post']['resBody'], BasicHeaders, Methods_1rgm8b3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      schedules: {
        _scheduleId: (val2: string) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            /**
             * Delete schedule
             * @returns A successful response.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_18xz7cx['delete']['resBody'], BasicHeaders, Methods_18xz7cx['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete schedule
             * @returns A successful response.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_18xz7cx['delete']['resBody'], BasicHeaders, Methods_18xz7cx['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            /**
             * Update schedule
             * @returns A successful response.
             */
            put: (option: { body: Methods_18xz7cx['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_18xz7cx['put']['resBody'], BasicHeaders, Methods_18xz7cx['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update schedule
             * @returns A successful response.
             */
            $put: (option: { body: Methods_18xz7cx['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_18xz7cx['put']['resBody'], BasicHeaders, Methods_18xz7cx['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Get all schedules
         * @returns A successful response.
         */
        get: (option?: { query?: Methods_1lrqztm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1lrqztm['get']['resBody'], BasicHeaders, Methods_1lrqztm['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * Get all schedules
         * @returns A successful response.
         */
        $get: (option?: { query?: Methods_1lrqztm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1lrqztm['get']['resBody'], BasicHeaders, Methods_1lrqztm['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        /**
         * Create schedule
         * @returns A successful response.
         */
        post: (option: { body: Methods_1lrqztm['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1lrqztm['post']['resBody'], BasicHeaders, Methods_1lrqztm['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * Create schedule
         * @returns A successful response.
         */
        $post: (option: { body: Methods_1lrqztm['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1lrqztm['post']['resBody'], BasicHeaders, Methods_1lrqztm['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1lrqztm['get']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH5}/${val2}`;

          return {
            /**
             * Get user
             * @returns A successful response.
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_e2jjl1['get']['resBody'], BasicHeaders, Methods_e2jjl1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Get user
             * @returns A successful response.
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_e2jjl1['get']['resBody'], BasicHeaders, Methods_e2jjl1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * Delete user
             * @returns A successful response.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_e2jjl1['delete']['resBody'], BasicHeaders, Methods_e2jjl1['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * Delete user
             * @returns A successful response.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_e2jjl1['delete']['resBody'], BasicHeaders, Methods_e2jjl1['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            /**
             * Update user
             * @returns A successful response.
             */
            put: (option: { body: Methods_e2jjl1['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_e2jjl1['put']['resBody'], BasicHeaders, Methods_e2jjl1['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * Update user
             * @returns A successful response.
             */
            $put: (option: { body: Methods_e2jjl1['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_e2jjl1['put']['resBody'], BasicHeaders, Methods_e2jjl1['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * Get user
         * @returns A successful response.
         */
        get: (option?: { query?: Methods_odq9yo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody'], BasicHeaders, Methods_odq9yo['get']['status']>(prefix, PATH5, GET, option).json(),
        /**
         * Get user
         * @returns A successful response.
         */
        $get: (option?: { query?: Methods_odq9yo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody'], BasicHeaders, Methods_odq9yo['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_odq9yo['get']['query'] } | undefined) =>
          `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
