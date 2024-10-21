const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/o-nas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'o-nas.html'));
});

app.get('/oferta', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'oferta.html'));
});

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'kontakt.html'));
});

app.post('/kontakt', (req, res) => {
    console.log(`Imię: ${req.body.imie}`);
    console.log(`Nazwisko: ${req.body.nazwisko}`);
    console.log(`Email: ${req.body.email}`);
    console.log(`Treść wiadomości: ${req.body.tresc}`);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
