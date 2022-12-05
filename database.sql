CREATE DATABASE BOATSFORRENT;

CREATE TABLE boats(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    location VARCHAR(40)
);

INSERT INTO boats (name, location) VALUES
('lancha', 'Italia'),
('velero', 'Croacia');