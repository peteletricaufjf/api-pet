const express = require('express');
const { getUserById } = require('./services/user');

const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
	const id = req.params.id;
	const user = getUserById(id);

	if (user == null) {
		return res.sendStatus(404)
	} else {
		return res.json(user);
	}

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${ port }`));
