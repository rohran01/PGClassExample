//this is postgresql

var pg = require('pg');

//creates URI for database

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/example_database';

//creates new client with the endpoint of our database and connects

var client = new pg.Client(connectionString);
client.connect();

//when database is fired up, creates table called 'items'

var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });