const { User } = require('../entities/user');
const { Address } = require('../entities/address');

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

class UserService {
	getAll() {
		return users;
	}

	getUserById(id) {
		return users.find(user => user.id === id);
	}

	updateUser(id, novasInformacoes) {

	}
}

module.exports = {
	UserService,
};
