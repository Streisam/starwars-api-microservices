// const planets = require('./planets.json');
const { default:axios } = require('axios');
// const connURL = "http://localhost:8004/Planet";
const connURL = "http://database:8004/Planet";

module.exports = {
    list: async () => {
        const { data } = await axios.get(connURL);
        return data;
    },

    getById: async (planetId) => {
        const { data } = await axios.get(`${connURL}/${planetId}`);
        return data;
    }
    ,

    create: async (planet) => {
        const { data } = await axios.post(connURL, planet)
        return data;
    },

    delete: async (planetId) => {
        const { data } = await axios.delete(`${connURL}/${planetId}`);
        return data;
    },

    edit: async (planetId, newCharacter) => {
        const { data } = await axios.put(`${connURL}/${planetId}`, newCharacter);
        return data;
    }
};