import React from "react"

export default function Home() {
  // مثال بيانات أماكن افتراضية
  const places = [
    { id: 1, name: "Cozy Apartment", location: "Paris", price: 120 },
    { id: 2, name: "Modern Loft", location: "Berlin", price: 150 },
    { id: 3, name: "Beach House", location: "Barcelona", price: 200 },
  ]

  return (
    <div style={{ padding: "40px" }}>
      <h2>Welcome to Mini Airbnb</h2>
      <p>Discover amazing places to stay!</p>

      <div>
        {places.map((place) => (
          <div key={place.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
            <h3>{place.name}</h3>
            <p>Location: {place.location}</p>
            <p>Price per night: ${place.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

