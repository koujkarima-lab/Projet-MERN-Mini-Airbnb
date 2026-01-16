import React, { useState } from "react"
import Hero from "../components/Hero"
import PlaceCard from "../components/PlaceCard"

export default function Home() {
  const places = [
    { id: 1, name: "Cozy Apartment", location: "Paris", price: 120 },
    { id: 2, name: "Modern Loft", location: "Berlin", price: 150 },
    { id: 3, name: "Beach House", location: "Barcelona", price: 200 },
    { id: 4, name: "Mountain Cabin", location: "Switzerland", price: 180 },
  ]

  const [search, setSearch] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase())
    const matchesPrice = maxPrice === "" || place.price <= Number(maxPrice)
    return matchesSearch && matchesPrice
  })

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="home-container">
        <h2>Explore places</h2>
        <p>Find the perfect stay for your next trip</p>

        {/* Search & Filter */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        {/* Places */}
        <div className="places-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))
          ) : (
            <p>No places found.</p>
          )}
        </div>
      </div>
    </>
  )
}
