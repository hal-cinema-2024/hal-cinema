
ALTER TABLE "orders" DROP CONSTRAINT IF EXISTS "orders_user_id_fkey";


ALTER TABLE "schedules" DROP CONSTRAINT IF EXISTS "schedules_theater_id_fkey";
ALTER TABLE "schedules" DROP CONSTRAINT IF EXISTS "schedules_movie_id_fkey";


ALTER TABLE "theaters_seats" DROP CONSTRAINT IF EXISTS "theaters_seats_user_id_fkey";
ALTER TABLE "theaters_seats" DROP CONSTRAINT IF EXISTS "theaters_seats_schedule_id_fkey";


ALTER TABLE "theaters" DROP CONSTRAINT IF EXISTS "theaters_theater_size_id_fkey";


ALTER TABLE "orders_details" DROP CONSTRAINT IF EXISTS "orders_details_price_type_id_fkey";
ALTER TABLE "orders_details" DROP CONSTRAINT IF EXISTS "orders_details_theaters_seats_id_fkey";
ALTER TABLE "orders_details" DROP CONSTRAINT IF EXISTS "orders_details_order_id_fkey";


ALTER TABLE "movie_images" DROP CONSTRAINT IF EXISTS "movie_images_movie_id_fkey";

DROP TABLE IF EXISTS "orders_details";


DROP TABLE IF EXISTS "orders";

DROP TABLE IF EXISTS "price_types";


DROP TABLE IF EXISTS "theaters_seats";



DROP TABLE IF EXISTS "movie_images";

DROP TABLE IF EXISTS "schedules";


DROP TABLE IF EXISTS "theaters";


DROP TABLE IF EXISTS "movies";


DROP TABLE IF EXISTS "theaters_sizes";

DROP TABLE IF EXISTS "users";
