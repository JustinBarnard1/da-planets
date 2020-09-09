import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class GalaxysService {
    async find(query = {}) {
        return await dbContext.Galaxys.find(query)
    }
    async findById(id) {
        let galaxy = await dbContext.Galaxys.findById(id)
        if (!galaxy) {
            throw new BadRequest("invalid id")
        }
        return galaxy
    }
    async create(galaxy) {
        return await dbContext.Galaxys.create(galaxy)
    }
    async edit(update) {
        let updated = await dbContext.Galaxys.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }
    async delete(id) {
        let deleted = await dbContext.Galaxys.findOneAndDelete({ _id: id })
        if (!deleted) {
            throw new BadRequest("invalid id")
        }
    }

}

export const galaxysService = new GalaxysService();