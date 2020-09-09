import { planetsService } from "../services/PlanetsService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/stars", this.getStarsBySubId)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await planetsService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            let data = await planetsService.findById(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getStarsBySubId(req, res, next) {
        try {
            let data = await starsService.find({ subject: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await planetsService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await planetsService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await planetsService.delete(req.params.id)
            res.send("delorted")
        } catch (error) {
            next(error)
        }
    }




}