import express from "express";
import { routes } from "./router/routes.js";

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
   console.log(`Server running in ${port}!`); 
})