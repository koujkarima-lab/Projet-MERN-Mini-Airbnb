// backend/controllers/authController.js
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// =========================
// REGISTER
// =========================
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // 1. validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" })
    }

    // 2. check existing user
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" })
    }

    // 3. hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // 4. create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    await newUser.save()

    // 5. response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// =========================
// LOGIN
// =========================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // 1. validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" })
    }

    // 2. find user
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // 3. compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }

    // 4. generate JWT
    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    // 5. response
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
