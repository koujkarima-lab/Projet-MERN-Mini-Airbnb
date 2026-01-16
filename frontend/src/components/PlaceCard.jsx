import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"
import "../styles/PlaceCard.css"

export default function PlaceCard({ place }) {
  return (
    <div className="place-card">
      <img
        src="https://images.unsplash.com/featured/?apartment,house"
        alt={place.name}
        className="place-image"
      />

      <div className="place-content">
        <h3>{place.name}</h3>

        <p className="location">
          <FaMapMarkerAlt /> {place.location}
        </p>

        <p className="price">
          <FaDollarSign /> {place.price} / night
        </p>

        <button className="book-btn">View details</button>
      </div>
    </div>
  )
}
