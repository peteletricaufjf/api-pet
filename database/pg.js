const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	user: 'postgres',
	password: '123456',
	database: 'postgres',
	port: '5433',
	// connectionString: process.env.DATABASE_URL,
	// ssl: { rejectUnauthorized: false }
});

client.connect();

const query = 'select * from users';
client.query(query, (err, res) => {
	if (err) throw err;
	for (let row of res.rows) {
		console.log(JSON.stringify(row));
	}
	client.end();
});
