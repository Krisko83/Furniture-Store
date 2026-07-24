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

export function edit(editData, furnitureId){
    return furnituresRepository.edit(editData, furnitureId);
};

export function remove(furnitureId){
    return furnituresRepository.remove(furnitureId)
}