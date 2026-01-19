import mongoose from "mongoose"

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // رابط الصورة أو اسم الملف
  },
  { timestamps: true }
)

const Place = mongoose.model("Place", placeSchema)
export default Place
