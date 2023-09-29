// const films = require('./films.json');
const { default:axios } = require('axios');
// const connURL = "http://localhost:8004/Film";
const connURL = "http://database:8004/Film";

module.exports = {
    list: async () => {
        const { data } = await axios.get(connURL);
        return data;
    },

    getById: async (filmId) => {
        const { data } = await axios.get(`${connURL}/${filmId}`);
        return data;
    }
    ,

    create: async (film) => {
        const { data } = await axios.post(connURL, film)
        return data;
    },

    delete: async (filmId) => {
        const { data } = await axios.delete(`${connURL}/${filmId}`);
        return data;
    },

    edit: async (filmId, newCharacter) => {
        const { data } = await axios.put(`${connURL}/${filmId}`, newCharacter);
        return data;
    }
};