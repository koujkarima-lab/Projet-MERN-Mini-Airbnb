import { useParams } from "react-router-dom"
import "../styles/PlaceDetails.css"
import places from "../data/places" // ✅ استيراد نفس البيانات

export default function PlaceDetails() {
  const { id } = useParams()
  const place = places.find((p) => p.id === Number(id))

  if (!place) return <p>Place not found</p>

  return (
    <div className="details-container">
      <img src={place.image} alt={place.name} />

      <div className="details-content">
        <h2>{place.name}</h2>
        <p className="location">{place.location}</p>
        <p className="price">${place.price} / night</p>
        <p className="description">{place.description}</p>

        <button className="book-btn">Book now</button>
      </div>
    </div>
  )
}
