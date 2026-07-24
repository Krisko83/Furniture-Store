import { CreateFurnitureSchema } from "../schemas/furnituresSchemas";
import { furnituresService } from "../services";
import { getErrorMessage } from "../utils/errorsUtils";

export async function getAll(req, res) {
    const data = await furnituresService.getAll(); 
    
    res.json(data);
};

export async function create(req, res) {
    const data = req.body;
    const ownerId = req.user.userId;

    try {
        const newFurniture = CreateFurnitureSchema.parse(data);
        newFurniture.ownerId = ownerId;

        const furniture = await furnituresService.create(newFurniture);
 
        res.status(201).json({ message: 'Furniture created', furniture});

    } catch (err) {
        const error = getErrorMessage(err);
      
        res.status(400).json({ message: error})
    }
}

export async function getById(req, res) {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnituresService.getById(furnitureId);
 
    res.json(furniture)

} 

export async function edit(req,res ) {
    const editData = req.body;
    const furnitureId = req.params.furnitureId;

    const editedFurniture = await furnituresService.edit(editData, furnitureId);

    res.json(editedFurniture);
}

export async function remove(req, res){
    const furnitureId = req.params.furnitureId;

    const deletedFurniture = await furnituresService.remove(furnitureId);

    res.json(deletedFurniture);
}