-- Cars table
CREATE TABLE cars(
	id SERIAL PRIMARY KEY,
	car_make VARCHAR (50) NOT NULL,
	car_model VARCHAR (50) NOT NULL,
    color VARCHAR (50) NOT NULL
);

-- Seeding Cars table
INSERT INTO cars 
    (car_make, car_model, color)
VALUES
    ('ford', 'explorer', 'blue'),
    ('ford', 'expedition', 'blue'),
    ('ford', 'focus', 'green'),
    ('toyota', 'camry', 'green');


-- Search terms table
CREATE TABLE search_terms(
	id SERIAL PRIMARY KEY,
  	terms VARCHAR(250) []
);

-- Seeding Search Terms table
INSERT INTO search_terms
	(terms)
VALUES
	(ARRAY ['ford']),
    (ARRAY ['ford', 'ex']),
    (ARRAY ['green']);