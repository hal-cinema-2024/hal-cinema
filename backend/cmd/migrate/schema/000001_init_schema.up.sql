CREATE TABLE "users" (
  "user_id" varchar(63) PRIMARY KEY,
  "first_name" varchar(31) NOT NULL,
  "last_name" varchar(31) NOT NULL,
  "first_name_reading" varchar(31) NOT NULL,
  "last_name_reading" varchar(31) NOT NULL,
  "icon_path" string(255),
  "age" smallint NOT NULL,
  "gender" smallint NOT NULL,
  "phone_number" varchar(15) NOT NULL,
  "created_at" TIMESTAMPZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestampz NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  "is_delete" boolean NOT NULL DEFAULT false
);

CREATE TABLE "schedules" (
  "schedule_id" varchar(63) PRIMARY KEY,
  "theater_id" varchar(63) NOT NULL,
  "movie_id" varchar(63) NOT NULL,
  "start_date" timestampz NOT NULL
);

CREATE TABLE "theaters" (
  "theater_id" varchar(63) PRIMARY KEY,
  "theater_size_id" varchar(63) NOT NULL,
  "name" varchar(63) NOT NULL
);

CREATE TABLE "theaters_sizes" (
  "theater_size_id" varchar(63) PRIMARY KEY,
  "name" varchar(63) NOT NULL,
  "capacity" int NOT NULL
);

CREATE TABLE "movies" (
  "movie_id" varchar(63) PRIMARY KEY,
  "name" varchar(127) NOT NULL,
  "director" varchar(63) NOT NULL,
  "sammary" text NOT NULL,
  "thumbnail_path" verchar(255) NOT NULL,
  "link" text NOT NULL,
  "term" int NOT NULL,
  "release_date" timestampz NOT NULL,
  "end_date" timestampz NOT NULL,
  "is_delete" bool NOT NULL DEFAULT false
);

CREATE TABLE "movie_images" (
  "movie_id" verchar(63),
  "file_path" verchar(255) NOT NULL,
  "order" int NOT NULL
);

CREATE TABLE "theaters_seats" (
  "theater_seat_id" varchar(63) PRIMARY KEY,
  "user_id" varchar(63) NOT NULL,
  "schedule_id" varchar(63) NOT NULL,
  "seat_name" varchar(31) NOT NULL
);

CREATE TABLE "orders" (
  "order_id" varchar(63) PRIMARY KEY,
  "user_id" varchar(63) NOT NULL,
  "created_at" timestampz NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "orders_details" (
  "order_detail_id" varchar(63) PRIMARY KEY,
  "order_id" varchar(63) NOT NULL,
  "theaters_seats_id" varchar(63) NOT NULL,
  "price_type_id" varchar(63) NOT NULL
);

CREATE TABLE "price_types" (
  "price_type_id" varchar(63) PRIMARY KEY,
  "name" varchar(63) NOT NULL,
  "price" uint NOT NULL
);