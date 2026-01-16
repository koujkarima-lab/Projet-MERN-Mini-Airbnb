import { useState } from "react"
import "../styles/form.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({}) // لتخزين رسائل الأخطاء

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

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
      console.log("Email:", email)
      console.log("Password:", password)
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  )
}