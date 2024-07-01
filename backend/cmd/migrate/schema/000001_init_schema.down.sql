ALTER TABLE "session" DROP CONSTRAINT "session_user_id_fkey";

ALTER TABLE "orders" DROP CONSTRAINT "orders_user_id_fkey";

ALTER TABLE "schedules" DROP CONSTRAINT "schedules_theater_id_fkey";

ALTER TABLE "schedules" DROP CONSTRAINT "schedules_movie_id_fkey";

ALTER TABLE "theaters" DROP CONSTRAINT "theaters_theater_size_id_fkey";

ALTER TABLE "movie_images" DROP CONSTRAINT "movie_images_movie_id_fkey";

ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey";

ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_user_id_fkey";

ALTER TABLE "role_permissions" DROP CONSTRAINT "role_permissions_role_id_fkey";

ALTER TABLE "role_permissions" DROP CONSTRAINT "role_permissions_permission_id_fkey";

ALTER TABLE "theaters_seats" DROP CONSTRAINT "theaters_seats_price_type_fkey";

ALTER TABLE "theaters_seats" DROP CONSTRAINT "theaters_seats_order_id_fkey";

ALTER TABLE "orders" DROP CONSTRAINT "orders_schedule_id_fkey";

DROP INDEX "theaters_seats_seat_name_key";

DROP TABLE "users";

DROP TABLE "user_roles";

DROP TABLE "roles";

DROP TABLE "permissions";

DROP TABLE "role_permissions";

DROP TABLE "session";

DROP TABLE "schedules";

DROP TABLE "theaters";

DROP TABLE "theaters_sizes";

DROP TABLE "movies";

DROP TABLE "movie_images";

DROP TABLE "theaters_seats";

DROP TABLE "orders";

DROP TABLE "price_types";