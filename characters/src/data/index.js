// const characters = require('./characters.json');
const { default:axios } = require('axios');
// const connURL = "http://localhost:8004/Character";
const connURL = "http://database:8004/Character";

module.exports = {
    list: async () => {
        const characters = await axios.get(connURL);
        return characters.data;
    },
    
    getById: async (characterId) => {
        const character = await axios.get(`${connURL}/${characterId}`);
        return character.data;
    }
    ,

    create: async (character) => {
        const { data } = await axios.post(connURL, character)
        console.log(data);
        return data;
    },

    delete: async (characterId) => {
        const { data } = await axios.delete(`${connURL}/${characterId}`);
        return data;
    },

    edit: async (characterId, newCharacter) => {
        const { data } = await axios.put(`${connURL}/${characterId}`, newCharacter);
        return data;
    }
};