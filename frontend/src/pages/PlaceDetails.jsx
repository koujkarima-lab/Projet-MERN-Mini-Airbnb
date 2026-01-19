import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/PlaceDetails.css"

export default function PlaceDetails() {
  const { id } = useParams()
  const [place, setPlace] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/places/${id}`)
        const data = await res.json()
        setPlace(data)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }
    fetchPlace()
  }, [id])

  if (loading) return <p>Loading place details...</p>
  if (!place) return <p>Place not found</p>

  return (
    <div className="place-details-container">
      <h2>{place.name}</h2>
      <img src={place.image} alt={place.name} className="place-details-image" />
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Price:</strong> ${place.price} / night</p>
      {place.description && <p><strong>Description:</strong> {place.description}</p>}
    </div>
  )
}
