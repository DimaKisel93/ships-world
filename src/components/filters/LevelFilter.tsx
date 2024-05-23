import React from 'react'

interface LevelFilterProps {
  value: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const LevelFilter = ({ value, onChange }: LevelFilterProps) => {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <label>
      Level:
      <select name="level" value={value} onChange={onChange}>
        <option value={0}>All</option>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </label>
  )
}

export default LevelFilter
