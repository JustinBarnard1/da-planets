import { galaxysService } from "../services/GalaxysService";
import BaseController from "../utils/BaseController";


export class GalaxysController extends BaseController {
    constructor() {
        super("api/galaxys")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await galaxysService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            let data = await galaxysService.findById(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await galaxysService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await galaxysService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await galaxysService.delete(req.params.id)
            res.send("delorted")
        } catch (error) {
            next(error)
        }
    }




}