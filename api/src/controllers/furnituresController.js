import { CreateFurnitureSchema } from "../schemas/furnituresSchemas";
import { furnituresService } from "../services";
import { getErrorMessage } from "../utils/errorsUtils";

export async function getAll(req, res) {
    const data = await furnituresService.getAll();
        console.log(data);
    
    res.json(data);
};

export async function create(req, res) {
    const data = req.body;
    const ownerId = req.user.userId;

    try {
        const newFurniture = CreateFurnitureSchema.parse(data);
        newFurniture.ownerId = ownerId;

        const result = await furnituresService.create(newFurniture);
  

        res.status(201).json({ message: 'Furniture created', furniture: result });

    } catch (err) {
        const error = getErrorMessage(err);

        res.json({ message: error.message })
    }
}

export async function getById(req, res) {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnituresService.getById(furnitureId);

    res.json(furniture)

} 