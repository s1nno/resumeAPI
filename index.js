const express = require('express')();
const app = express();
const PORT = 8080;

app.use(express.json() )
app.listen(
    PORT,
    () => console.log('runing on https://localhost:${PORT}')
)
app.get('/skills', (req, res)=>{
    res.status(200).send({
        languages: 'javascript, java, python, c',
        frameworks: 'react, express, node',
        technologies: 'mongoDB, excel, google cloud, ',
        misc: 'html, css, apis, postman'
    })
});

app.get('/school', (req, res)=>{
    res.status(200).send({
        school: 'university of central florida',
        gpa: '3.67',
        dsa: 'object oriented programming, computer science 1 & 2',
        math: 'discrete 1 & 2, calculous 1 & 2, matrix and linear algebra, stats 1 & 2',
        machineCode: 'computer logic, system software',
        electives: 'algarithms in machine learning, ',
        other: 'processes of object oriented software development'

    })
})
