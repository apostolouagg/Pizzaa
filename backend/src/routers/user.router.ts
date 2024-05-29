import {Router} from 'express';
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router  = Router();

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
    const token = jwt.sign({id: user.id, email: user.email, isAdmin:user.isAdmin}, process.env.JWT_SECRET!, {expiresIn:"30d"});

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    };
}

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
            name: name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address: address,
            isAdmin: false
        }

        const dbUser = await UserModel.create(newUser);

        res.send(generateTokenResponse(dbUser));
    }
));

export default router;