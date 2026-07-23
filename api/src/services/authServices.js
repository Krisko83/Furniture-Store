import { userRepository } from "../repositories"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
 

export function register(userData){
    return userRepository.register(userData)
}

export async function login(userData){
    const user = await userRepository.getUserByEmail(userData.email)

    if(!user) {
        throw new Error('Invalid user or password')
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);

    if(!isPasswordValid) {
        throw new Error('Invalid user or password')
    } 

    return user;
}

 