import bodyParser from "body-parser";
import productRouter from "./productRouter.js";

export function routes(app){
    app.use(
        bodyParser.json(),
        productRouter,
    );

    app.get("/", (req, res) => {
        res.status(200).send('Server working!');
    });
}