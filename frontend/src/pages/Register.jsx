import { useState } from "react"
import "../styles/form.css"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({}) // لتخزين رسائل الأخطاء

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

    // التحقق من الاسم
    if (!name) {
      validationErrors.name = "Name is required"
    }

    // التحقق من الايميل
    if (!email) {
      validationErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid"
    }

    // التحقق من كلمة السر
    if (!password) {
      validationErrors.password = "Password is required"
    }

    setErrors(validationErrors)

    // إذا لا يوجد أخطاء → اطبع البيانات
    if (Object.keys(validationErrors).length === 0) {
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Password:", password)
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <br />

        <div>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <br />

        <div>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}
