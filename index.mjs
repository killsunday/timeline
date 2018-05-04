import express from 'express';
import Db from 'mongodb';
import Server from 'mongodb';
import Connection from 'mongodb';

const host = 'localhost';
const port = Connection.DEFAULT_PORT;
const db = new Db('timelines', new Server(host, port, {}), { native_parser: false });

const app = express();
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', {});
});

app.use('/public', express.static('public'));

// eslint-disable-next-line
app.listen(3000, () => console.log('Running on port 3000'));
