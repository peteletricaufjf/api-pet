const express = require('express');
const { UserService } = require('./services/user');

const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userService = new UserService();

app.get('/user', (req, res) => {
	const users = userService.getAll();
	return res.json(users);
});
app.get('/user/:id', (req, res) => {
	const id = req.params.id;
	const user = userService.getUserById(id);

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

app.listen(port, () => console.log(`Example app listening at http://localhost:${ port }`));
