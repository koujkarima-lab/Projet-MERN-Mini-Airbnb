import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../styles/PlaceCard.css"

export default function PlaceCard({ place }) {
  return (
    <div className="place-card">
      <img
        src={place.image}
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

        <Link to={`/places/${place._id}`}>
          <button className="book-btn">View details</button>
        </Link>
      </div>
    </div>
  )
}
