import Place from "../models/Place.js"

// GET جميع الأماكن
export const getPlaces = async (req, res) => {
  try {
    const places = await Place.find()
    res.status(200).json(places)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET مكان محدد بالـ ID
export const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id)
    if (!place) return res.status(404).json({ message: "Place not found" })
    res.status(200).json(place)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// POST إنشاء مكان جديد
export const createPlace = async (req, res) => {
  try {
    const newPlace = new Place(req.body)
    await newPlace.save()
    res.status(201).json(newPlace)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// PUT تحديث مكان
export const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedPlace)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// DELETE حذف مكان
export const deletePlace = async (req, res) => {
  try {
    await Place.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Place deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
