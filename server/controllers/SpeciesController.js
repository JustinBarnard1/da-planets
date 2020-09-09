import { speciesService } from "../services/SpeciesService";
import { moonsService } from "../services/MoonsService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";
import { speciesPlanetsMoonsService } from "../services/SpeciesPlanetsMoons";


export class SpeciesController extends BaseController {
    constructor() {
        super("api/species")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/planets", this.getPlanetsBySubId)
            .get("/:id/moons", this.getMoonsBySubId)
            .post("", this.create)
            .post("/:speciesId/planets/:planetId", this.inhabitPlanet)
            .post("/:speciesId/moons/:moonId", this.inhabitMoon)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await speciesService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            let data = await speciesService.findById(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsBySubId(req, res, next) {
        try {
            let data = await planetsService.find({ subject: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getMoonsBySubId(req, res, next) {
        try {
            let data = await moonsService.find({ subject: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async inhabitPlanet(req, res, next) {
        try {
            let inhabitted = { species: req.params.speciesId, planet: req.params.planetId }
            let data = await speciesPlanetsMoonsService.create(inhabitted)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async inhabitMoon(req, res, next) {
        try {
            let inhabitted = { species: req.params.speciesId, moon: req.params.moontId }
            let data = await speciesPlanetsMoonsService.create(inhabitted)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }


    async create(req, res, next) {
        try {
            let data = await speciesService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await speciesService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await speciesService.delete(req.params.id)
            res.send("delorted")
        } catch (error) {
            next(error)
        }
    }




}