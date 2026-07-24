import { CreateUserSchema } from "../schemas/userSchema";
import { authServices } from "../services";
import { getErrorMessage } from "../utils/errorsUtils";
import { addInvalidToken, generateToken } from "../utils/tokenUtils";


export async function register(req, res) {
    try {
        const userData = await CreateUserSchema.parseAsync(req.body);
        const user = await authServices.register(userData);
        const authToken = generateToken(user);
 
        res.json({
            _id: user.id,
            email: user.email,
            accessToken: authToken
        });
    } catch (err) {
        const error = getErrorMessage(err);
        res.status(400).json({ message: error })
    }
};

export async function login(req, res) {
    const userData = req.body;

    try {
        const user = await authServices.login(userData);
        const authToken = generateToken(user);

        res.json({
            _id: user.id,
            email: user.email,
            accessToken: authToken
        });
    } catch (err) {
        const error = getErrorMessage(err);
  
        res.status(400).json({ message: error })
    }

}

export function logout(req, res) {
    const token = req.headers['x-authorization'];

    if(!token) {
        res.status(400).json( { message: 'No toekn provided!'} )
    }

    addInvalidToken(token);
 
    res.json('Successful logout!')
}

