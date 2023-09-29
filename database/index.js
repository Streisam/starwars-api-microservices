const server = require('./src/server');

const { Character, Planet, Film } = require('./src/database');

// Planet.find().then((res) => console.log(res));

// Character.list().then((res) => console.log(res));

// Character.get(1)
//     .then((res) => console.log(res) );

// Character.insert({
//     _id: "202",
//     name: "Jorge Vega",
//     birth_year: "1991",
//     gender: 123456,
// }).then((res) => console.log(res));

// Planet.list()
// .then((res) => console.log(res));

const PORT = 8004;

server.listen(PORT, ()=> {
    console.log(`Database service listening on port ${PORT}`);
});