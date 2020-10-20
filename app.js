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

app.get('/jose-ravelomanantsoa', (req, res) => { res.send('21 ans');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});