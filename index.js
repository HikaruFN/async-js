const { log } = require('console');
const fs = require('fs');
const superagent = require('superagent');

// Callback Hell Soultion
/*fs.readFile('dogs.txt', 'utf8', (err, data) => {
    console.log('Breeds: ', data);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, response) => {
        if(err) return console.log(err.message);
        console.log(response.body.message);

        fs.writeFile('dog-image.txt', response.body.message, (err) => {
            console.log('Random dog image saved to file');

        })
    })
})*/

// Promises with Get Solution
/*fs.readFile('dogs.txt', 'utf8', (err, data)=>{
    console.log('Breeds: ', data);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`) //Il metodo get presuppone uno promise sui dati richiesti
        .then(res=>{
            console.log(res.body.message);
        }) //il metodo then si attiva all'arrivo dei dati
})*/





