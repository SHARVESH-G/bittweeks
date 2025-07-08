import { User } from '../models/Users.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ users });
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong while fetching users. ${err}` });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: `Error retrieving user. ${err}` });
    }
};

const toogleFollownUnfollow = async (req, res) => {
    try {
        const currentUser = req.body.currentUser;
        const { followedUserId } = req.params;

        const user = await User.findById(followedUserId);
        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }

        const followed = user.allFollowers.some(id => id.toString() === currentUser);
        if (followed) {
            user.allFollowers = user.allFollowers.filter(id => id.toString() !== currentUser);
        } else {
            user.allFollowers.push(currentUser);
        }

        await user.save();

        return res.status(200).json({
            followed: !followed,
            followers: user.allFollowers.length,
            allFollowers: user.allFollowers
        });
    } catch (err) {
        return res.status(500).json({ message: "Something Went Wrong" });
    }
};

export { getAllUsers, getUserById, toogleFollownUnfollow };
