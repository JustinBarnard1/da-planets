import { starsService } from "../services/StarsService";
import { galaxysService } from "../services/GalaxysService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController {
    constructor() {
        super("api/stars")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/galaxys", this.getGalaxysBySubId)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await starsService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            let data = await starsService.findById(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getGalaxysBySubId(req, res, next) {
        try {
            let data = await galaxysService.find({ subject: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await starsService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await starsService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await starsService.delete(req.params.id)
            res.send("delorted")
        } catch (error) {
            next(error)
        }
    }




}