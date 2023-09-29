const { Schema } = require("mongoose")

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String, // [MALE, FEMALE, UNKNOWN, N/A]
    homeworld: [{ type: String, ref: "Planet" }],
    films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.list = async function () {
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "name"])
}

characterSchema.statics.get = async function (id) {
    return await this.findById( id )
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "name"])
}

characterSchema.statics.insert = async function (character) {
    return await this.create(character)
}

characterSchema.statics.delete = async function (characterId) {
    return await this.findByIdAndDelete(characterId);
}

characterSchema.statics.update = async function (characterId, newCharacter) {
    return await this.findByIdAndUpdate(characterId, newCharacter, { new: true })
}



module.exports = characterSchema;