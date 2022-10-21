-- everything to do in postgress it start with \
-- 
-- CREATE TABLE products (
    -- id INT,
    -- name VARCHAR(50),
    -- price INT,
    -- on_sale BOOLEAN
-- );

-- CREATE TABLE restaurants (
  --   id BIGSERIAL NOT NULL PRIMARY KEY,
   --  name VARCHAR(50) NOT NULL,
   --  location  VARCHAR(50) NOT NULL,
   --  price_range int NOT NULL CHECK(price_range>=1 and price_range <=5)
-- );
-- -- INSERT INTO restaurants ( name, location, price_range) VALUES ('macdol'
-- , 'Kathmanud', 3 );

-- CREATE TABLE reviews (
--   id BIGSERIAL NOT NULL PRIMARY KEY,
--   restaurant_id  BIGINT  NOT NULL REFERENCES restaurants(id),
--   name VARCHAR(50) NOT NULL,
--   review TEXT NOT NULL,
--   rating INT NOT NULL check(rating >=1 and rating <=5)
-- );

-- CREATE TABLE customer (
--   id BIGSERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   phone_number INT NOT NULL,
--   address VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE animal_detail(
--   id BIGSERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   age INT NOT NULL,
--   description TEXT NOT NULL,
--   image BYTEA,
--   customer_id BIGINT NOT NULL REFERENCES customer(id)
-- );

-- CREATE TABLE reviews(
--   id BIGSERIAL NOT NULL PRIMARY KEY,
--   comments TEXT NOT NULL,
--   animal_id BIGINT NOT NULL REFERENCES animal_detail(id),
--   customer_id BIGINT NOT NULL REFERENCES customer(id)
-- );