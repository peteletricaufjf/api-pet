const express = require('express');
const bodyParser = require('body-parser');
const { UserService } = require('./services/user');
const { User } = require('./entities/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userService = new UserService();

app.get('/user', async (req, res) => {
	const users = await userService.getAll();
	return res.json(users);
});
app.get('/user/:id', async (req, res) => {
	const id = req.params.id;
	const user = await userService.getUserById(id);

	if (user == null) {
		return res.sendStatus(404);
	} else {
		return res.json(user);
	}
});
app.patch('/user/:id', (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const user = userService.updateUser(id, body);

	return res.json(user);
});
app.delete('/user/:id', (req, res) => {
	const id = req.params.id;
	userService.deleteUser(id);
	return res.status(200);
});
app.post('/user', (req, res) => {
	const body = req.body;
	const user = new User(body);
	const createdUser = userService.createUser(user);
	return res.json(createdUser);
});

app.get('/user/:id/address', (req, res) => {
	const id = req.params.id;
	const user = userService.getUserById(id);
	if (user == null) {
		return res.status(404);
	}
	const address = user.address;
	return res.json(address);
});
app.put('/user/:id/address', (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const address = userService.updateAddress(id, body);
	return res.json(address);
});
app.delete('/user/:id/address', (req, res) => {});

app.listen(port, () => console.log(`app listening at port ${ port }`));
