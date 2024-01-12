// components/FilterRow.js
import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Year', label: 'Year' },
  { value: 'Month', label: 'Month' },
  { value: 'Week', label: 'Week' },
  { value: 'Day', label: 'Day' },
]

const FilterRow = () => {
  return (
    <Select defaultValue={options[0]} options={options} className='focus:outline-none w-28'/>
  );
};

export default FilterRow;
