import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class PlanetsService {
    async find(query = {}) {
        return await dbContext.Planets.find(query).populate("star species")
    }
    async findById(id) {
        let planet = await dbContext.Planets.findById(id).populate("star species", "name description")
        if (!planet) {
            throw new BadRequest("invalid id")
        }
        return planet
    }
    async create(planet) {
        return await dbContext.Planets.create(planet)
    }
    async edit(update) {
        let updated = await dbContext.Planets.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }
    async delete(id) {
        let deleted = await dbContext.Planets.findOneAndDelete({ _id: id })
        if (!deleted) {
            throw new BadRequest("invalid id")
        }
    }

}

export const planetsService = new PlanetsService();