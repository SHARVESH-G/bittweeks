import { User } from "../models/Users.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({users});
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong while fetching users. ${err}` });
    }
};

export { getAllUsers };
