import React from 'react'

interface NationFilterProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const NationFilter = ({ value, onChange }: NationFilterProps) => {
  const nations = [
    { name: 'usa', displayName: 'USA' },
    { name: 'japan', displayName: 'Japan' },
    { name: 'ussr', displayName: 'USSR' },
    { name: 'germany', displayName: 'Germany' },
    { name: 'uk', displayName: 'UK' },
    { name: 'france', displayName: 'France' },
    { name: 'pan_asia', displayName: 'Pan-asia' },
    { name: 'italy', displayName: 'Italy' },
    { name: 'commonwealth', displayName: 'Commonwealth' },
    { name: 'pan_america', displayName: 'Pan_america' },
    { name: 'europe', displayName: 'Europe' },
    { name: 'netherlands', displayName: 'Netherlands' },
    { name: 'spain', displayName: 'Spain' },
  ]

  return (
    <label>
      Nation:
      <select name="nation" value={value} onChange={onChange}>
        <option value="">All</option>
        {nations.map((nation) => (
          <option key={nation.name} value={nation.name}>
            {nation.displayName}
          </option>
        ))}
      </select>
    </label>
  )
}

export default NationFilter
