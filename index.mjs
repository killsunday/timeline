import express from 'express';
import MongoClient from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/timelines', (err, db) => {
    if (err) {

        // eslint-disable-next-line
        return console.log(err);
    }
});
const app = express();
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', {});
});

app.use('/public', express.static('public'));

// eslint-disable-next-line
app.listen(3000, () => console.log('Running on port 3000'));
