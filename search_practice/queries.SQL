-- Find all search terms:
SELECT terms 
FROM search_terms;

-- Find all cars:
SELECT * FROM cars;

-- WORKS
-- SELECT * 
-- FROM cars
-- WHERE cars.car_make = ANY (ARRAY['test', 'ford']);

SELECT * 
FROM cars
AS c
WHERE c.car_make = ANY()