import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const TenureSelect = ({ data, setData }) => {
  const handleChange = (event) => {
    setData({ ...data, loanTerm: event.target.value })
  }
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>
        Срок предоставления займа
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={data.loanTerm}
        label='Срок предоставления займа'
        defaultValue={5}
        onChange={handleChange}
      >
        <MenuItem value={5}>5 лет</MenuItem>
        <MenuItem value={10}>10 лет</MenuItem>
        <MenuItem value={15}>15 лет</MenuItem>
        <MenuItem value={20}>20 лет</MenuItem>
        <MenuItem value={25}>25 лет</MenuItem>
      </Select>
    </FormControl>
  )
}

export default TenureSelect
