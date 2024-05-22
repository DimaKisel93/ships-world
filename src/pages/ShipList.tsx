import { useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SHIPS } from '../queries'
import ShipCard from '../components/ShipCard'
import { Ship } from '../types/types'

const ShipList = () => {
  const { loading, error, data } = useQuery(GET_SHIPS)
  const [filters, setFilters] = useState({
    level: 0,
    nation: '',
    class: '',
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: name === 'level' ? Number(value) : value,
    })
  }

  const filteredShips = useMemo(() => {
    return data.vehicles.filter((ship: Ship) => {
      return (
        (filters.level === 0 || ship.level === filters.level) &&
        (filters.nation === '' || ship.nation.name === filters.nation) &&
        (filters.class === '' || ship.type.name === filters.class)
      );
    });
  }, [data.vehicles, filters]);

  return (
    <div>
      <h1>Wall of Ships</h1>
      <div>
        <label>
          Level:
          <select name="level" value={filters.level} onChange={handleFilterChange}>
            <option value={0}>All</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
        </label>
        <label>
          Nation:
          <select name="nation" value={filters.nation} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
          </select>
        </label>
        <label>
          Class:
          <select name="class" value={filters.class} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="destroyer">Destroyer</option>
            <option value="cruiser">Cruiser</option>
            <option value="battleship">Battleship</option>
            <option value="submarine">Submarine</option>
            <option value="aircarrier">Aircarrier</option>
          </select>
        </label>
      </div>
      <div>
        {filteredShips.map((ship: Ship) => {
          return <ShipCard key={ship.title} ship={ship} />
        })}
      </div>
    </div>
  )
}

export default ShipList
