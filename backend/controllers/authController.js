// backend/controllers/authController.js
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// تسجيل مستخدم جديد
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // التحقق من وجود المستخدم بالفعل
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" })
    }

    // تشفير الباسورد
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // إنشاء المستخدم
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    await newUser.save()

    res.status(201).json({ message: "User registered successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// تسجيل الدخول
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // البحث عن المستخدم
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // التحقق من كلمة المرور
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" })
    }

    // إنشاء JWT Token
    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
