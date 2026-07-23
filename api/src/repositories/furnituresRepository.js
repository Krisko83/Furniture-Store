import { prisma } from "../lib/prisma";

export async function getAll() {
    const data = await prisma.furniture.findMany({
        select: {
            id: true,
            description: true,
            img: true,
            price: true,
            ownerId: true
        }
    }); 

    return  data.map(f => ( { ...f, _id: f.id , _ownerId: f.ownerId} ));
};

export async function create(furnitureData) { 
    const furniture = await prisma.furniture.create({
        data: furnitureData
    });   
    
    return furniture;
}

export async function getById(furnitureId){
    const furniture = await prisma.furniture.findUnique({
        where: { id: furnitureId}
    })

    return furniture;
}