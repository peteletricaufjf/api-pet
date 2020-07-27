const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	user: 'postgres',
	password: '123456',
	database: 'postgres',
	port: 5432,
	// connectionString: process.env.DATABASE_URL,
	// ssl: { rejectUnauthorized: false }
});

client.connect();

class UserDao {
	async getAll() {
		const query = 'select * from users';
		try {
			const res = await client.query(query);
			// TODO: Atualizar. Não queremos Object. Queremos User
			return res.rows;
		} catch (e) {
			return [];
		}
	}

	async getById(id) {
		const query = 'select * from users where id = $1';
		try {
			const res = await client.query(query, [id]);
			// TODO: Atualizar. Não queremos Object. Queremos User
			return res.rows[0];
		} catch (e) {
			return null;
		}
	}

	async update(id, modificacoes) {
		const query = `
			update users 
			set name = $2, email = $3
			where id = $1
		`;
		try {
			const params = [id, modificacoes.name, modificacoes.email];
			const res = await client.query(query, params);
			return res.rows[0];
		} catch (e) {
			return null;
		}
	}
}

module.exports = { UserDao };
