import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Result = ({ data }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data
  const totalLoanMonths = loanTerm * 12
  const interestPerMonth = interestRate / 100 / 12
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1)

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount

  const pieChartData = {
    labels: ['Основная сумма', 'Проценты'],
    datasets: [
      {
        label: 'Соотношение основной суммы и процентов',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ['rgba(252,110,83, 0.2)', 'rgba(102,215,209, 0.2)'],
        borderColor: ['rgba(252,110,83, 1)', 'rgba(102,215,209, 1)'],
        borderWidth: 2,
      },
    ],
  }
  return (
    <Stack gap={3}>
      <Typography textAlign='center' variant='h5'>
        Ежемесячный платеж: ₽ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction='row' justifyContent='center'>
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  )
}

export default Result
