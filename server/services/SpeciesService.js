import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class SpeciesService {
    async find(query = {}) {
        return await dbContext.Species.find(query).populate("planet moon")
            .populate("planet")
            .populate("moon")
    }
    async findById(id) {
        let oneSpecies = await (await dbContext.Species.findById(id)).populate("planet moon")
            .populate("moon")
            .populate("planet")
        if (!oneSpecies) {
            throw new BadRequest("invalid id")
        }
        return oneSpecies
    }
    async create(oneSpecies) {
        return await dbContext.Species.create(oneSpecies)
    }
    async edit(update) {
        let updated = await dbContext.Species.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }
    async delete(id) {
        let deleted = await dbContext.Species.findOneAndDelete({ _id: id })
        if (!deleted) {
            throw new BadRequest("invalid id")
        }
    }

}

export const speciesService = new SpeciesService();