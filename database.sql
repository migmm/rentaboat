CREATE DATABASE BOATSFORRENT;

CREATE TABLE countries(
    coutry_id SERIAL PRIMARY KEY,
    country_name STRING
);

CREATE TABLE cities(
    city_id SERIAL PRIMARY KEY,
    country_id integer,
    city_name STRING
);

CREATE TABLE harbour(
    harbour_id SERIAL PRIMARY KEY,
    harbour_name STRING,
    city_id integer
);

CREATE TABLE images(
    image_id SERIAL PRIMARY KEY,
    image_name STRING
);

CREATE TABLE avatar(
    image_id SERIAL PRIMARY KEY,
    avatar_image STRING
);


CREATE TABLE boat_owner(
    owner_id SERIAL PRIMARY KEY,
    owner_name STRING,
    owner_mail STRING,
    owner_phone STRING
    owner_avatar integer,
);

CREATE TABLE boats(
    boat_id SERIAL PRIMARY KEY,
    boat_type STRING,
    brand STRING,
    model STRING,
    year STRING,
    city_id STRING, 
    harbour_id STRING,
    capacity STRING,
    description STRING,
    length STRING,
    price STRING
);

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    customer_phone STRING,
    customer_name STRING,
    customer_avatar integer
);

CREATE TABLE rental(
    rental_id SERIAL PRIMARY KEY,
    boat_id STRING,
    available_date_from STRING,
    available_date_to STRING,
    location STRING,
    available_captain STRING
);

CREATE TABLE cart(
    customer_id STRING,
    boat_id STRING,
    date_from STRING,
    date_to STRING,
    total_price STRING
);

INSERT INTO boats (boat_type, brand, model, year, city_id, harbour_id, capacity, description, length, price) VALUES
('Yacht', 'Bavaria', 'Cruiser 40', '2012', 'Göcek', 'Ece Saray Marina & Resor', 6, '', 12.35, 290)
('Yacht', 'Dufour', '47 Harmony', '2006', 'Barcelona', 'Port Olímpic', 10, '', 13.95, 300);


