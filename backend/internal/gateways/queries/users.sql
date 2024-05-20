-- CREATE TABLE "users" (
--   "user_id" varchar(63) PRIMARY KEY,
--   "first_name" varchar(31) NOT NULL,
--   "last_name" varchar(31) NOT NULL,
--   "first_name_reading" varchar(31) NOT NULL,
--   "last_name_reading" varchar(31) NOT NULL,
--   "email" varchar(255) NOT NULL,
--   "icon_path" varchar(255),
--   "age" int NOT NULL,
--   "gender" smallint NOT NULL,
--   "phone_number" varchar(15) NOT NULL,
--   "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "updated_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "is_delete" boolean NOT NULL DEFAULT false
-- );


-- name: GetUserByID :one
SELECT (
    user_id,
    first_name,
    last_name,
    first_name_reading,
    last_name_reading,
    email,
    icon_path,
    age,
    gender,
    phone_number,
    created_at,
    updated_at,
    is_delete
) FROM users WHERE user_id = $1;