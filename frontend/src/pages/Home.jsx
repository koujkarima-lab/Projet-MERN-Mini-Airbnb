import React, { useState } from "react"
import Hero from "../components/Hero"
import PlaceCard from "../components/PlaceCard"
import places from "../data/places" // ✅ استيراد البيانات المشتركة

export default function Home() {
  const [search, setSearch] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // فلترة الأماكن
  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase())
    const matchesPrice = maxPrice === "" || place.price <= Number(maxPrice)
    return matchesSearch && matchesPrice
  })

  return (
    <>
          <h1 className="text-6xl font-bold text-red-500 text-center mt-20">
        Tailwind OK
      </h1>

      <Hero />

      <div className="home-container">
        <h2>Explore places</h2>
        <p>Find the perfect stay for your next trip</p>

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

        <div className="places-grid">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => <PlaceCard key={place.id} place={place} />)
          ) : (
            <p>No places found.</p>
          )}
        </div>
      </div>
    </>
  )
}
