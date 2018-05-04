import express from 'express';
import Client from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', {});
});

app.use('/public', express.static('public'));

// eslint-disable-next-line
app.listen(3000, () => console.log('Running on port 3000'));
