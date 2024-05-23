import React from 'react'

interface ClassFilterProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const ClassFilter = ({ value, onChange }: ClassFilterProps) => {
  const classes = [
    { name: 'destroyer', displayName: 'Destroyer' },
    { name: 'cruiser', displayName: 'Cruiser' },
    { name: 'battleship', displayName: 'Battleship' },
    { name: 'submarine', displayName: 'Submarine' },
    { name: 'aircarrier', displayName: 'Aircarrier' },
  ]

  return (
    <label>
      Class:
      <select name="class" value={value} onChange={onChange}>
        <option value="">All</option>
        {classes.map((cls) => (
          <option key={cls.name} value={cls.name}>
            {cls.displayName}
          </option>
        ))}
      </select>
    </label>
  )
}

export default ClassFilter
