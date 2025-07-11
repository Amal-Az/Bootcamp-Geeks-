CREATE DATABASE shop_db;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INT
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

INSERT INTO items (name, price) VALUES
('Petit bureau', 100),
('Grand bureau', 300),
('Ventilateur', 80);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Vert'),
('Melanie', 'Johnson');


SELECT * FROM items;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price <= 300;

SELECT * FROM customers WHERE last_name = 'Smith';

SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name != 'Scott';