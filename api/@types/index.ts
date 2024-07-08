/* eslint-disable */
export type ProtobufAny = {
  '@type'?: string | undefined
}

export type RpcStatus = {
  code?: number | undefined
  message?: string | undefined
  details?: ProtobufAny[] | undefined
}

export type V1CreateMovieRequest = {
  movieName?: string | undefined
  director?: string | undefined
  summary?: string | undefined
  thumbnail?: string | undefined
  link?: string | undefined
  term?: number | undefined
  releaseDate?: string | undefined
  endDate?: string | undefined
  movieImage?: string[] | undefined
}

export type V1CreateMovieResponse = {
  movieId?: string | undefined
}

export type V1CreateOrderRequest = {
  scheduleId?: string | undefined
  seatSelects?: V1SeatSelect[] | undefined
}

export type V1CreateOrderResponse = {
  orderId?: string | undefined
}

export type V1CreateScheduleRequest = {
  movieId?: string | undefined
  theaterId?: string | undefined
  startTime?: string | undefined
}

export type V1CreateScheduleResponse = {
  scheduleId?: string | undefined
}

export type V1CreateSeatReservationRequest = {
  scheduleId?: string | undefined
  userId?: string | undefined
  seatId?: string[] | undefined
}

export type V1CreateSeatReservationResponse = {
  theaterSeatId?: string | undefined
}

export type V1DeleteMovieResponse = {
  movieId?: string | undefined
}

export type V1DeleteOrderResponse = {
  orderId?: string | undefined
}

export type V1DeleteScheduleResponse = {
  scheduleId?: string | undefined
}

export type V1DeleteSeatReservationResponse = {
  theaterSeatId?: string | undefined
}

export type V1DeleteUserResponse = {
  userId?: string | undefined
}

export type V1GetMovie = {
  movieId?: string | undefined
  movieName?: string | undefined
  director?: string | undefined
  thumbnail?: string | undefined
  summary?: string | undefined
  link?: string | undefined
  term?: number | undefined
  releaseDate?: string | undefined
  endDate?: string | undefined
}

export type V1GetMovieResponse = {
  movie?: V1Movie | undefined
}

export type V1GetMoviesResponse = {
  movie?: V1GetMovie[] | undefined
}

export type V1GetOrderResponse = {
  movieId?: string | undefined
  movieName?: string | undefined
  theaterId?: number | undefined
  theaterName?: string | undefined
  screeningDatetime?: string | undefined
  totalPrice?: string | undefined
  seatDetails?: V1SeatDetail[] | undefined
  user?: V1MiniUser | undefined
}

export type V1GetOrdersResponse = {
  order?: V1Orders[] | undefined
}

export type V1GetScheduleResult = {
  scheduleId?: string | undefined
  movieId?: string | undefined
  movieName?: string | undefined
  theater?: string | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  isAvailable?: boolean | undefined
}

export type V1GetSchedulesResponse = {
  selectedDate?: string | undefined
  selectedMovies?: string | undefined
  schedule?: V1GetScheduleResult[] | undefined
}

export type V1GetTheaterSeatsResponse = {
  orderId?: string | undefined
  seat?: string[] | undefined
}

export type V1GetUserResponse = {
  user?: V1User | undefined
}

export type V1GetUsersResponse = {
  user?: V1User[] | undefined
}

export type V1GoogleLoginRequest = {
  code?: string | undefined
}

export type V1GoogleLoginResponse = {
  userId?: string | undefined
}

export type V1MiniUser = {
  userId?: string | undefined
  userName?: string | undefined
  userNameKana?: string | undefined
  email?: string | undefined
}

export type V1Movie = {
  movieId?: string | undefined
  movieName?: string | undefined
  director?: string | undefined
  thumbnail?: string | undefined
  summary?: string | undefined
  link?: string | undefined
  term?: number | undefined
  releaseDate?: string | undefined
  endDate?: string | undefined
  movieImage?: string[] | undefined
}

export type V1Orders = {
  orderId?: string | undefined
  userId?: string | undefined
  movieName?: string | undefined
  screen?: string | undefined
  orderDetail?: V1OrdersDetail[] | undefined
}

export type V1OrdersDetail = {
  seatName?: string | undefined
  priceType?: string | undefined
  price?: number | undefined
}

export type V1Seat = {
  key?: string | undefined
  name?: string | undefined
}

export type V1SeatDetail = {
  theaterSeatId?: string | undefined
  seatName?: string | undefined
  priceType?: string | undefined
  price?: number | undefined
}

export type V1SeatSelect = {
  seatName?: string | undefined
  priceType?: number | undefined
}

export type V1UpdateMovieResponse = {
  movieId?: string | undefined
}

export type V1UpdateScheduleResponse = {
  scheduleId?: string | undefined
}

export type V1UpdateTheaterSeatResponse = {
  theaterSeatId?: string | undefined
}

export type V1UpdateUserResponse = {
  userId?: string | undefined
}

export type V1User = {
  userId?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  firstNameReading?: string | undefined
  lastNameReading?: string | undefined
  gender?: number | undefined
}
