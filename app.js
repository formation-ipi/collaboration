const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const todos = [
    {
        title: 'Formation GIT',
        done: true
    },
    {
        title: 'TP GIT',
        done: false
    }
];
const infoPerso = [
    {
        prenom: 'Ruben',
        nom: 'Veloso Paulos',
        age: '20 ans'
    }
]

app.use(bodyParser.json());

// Log des requêtes
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.url);
    next();
});

app.route('/todos')
    // Récupération des todos
    .get((req, res) => {
        res.json(todos);
    })
    // Création d'un todo
    .post((req, res) => {
        todos.push(req.body);
        // HTTP 201 => Created
        res.sendStatus(201);
    });

// Url pour mes informations
app.get('/ruben-velosopaulos', (req, res) => {
    res.send('Ruben Veloso Paulos 20 ans');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});