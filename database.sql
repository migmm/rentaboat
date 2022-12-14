-- SQL COMMAND FOR DATABASE CREATION 

CREATE DATABASE BOATSFORRENT;

/* CREATE TABLE countries(
    coutry_id SERIAL PRIMARY KEY,
    country_name STRING
);

CREATE TABLE cities(
    city_id SERIAL PRIMARY KEY,
    country_id INTEGER,
    city_name STRING
); */

CREATE TABLE harbour(
    harbour_id SERIAL PRIMARY KEY,
    harbour_name STRING,
    city_id INTEGER
);

/* CREATE TABLE images(
    image_id SERIAL PRIMARY KEY,
    product_id INTEGER,
    image_url STRING
); */

CREATE TABLE avatar(
    avatar_id SERIAL PRIMARY KEY,
    avatar_url STRING
    owner_avatar INTEGER,
    customer_avatar INTEGER
);

CREATE TABLE boat_owner(
    owner_id SERIAL PRIMARY KEY,
    owner_name STRING,
    owner_mail STRING,
    owner_phone STRING
    
);

CREATE TABLE boats(
    boat_id SERIAL PRIMARY KEY,
    boat_type STRING,
    brand STRING,
    model STRING,
    year STRING,
    city_id INTEGER, 
    harbour_id INTEGER,
    capacity STRING,
    description STRING,
    images_id INTEGER,
    length FLOAT,
    price FLOAT
);

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    customer_phone STRING,
    customer_name STRING,
);

CREATE TABLE rental(
    rental_id SERIAL PRIMARY KEY,
    boat_id STRING,
    available_date_from DATE,
    available_date_to DATE,
    location INTEGER,
    customer_id STRING,
    available_captain BOOLEAN
);

CREATE TABLE cart(
    customer_id STRING,
    boat_id INTEGER,
    date_from DATE,
    date_to DATE,
    total_price FLOAT
);

-- SQL COMMAND TO ADD PRODUCTS TO DATABASE

INSERT INTO boats (boat_type, brand, model, year, city_id, harbour_id, capacity, description, length, price) VALUES
('Yacht', 'Bavaria', 'Cruiser 40', '2012', 'Göcek', 'Ece Saray Marina & Resor', 6, '', 12.35, 290)
('Yacht', 'Dufour', '47 Harmony', '2006', 'Barcelona', 'Port Olímpic', 10, '', 13.95, 300);


/*

In case od use sequelize-cli these are the commands to create tables

npx sequelize-cli model:generate --name countries --attributes country_name:string
npx sequelize-cli model:generate --name cities --attributes city_name:string,country_id:integer
npx sequelize-cli model:generate --name harbour --attributes harbour_name:string,city_id:integer
npx sequelize-cli model:generate --name images --attributes image_name:string  
npx sequelize-cli model:generate --name avatar --attributes avatar_image:string
npx sequelize-cli model:generate --name boat_owner --attributes owner_name:string,owner_mail:string,owner_phone:string,owner_avatar:integer
npx sequelize-cli model:generate --name boats --attributes boat_type:string,brand:string,model:string,year:integer,city_id:integer,harbour_id:integer,capacity:integer,description:string,length:float,price:float
npx sequelize-cli model:generate --name customer --attributes customer_name:string,customer_mail:string,customer_phone:string,customer_avatar:integer
npx sequelize-cli model:generate --name rental --attributes boat_id:integer,available_date_from:date,available_date_to:date,location:integer,available_captain:boolean
npx sequelize-cli model:generate --name cart --attributes customer_id:integer,boat_id:integer,total_price:float

Command to migrate database after tables created

npx sequelize-cli db:migrate 

*/