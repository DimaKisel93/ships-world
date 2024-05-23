import { useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SHIPS } from '../queries'
import ShipCard from '../components/ShipCard'
import { Ship } from '../types/types'
import NationFilter from '../components/filters/NationFilter'
import ClassFilter from '../components/filters/ClassFilter'
import LevelFilter from '../components/filters/LevelFilter'

const ShipList = () => {
  const { loading, error, data } = useQuery(GET_SHIPS)
  const [filters, setFilters] = useState({
    level: 0,
    nation: '',
    class: '',
  })

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: name === 'level' ? Number(value) : value,
    })
  }

  const filteredShips = useMemo(() => {
    if (!data || !data.vehicles) return []
    return data.vehicles.filter((ship: Ship) => {
      console.log(ship.nation.name)
      return (
        (filters.level === 0 || ship.level === filters.level) &&
        (filters.nation === '' || ship.nation.name === filters.nation) &&
        (filters.class === '' || ship.type.name === filters.class)
      )
    })
  }, [data, filters])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Wall of Ships</h1>
      <div>
        <LevelFilter value={filters.level} onChange={handleFilterChange} />
        <NationFilter value={filters.nation} onChange={handleFilterChange} />
        <ClassFilter value={filters.class} onChange={handleFilterChange} />
      </div>
      <div>
        {filteredShips.map((ship: Ship) => {
          return (
            <ShipCard
              key={ship.title || `${ship.nation.name}-${ship.level}-${ship.type.name}`}
              ship={ship}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShipList
