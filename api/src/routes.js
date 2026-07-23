import { Router } from "express"; 
import { authController, furnituresControllers } from "./controllers";
import { isAuth } from "./middlewares/authMiddleware";

const routes = Router();

routes.post('/users/register', authController.register);
routes.post('/users/login', authController.login);
routes.get('/users/logout', isAuth, authController.logout);
routes.get('/data/catalog', furnituresControllers.getAll);
routes.post('/data/catalog', isAuth, furnituresControllers.create);
routes.get('/data/catalog/:furnitureId', furnituresControllers.getById)

export default routes;