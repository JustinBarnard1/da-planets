import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Species = new Schema(
    {
        name: { type: String, required: true },
        planet: { type: ObjectId, ref: "Planet" },
        moon: { type: ObjectId, ref: "Moon" },
        description: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;