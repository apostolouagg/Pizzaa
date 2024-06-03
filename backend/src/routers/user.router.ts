import {Router} from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router  = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         name:
 *           type: string
 *         address:
 *           type: string
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
//login api
router.post("/login", asyncHandler(
    async (req, res) =>{
        const {email, password} = req.body;
        const user = await UserModel.findOne({ email });
    
        if(user && (await bcrypt.compare(password, user.password))){
            res.send(generateTokenResponse(user));
        }
        else{
            res.status(HTTP_BAD_REQUEST).send("User name or password is invalid!");
            return;
        }
    }
));

const generateTokenResponse = (user : User) => {

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    
    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET!, {expiresIn:"30d"});

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        token: token
    };
}


/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
//register api
router.post('/register', asyncHandler(
    async (req, res) => {
        const { name, email, password, address } = req.body;
        const user = await UserModel.findOne({ email });

        //uparxei hdh o user
        if(user){
            res.status(HTTP_BAD_REQUEST).send('User already exists. Please Log In!');
            return;
        }

        //hash ton kwdiko
        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser:User = {
            id: '',
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address,
        }

        const dbUser = await UserModel.create(newUser);

        res.send(generateTokenResponse(dbUser));
    }
));

export default router;