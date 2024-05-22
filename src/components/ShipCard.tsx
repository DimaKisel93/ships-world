import { Ship } from '../types/types'

interface ShipCardProps {
  ship: Ship
}

const ShipCard = ({ ship }: ShipCardProps) => {
  const imageUrl = ship.icons.large.startsWith('//')
    ? 'https:' + ship.icons.large
    : ship.icons.large

  return (
    <div key={ship.title} className="ship-card">
      <h2>{ship.title || 'Нет данных'}</h2>
      <p>
        <strong>Class:</strong> {ship.type.title}
      </p>
      <p>
        <strong>Nation:</strong> {ship.nation.title}
      </p>
      <p>
        <strong>Level:</strong> {ship.level}
      </p>
      <p>{ship.description || 'Нет данных'}</p>
      <img src={imageUrl} alt={ship.title} />
    </div>
  )
}

export default ShipCard
