const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/user', (req, res) => res.json({
	name: 'Gustavo',
}));
app.post('/', (req, res) => res.send('olá post'));
app.get('*', (req, res) => res.send('nao achei'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${ port }`));
