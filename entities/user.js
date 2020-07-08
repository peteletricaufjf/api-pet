class User {
	constructor(obj) {
		this.id = obj.id;
		this.name = obj.name;
		this.birthday = obj.birthday;
		this.cpf = obj.cpf;
		this.password = obj.password;
		this.email = obj.email;
		this.course = obj.course;
		this.rg = obj.rg;
		this.phone = obj.phone;
		this.address = obj.address;
	}
}

module.exports = { User };
