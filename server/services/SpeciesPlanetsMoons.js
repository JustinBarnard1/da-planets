import { dbContext } from "../db/DbContext";

class SpeciesPlanetsMoonsService {
    async findSpecies(oneSpecies) {
        return await dbContext.Inhabitted.find({ oneSpecies }).populate("planet moon")
    }
    async findPlanets(planet) {
        return await dbContext.Inhabitted.find({ planet }).populate("species moon")
    }
    async findStudents(moon) {
        return await dbContext.Inhabitted.find({ moon }).populate("species planet")
    }
    async create(inhabitted) {
        return await dbContext.Inhabitted.create(inhabitted);
    }

}

export const speciesPlanetsMoonsService = new SpeciesPlanetsMoonsService();