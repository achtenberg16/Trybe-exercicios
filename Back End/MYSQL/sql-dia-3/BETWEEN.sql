USE sakila;
SELECT * FROM film
 WHERE title LIKE '%ace%';

SELECT * FROM film 
where description LIKE '%china' 
ORDER BY title 
LIMIT 5;

SELECT * FROM film 
WHERE description LIKE '%girl%' 
and title LIKE '%LORD';

SELECT * FROM film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

SELECT * FROM film 
WHERE title LIKE 'mosquito%' 
OR title LIKE '%academy';

-- Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

-- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?
SELECT COUNT(*) FROM payment 
WHERE DATE(payment_date) 
BETWEEN '2005/07/01' AND '2005/08/22';


-- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .
SELECT * FROM payment 
WHERE DATE(payment_date) = '2005/07/28' 
AND HOUR(payment_date) >= 22;
