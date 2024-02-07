import React from 'react'

interface FavoritesProps {
  favorites: string[] // Assuming favorites are identified by their IDs
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite}>
          {/* Display information about the favorited item */}
          {favorite}
        </div>
      ))}
    </div>
  )
}

export default Favorites
