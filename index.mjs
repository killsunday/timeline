import express from 'express';

const app = express();
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', {});
});

app.use(express.static('public'));
app.listen(3000, () => console.log('Running on port 3000'));
