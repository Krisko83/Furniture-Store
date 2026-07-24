import { registry } from "zod";
import { prisma } from "../lib/prisma";

export async function getAll(filter = {}) {
    const data = await prisma.furniture.findMany({
        where: filter,
        select: {
            id: true,
            description: true,
            img: true,
            price: true,
            ownerId: true
        }
    });
 
    return data.map(f => ({ ...f, _id: f.id, _ownerId: f.ownerId }));
};

export async function create(furnitureData) {
    const furniture = await prisma.furniture.create({
        data: furnitureData
    });

    return furniture;
}

export async function getById(furnitureId) {
    const furniture = await prisma.furniture.findUnique({
        where: { id: furnitureId }
    });
 
    furniture._id = furniture.id;
    furniture._ownerId = furniture.ownerId;

    return furniture;
};

export async function edit(editData, furnitureId) {
    const furniture = await prisma.furniture.update({
        where: {
            id: furnitureId
        },
        data: editData
    });
    
    return furniture;
}

export async function remove(furnitureId){
    const deletedFurniture = await prisma.furniture.delete({
        where: {
            id: furnitureId
        }
    })
}