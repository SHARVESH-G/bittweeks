import { User } from "../models/Users.js";

export const onboardUser = async (req, res) => {
  const { email, department, regNo, startYear, endYear, isHosteller, profilePic, name } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        department,
        regNo,
        startYear,
        endYear,
        isHosteller,
        profilePic,
      });
    } else {
      user.department = department;
      user.regNo = regNo;
      user.startYear = startYear;
      user.endYear = endYear;
      user.isHosteller = isHosteller;
      user.profilePic = profilePic || user.profilePic;
    }

    await user.save();

    return res.status(201).json({ message: "User onboarded successfully", user });
  } catch (error) {
    console.error("Onboarding error:", error);
    return res.status(500).json({ message: "Failed to onboard user" });
  }
};