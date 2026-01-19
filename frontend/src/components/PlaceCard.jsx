import { Link } from "react-router-dom"
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"
import "../styles/PlaceCard.css"

export default function PlaceCard({ place }) {
  return (
    <Link to={`/places/${place.id}`} className="place-link">
      <div className="place-card">
        <img src={place.image} alt={place.name} className="place-image" />
        <div className="place-content">
          <h3>{place.name}</h3>
          <p className="location">
            <FaMapMarkerAlt /> {place.location}
          </p>
          <p className="price">
            <FaDollarSign /> {place.price} / night
          </p>
        </div>
      </div>
    </Link>
  )
}
