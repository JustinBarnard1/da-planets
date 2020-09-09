import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const SpeciesPlanetsMoons = new Schema(
    {
        species: { type: ObjectId, ref: "Species" },
        planets: { type: ObjectId, ref: "Planets" },
        moon: { type: ObjectId, ref: "Moon" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default SpeciesPlanetsMoons;