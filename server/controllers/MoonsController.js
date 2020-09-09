import { moonsService } from "../services/MoonsService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";


export class MoonsController extends BaseController {
    constructor() {
        super("api/moons")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/planets", this.getPlanetsBySubId)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await moonsService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            let data = await moonsService.findById(req.params.id)
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

    async create(req, res, next) {
        try {
            let data = await moonsService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await moonsService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await moonsService.delete(req.params.id)
            res.send("delorted")
        } catch (error) {
            next(error)
        }
    }




}