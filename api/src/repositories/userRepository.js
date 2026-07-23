import { prisma} from '../lib/prisma'

export async function register(userData) {
    const user = await prisma.user.create({
        data: userData
    });

    return user;
}

export async function getUserByEmail(email){
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    return user;
}