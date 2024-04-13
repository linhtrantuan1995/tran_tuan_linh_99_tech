import * as express from "express"
import {
    connection
} from "./connection/connection"
import {
    resource
} from "./entities/resource"
import * as cors from "cors"
import {
    Like
} from "typeorm";
const app = express()
app.use(cors())
app.use(express.json())
const server = app.listen(3000, () => {
    console.log("server running at 3000....")
})
connection.then(
    async connection => {
        console.log("connected")
        const resourceRepository = connection.getRepository(resource);
        app.get("/api/resources", async (req, res) => {
            const {
                name,
                type,
                data
            } = req.query;
            const where = {};
            if (name) {
                Object.assign(where, {
                    name: Like(`%${name}%`),
                });
            }
            if (type) {
                Object.assign(where, {
                    type: Like(`%${type}%`),
                });
            }
            if (data) {
                Object.assign(where, {
                    data: Like(`%${data}%`),
                })
            }
            const resources = await resourceRepository.find({
                where: where,
            })
            res.send(resources)
        })

        app.post("/api/resources", async (req, res) => {

            console.log("body", req.body)
            const {
                name
            } = req.body;
            if (!name) {
                res.json({
                    message: "name is invalid",
                });
            }
            const results = await resourceRepository.save(req.body);

            res.json({
                message: "success",
                payload: results
            });
        })

        app.get("/api/resources/:id", async (req, res) => {
            const resource = await resourceRepository.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.json({
                message: "success",
                payload: resource
            })
        })

        app.delete("/api/resources/:id", async (req, res) => {
            const resource = await resourceRepository.findOne({
                where: {
                    id: req.params.id,
                }
            });
            if (!resource) {
                res.json({
                    message: "Resource is invalid",
                });
            }
            await resourceRepository.delete(req.params.id)
            res.json({
                message: "success",
            });
        })

        app.put("/api/resources/:id", async (req, res) => {
            const resource = await resourceRepository.findOne({
                where: {
                    id: req.params.id,
                }
            })
            if (!resource) {
                res.json({
                    message: "Resource is invalid",
                });
            }
            resourceRepository.merge(resource, req.body);
            const result = await resourceRepository.save(resource);
            res.json({
                message: "success",
                payload: result
            });

        })

    }
).catch(error => {
    console.log(error)
})