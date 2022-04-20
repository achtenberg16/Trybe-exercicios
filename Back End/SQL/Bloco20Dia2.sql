SELECT * FROM sakila.city;
USE sakila;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;

SELECT * FROM all_tables;

SELECT concat(first_name, ' ', last_name) AS 'nome completo' FROM actor;

SELECT concat(title, ' ', release_year, ' ', rating) FROM film;

SELECT concat(title, ',', release_year, '') AS 'lançamento do filme' FROM film;

SELECT concat(address, ' ', district) AS Endereço FROM address;

SELECT * FROM film;

SELECT count(*) FROM film;

SELECT count(distinct first_name) FROM actor;

SELECT count(distinct last_name) FROM actor;

SELECT name FROM  language name where name != 'english' LIMIT 5