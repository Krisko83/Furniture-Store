import { furnituresRepository } from "../repositories";

export function getAll(){
    return furnituresRepository.getAll();
};

export function create(data) { 
    return furnituresRepository.create(data);
}

export function getById(furnitureId){
    return furnituresRepository.getById(furnitureId)
}