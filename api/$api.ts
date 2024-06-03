import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_17j1g8v } from './login/google';
import type { Methods as Methods_88yz43 } from './movies';
import type { Methods as Methods_y9smcz } from './movies/_movieId@string';
import type { Methods as Methods_c8s91v } from './orders';
import type { Methods as Methods_1etraeb } from './orders/_orderId@string';
import type { Methods as Methods_arxoa5 } from './reservations';
import type { Methods as Methods_e9qm4l } from './reservations/_theaterSeatId@string';
import type { Methods as Methods_lxn7j8 } from './schedules';
import type { Methods as Methods_1lk3uzb } from './schedules/_scheduleId@string';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_pxqx5v } from './users/_userId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/login/google';
  const PATH1 = '/movies';
  const PATH2 = '/orders';
  const PATH3 = '/reservations';
  const PATH4 = '/schedules';
  const PATH5 = '/users';
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
    movies: {
      _movieId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Get movie details
           * @returns A successful response.
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_y9smcz['get']['resBody'], BasicHeaders, Methods_y9smcz['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get movie details
           * @returns A successful response.
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_y9smcz['get']['resBody'], BasicHeaders, Methods_y9smcz['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Delete movie
           * @returns A successful response.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_y9smcz['delete']['resBody'], BasicHeaders, Methods_y9smcz['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete movie
           * @returns A successful response.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_y9smcz['delete']['resBody'], BasicHeaders, Methods_y9smcz['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * Update movie
           * @returns A successful response.
           */
          put: (option: { body: Methods_y9smcz['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_y9smcz['put']['resBody'], BasicHeaders, Methods_y9smcz['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update movie
           * @returns A successful response.
           */
          $put: (option: { body: Methods_y9smcz['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_y9smcz['put']['resBody'], BasicHeaders, Methods_y9smcz['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get all movies
       * @returns A successful response.
       */
      get: (option?: { query?: Methods_88yz43['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_88yz43['get']['resBody'], BasicHeaders, Methods_88yz43['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get all movies
       * @returns A successful response.
       */
      $get: (option?: { query?: Methods_88yz43['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_88yz43['get']['resBody'], BasicHeaders, Methods_88yz43['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Create movie
       * @returns A successful response.
       */
      post: (option: { body: Methods_88yz43['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_88yz43['post']['resBody'], BasicHeaders, Methods_88yz43['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Create movie
       * @returns A successful response.
       */
      $post: (option: { body: Methods_88yz43['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_88yz43['post']['resBody'], BasicHeaders, Methods_88yz43['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_88yz43['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    orders: {
      _orderId: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          /**
           * Get order
           * @returns A successful response.
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1etraeb['get']['resBody'], BasicHeaders, Methods_1etraeb['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get order
           * @returns A successful response.
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1etraeb['get']['resBody'], BasicHeaders, Methods_1etraeb['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Delete order
           * @returns A successful response.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1etraeb['delete']['resBody'], BasicHeaders, Methods_1etraeb['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete order
           * @returns A successful response.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1etraeb['delete']['resBody'], BasicHeaders, Methods_1etraeb['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get all orders
       * @returns A successful response.
       */
      get: (option?: { query?: Methods_c8s91v['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_c8s91v['get']['resBody'], BasicHeaders, Methods_c8s91v['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get all orders
       * @returns A successful response.
       */
      $get: (option?: { query?: Methods_c8s91v['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_c8s91v['get']['resBody'], BasicHeaders, Methods_c8s91v['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * Create order
       * @returns A successful response.
       */
      post: (option: { body: Methods_c8s91v['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_c8s91v['post']['resBody'], BasicHeaders, Methods_c8s91v['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * Create order
       * @returns A successful response.
       */
      $post: (option: { body: Methods_c8s91v['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_c8s91v['post']['resBody'], BasicHeaders, Methods_c8s91v['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_c8s91v['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    reservations: {
      _theaterSeatId: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          /**
           * Delete reservation
           * @returns A successful response.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_e9qm4l['delete']['resBody'], BasicHeaders, Methods_e9qm4l['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete reservation
           * @returns A successful response.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_e9qm4l['delete']['resBody'], BasicHeaders, Methods_e9qm4l['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Create reservation
       * @returns A successful response.
       */
      post: (option: { body: Methods_arxoa5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_arxoa5['post']['resBody'], BasicHeaders, Methods_arxoa5['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Create reservation
       * @returns A successful response.
       */
      $post: (option: { body: Methods_arxoa5['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_arxoa5['post']['resBody'], BasicHeaders, Methods_arxoa5['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    schedules: {
      _scheduleId: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`;

        return {
          /**
           * Delete schedule
           * @returns A successful response.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1lk3uzb['delete']['resBody'], BasicHeaders, Methods_1lk3uzb['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete schedule
           * @returns A successful response.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1lk3uzb['delete']['resBody'], BasicHeaders, Methods_1lk3uzb['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * Update schedule
           * @returns A successful response.
           */
          put: (option: { body: Methods_1lk3uzb['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1lk3uzb['put']['resBody'], BasicHeaders, Methods_1lk3uzb['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update schedule
           * @returns A successful response.
           */
          $put: (option: { body: Methods_1lk3uzb['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1lk3uzb['put']['resBody'], BasicHeaders, Methods_1lk3uzb['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get all schedules
       * @returns A successful response.
       */
      get: (option?: { query?: Methods_lxn7j8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_lxn7j8['get']['resBody'], BasicHeaders, Methods_lxn7j8['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * Get all schedules
       * @returns A successful response.
       */
      $get: (option?: { query?: Methods_lxn7j8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_lxn7j8['get']['resBody'], BasicHeaders, Methods_lxn7j8['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      /**
       * Create schedule
       * @returns A successful response.
       */
      post: (option: { body: Methods_lxn7j8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_lxn7j8['post']['resBody'], BasicHeaders, Methods_lxn7j8['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * Create schedule
       * @returns A successful response.
       */
      $post: (option: { body: Methods_lxn7j8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_lxn7j8['post']['resBody'], BasicHeaders, Methods_lxn7j8['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_lxn7j8['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * Get user
           * @returns A successful response.
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_pxqx5v['get']['resBody'], BasicHeaders, Methods_pxqx5v['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get user
           * @returns A successful response.
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_pxqx5v['get']['resBody'], BasicHeaders, Methods_pxqx5v['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Delete user
           * @returns A successful response.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_pxqx5v['delete']['resBody'], BasicHeaders, Methods_pxqx5v['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete user
           * @returns A successful response.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_pxqx5v['delete']['resBody'], BasicHeaders, Methods_pxqx5v['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * Update user
           * @returns A successful response.
           */
          put: (option: { body: Methods_pxqx5v['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_pxqx5v['put']['resBody'], BasicHeaders, Methods_pxqx5v['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update user
           * @returns A successful response.
           */
          $put: (option: { body: Methods_pxqx5v['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_pxqx5v['put']['resBody'], BasicHeaders, Methods_pxqx5v['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get user
       * @returns A successful response.
       */
      get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Get user
       * @returns A successful response.
       */
      $get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
