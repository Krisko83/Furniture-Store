import { CreateUserSchema } from "../schemas/userSchema";
import { authServices } from "../services";
import { generateToken } from "../utils/tokenUtils";


export async function register(req, res) {
    const userData = await CreateUserSchema.parseAsync(req.body);
    const user = await authServices.register(userData);
    const authToken = generateToken(user);

    console.log(authToken);

    res.json({
        _id: user.id,
        email: user.email,
        accessToken: authToken
    });
};

export async function login(req, res) {
    const userData = req.body;
    const user = await authServices.login(userData);
    const authToken = generateToken(user); 

    res.json({
        _id: user.id,
        email: user.email,
        accessToken: authToken
    });
}

export function logout(req, res) {
    res.json('Successful logout!')
}

