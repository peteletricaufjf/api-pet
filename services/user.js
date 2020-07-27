const { User } = require('../entities/user');
const { Address } = require('../entities/address');
const { UserDao } = require('../dao/user');

// TODO: Remover
const users = [
	new User({
		id: '1',
		name: 'Gustavo Moraes Lopes',
		birthday: '1994-04-20',
		cpf: '111.111.111-11',
		password: 'mysupersecretpassword',
		email: 'meuemail@gmail.com',
		course: 'engenharia',
		rg: 'mg-111.111.11',
		phone: '(11)91234-5678',
		address: new Address({
			city: 'Juiz de Fora',
			street: 'Rio Branco',
			number: 10,
			neighbourhood: 'Centro',
		}),
	}),
	new User({
		id: '2',
		name: 'Gustavo Moraes Lopes',
		birthday: '1994-04-20',
		cpf: '111.111.111-11',
		password: 'mysupersecretpassword',
		email: 'meuemail@gmail.com',
		course: 'engenharia',
		rg: 'mg-111.111.11',
		phone: '(11)91234-5678',
		address: new Address({
			city: 'Juiz de Fora',
			street: 'Rio Branco',
			number: 10,
			neighbourhood: 'Centro',
		}),
	}),
	new User({
		id: '8',
		name: 'Gustavo Moraes Lopes',
		birthday: '1994-04-20',
		cpf: '111.111.111-11',
		password: 'mysupersecretpassword',
		email: 'meuemail@gmail.com',
		course: 'engenharia',
		rg: 'mg-111.111.11',
		phone: '(11)91234-5678',
		address: new Address({
			city: 'Juiz de Fora',
			street: 'Rio Branco',
			number: 10,
			neighbourhood: 'Centro',
		}),
	}),
];

// TODO: Remover
let currentId = 9;

const userDao = new UserDao();

class UserService {
	async getAll() {
		return await userDao.getAll();
	}

	async getUserById(id) {
		return await userDao.getById(id);
	}

	// TODO: Atualizar
	updateUser(id, novasInformacoes) {
		const user = this.getUserById(id);

		Object.keys(user).forEach(key => {
			const value = novasInformacoes[key];
			if (value != null) {
				user[key] = value;
			}
		});

		return user;
	}

	// TODO: Atualizar
	deleteUser(id) {
		// users = users.filter(user => user.id !== id);

		const index = users.findIndex(user => user.id === id);
		const deletedUser = users[index];
		delete users[index];

		return deletedUser;
	}

	// TODO: Atualizar
	createUser(user) {
		user.id = `${ currentId++ }`;
		users.push(user);
		return user;
	}

	// TODO: Criar
	getAddressById(id) {
		const user = this.getUserById(id);
		return user.address;
	}

	// TODO: Criar
	updateAddress(id, novoEndereco) {
		const user = this.getUserById(id);
		if (user == null) {
			return null;
		}
		user.address = new Address(novoEndereco);
		return user.address;
	}

}

module.exports = { UserService };
