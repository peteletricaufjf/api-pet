function getUserById(id) {
	if (id === '1') {
		return {
			id: '1',
			name: 'Gustavo Moraes Lopes',
			birthday: '1994-04-20',
			cpf: '111.111.111-11',
			password: 'mysupersecretpassword',
			email: 'meuemail@gmail.com',
			course: 'engenharia',
			rg: 'mg-111.111.11',
			phone: '(11)91234-5678',
			address: {
				city: 'Juiz de Fora',
				street: 'Rio Branco',
				number: 10,
				neighbourhood: 'Centro',
			}
		};
	} else {
		return null;
	}
}

module.exports = {
	getUserById
};
