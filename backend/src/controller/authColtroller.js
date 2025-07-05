import bcrypt from 'bcryptjs'
import { User } from '../models/Users.js';
import jwt from 'jsonwebtoken'

const SALT = parseInt(process.env.SALT);

const register = async (req, res) => {
    try {
        const { name, department, email, password, profilePic } = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User Already Exists With This Email"})
        }

        const hashedPassword = await bcrypt.hash(password, SALT);
        const newUser = new User({ name, department, email, password: hashedPassword, profilePic });
        await newUser.save();
        return res.status(201).json({ message: "User Created Successfully" });
    } catch (err) {
        return res.status(500).json({ message: `Something Went Wrong While Creating User . ${err}` })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const fetchedUser = await User.findOne({ email });

        if (!fetchedUser) {
            return res.status(404).json({ message: "No User Found With This Email" });
        }

        const isMatch = await bcrypt.compare(password, fetchedUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" });
        }

        const token = jwt.sign(
            { id: fetchedUser._id, name: fetchedUser.name },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            token,
            user: {
                _id: fetchedUser._id,
                name: fetchedUser.name,
                email: fetchedUser.email,
                department: fetchedUser.department,
                profilePic:fetchedUser.profilePic,
                followers:fetchedUser.allFollowers.length,
                joined : fetchedUser.createdAt
            }
        });

    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Something went wrong while logging in." });
    }
};



export { register, login };