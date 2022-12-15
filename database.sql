CREATE DATABASE BOATSFORRENT;

CREATE TABLE boats(
    boat_id SERIAL PRIMARY KEY,
    boat_type VARCHAR(40),
    brand VARCHAR(40),
    model VARCHAR(40),
    year VARCHAR(40),
    city_id VARCHAR(40), 
    harbour_id  VARCHAR(40),
    capacity VARCHAR(40),
    length VARCHAR(40),
    price VARCHAR(40)
);

CREATE TABLE boat_owner(
    owner_id SERIAL PRIMARY KEY,
    owner_name VARCHAR(40),
    owner_phone VARCHAR(40)
);

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    customer_phone VARCHAR(40),
    customer_name VARCHAR(40)
);

CREATE TABLE rental(
    rental_id SERIAL PRIMARY KEY,
    boat_id VARCHAR(40),
    available_date_from VARCHAR(40),
    available_date_to VARCHAR(40),
    location VARCHAR(40),
    available_captain VARCHAR(40)
);

CREATE TABLE cart(
    customer_id VARCHAR(40),
    boat_id VARCHAR(40),
    date_from VARCHAR(40),
    date_to VARCHAR(40),
    total_price VARCHAR(40)
);

CREATE TABLE countries(
    coutry_id SERIAL PRIMARY KEY,
    country_name VARCHAR(40)
);

CREATE TABLE cities(
    city_id SERIAL PRIMARY KEY,
    country_id VARCHAR(40),
    city_name VARCHAR(40)
);

CREATE TABLE harbours(
    harbour_id SERIAL PRIMARY KEY,
    harbour_name VARCHAR(40),
    city_id VARCHAR(40)
);

CREATE TABLE images(
    image_id SERIAL PRIMARY KEY,
    image_name VARCHAR(40)
);