import React, { FC } from 'react'
import HarrisBenedictForm from '../components/HarrisBenedictForm/HarrisBenedictForm'
import MifflinSaintJeorForm from '../components/MifflinSaintJeorForm/MifflinSaintJeorForm'
import TomVenutoForm from '../components/TomVenutoForm/TomVenutoForm'
import { IHuman } from '../../interfaces/IHuman'
import { Typography } from '@mui/material'

interface IProps {
  selectedFormula: string
  human: IHuman
}

const Formula: FC<IProps> = ({ selectedFormula, human }) => {
  switch (selectedFormula) {
    case 'harrisBenedictFormula':
      return <HarrisBenedictForm human={human}></HarrisBenedictForm>

    case 'mifflinSaintJeorFormula':
      return <MifflinSaintJeorForm human={human}></MifflinSaintJeorForm>

    case 'tomVenutoFormula':
      return <TomVenutoForm human={human}></TomVenutoForm>

    default:
      return (
        <Typography
          textAlign="center"
          color="red"
          variant="h6"
          component="div"
        >
          Пожалуйста, выберите формулу
        </Typography>
      )
  }
}

export default Formula
