import mongoose from "mongoose"

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // رابط الصورة
  },
  { timestamps: true }
)

export default mongoose.model("Place", placeSchema)
