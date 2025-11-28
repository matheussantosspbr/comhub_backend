import "dotenv/config";
import express from "express";
import cors from "cors";
import { makeShortenController } from "./src/factory/shorten-controller-factory.js";

const app = express();
app.use(express.json());
app.use(cors());

const shortenController = makeShortenController();

app.post("/links", async (req, res) => {
    const response = await shortenController.create(req.body.longUrl);
    res.status(response.status).json(response);
});

app.get("/:slug", async (req, res) => {
    const response = await shortenController.redirect(req.params.slug);
    res.status(response.status).json(response);
});

app.get("/links", async (req, res) => {
    const response = await shortenController.getAll();
    res.status(response.status).json(response);
});

app.delete("/links/:slug", async (req, res) => {
    const response = await shortenController.delete(req.params.slug);
    res.status(response.status).json(response);
});

app.listen(process.env.SERVER_PORT || 8080, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT || 8080}`);
});