import express from "express";
import passport from "passport";
import { login, register } from "../controller/authColtroller.js";
import { User } from "../models/Users.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const user = req.user;
    if (!user.department) {
      return res.redirect(
        `http://localhost:5173/onboarding?email=${user.email}&name=${user.name}`
      );
    }
    res.redirect("http://localhost:5173/dashboard");
  }
);

router.post("/onboard", async (req, res) => {
  try {
    const { email, department, regNo, startYear, endYear, isHosteller, profilePic } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found." });

    user.department = department;
    user.regNo = regNo;
    user.startYear = startYear;
    user.endYear = endYear;
    user.isHosteller = isHosteller;
    user.profilePic = profilePic;
    await user.save();

    return res.status(200).json({ message: "Onboarding successful", user });
  } catch (err) {
    return res.status(500).json({ message: "Onboarding failed", error: err.message });
  }
});

router.get("/user", (req, res) => {

  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  } else {
    return res.status(401).json({ message: "Not logged in" });
  }
});

export default router;