import React, { FC } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import useFormulas from '../../../hooks/useFormulas/useFormulas'
import { IHuman } from '../../../interfaces/IHuman'

interface IProp {
  human: IHuman
}

const HarrisBenedictForm: FC<IProp> = ({ human }) => {
  const { harrisBenedictFormula, weightGainFormula, weightLossFormula } = useFormulas()

  const result = harrisBenedictFormula(human)
  const loss = result ? weightLossFormula(result as number) : null
  const gain = result ? weightGainFormula(result as number) : null

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        mt: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, textAlign: 'center', width: '100%', maxWidth: '500px' }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
        >
          Результат формулы Harris-Benedict
        </Typography>
        <Typography variant="body1">{result ? `Ваш результат: ${result}` : 'Нет данных для расчета.'}</Typography>
        {loss && gain ? (
          <>
            <Typography
              variant="body2"
              sx={{ mt: 2 }}
            >
              Для снижения массы: {loss}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1 }}
            >
              Для увеличения массы: {gain}
            </Typography>
          </>
        ) : null}
      </Paper>
    </Box>
  )
}

export default HarrisBenedictForm
