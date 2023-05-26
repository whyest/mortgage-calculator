import React, { useState } from 'react'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import SliderSelect from './Components/SliderSelect'
import TenureSelect from './Components/TenureSelect'
import Result from './Components/Result'
import Navbar from './Components/Navbar'

function App() {
  const [data, setData] = useState({
    homeValue: 3000000,
    downPayment: 3000000 * 0.2,
    loanAmount: 3000000 * 0.8,
    loanTerm: 5,
    interestRate: 10,
  })

  return (
    <div className='App'>
      <Navbar />
      <Container maxWidth='xl' sx={{ paddingTop: 4, paddingBottom: 5 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
