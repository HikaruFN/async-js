const fs = require('fs');
const superagent = require('superagent');

fs.readFile('dogs.txt', 'utf8', (err, data) => {
    console.log('Breeds: ', data);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, response) => {
        console.log(response.body.message);
    })
})






