import { Router } from "express";
// import authController from "./controllers/authController";
import { register } from "node:module";

const routes = Router();

routes.use('/users/register', register)

export default routes;