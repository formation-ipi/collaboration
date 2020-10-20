const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.engine('html', require('ejs').renderFile);

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
        prenom: 'Achraf',
        nom: 'Melki',
        age: '21 ans'
    }
]
=======
const me = [
    {
        title: 'Presentation',
        age: 25,
        name: "Eymeric SERTGOZ",
    }
];


const infoPerso = [
    {
        prenom: 'Ruben',
        nom: 'Veloso Paulos',
        age: '20 ans'
    }
]
const antoinebouard = [
    {
        title: 'Prénom',
        info: 'Antoine'
    },
    {
        title: 'Nom',
        info: 'Bouard'
    }
];



app.use(bodyParser.json());

// Log des requêtes
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.url);
    next();
});

app.get('/', (req, res) => {
        res.render("index.html")
    })


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
    })

app.get('/cyril-portascarta', (req,res) => {
    res.send('21ans et bogoss');
  
app.get('/jordan-martin', (req, res) => {
   res.send('26ans');

    app.get('/mohamedboudissa', (req, res) => {
    res.send('22ans');
    });

app.get('/jose-ravelomanantsoa', (req, res) => { res.send('21 ans')};



app.get('/ruben-velosopaulos', (req, res) => {
    res.send('Ruben Veloso Paulos 20 ans');

app.get('/follet-theodore', (req, res) => {
   res.send('20 ans');
});
app.route('/antoine-bouard')
    // Récupération de la variable antoine
    .get((req, res) => {
        res.json(antoinebouard);
    })
    // Création d'un todo
    .post((req, res) => {
        antoinebouard.push(req.body);
        // HTTP 201 => Created
        res.sendStatus(201);
    });

app.get('/colinbeaumont', (reg,res) => {
    res.send('22ans');
    });

app.route('/me')
    // Récupération des todos
    .get((req, res) => {
        res.json(me);

    });

app.get('/achraf-melki',(req, res) => {res.send('Achraf Melki 21 ans');
});

  

app.get('/hugo-mercier', (reg,res) => {
    res.send('21ans');
});
  
app.get('/maxime-decorde', (req, res) => {
res.send('21ans et 1 mètre 21 centimetres');
});

app.get('/GiraultMaxence' , (req,res) => {
    res.send('20');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);


});