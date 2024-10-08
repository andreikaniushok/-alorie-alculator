import React from 'react'
import { IHuman } from '../../interfaces/IHuman'
import { ILifestyleCoefficient } from '../../interfaces/ILifestyleCoefficient'

const lifestyleCoefficientOfHarrisBenedict: ILifestyleCoefficient = {
  lowActivity: 1.4,
  moderateActivity: 1.6,
  mediumActivity: 1.9,
  highActivity: 2.2,
  none: null,
}

const lifestyleCoefficientMifflinSaintJeor: ILifestyleCoefficient = {
  lowActivity: 1.375,
  moderateActivity: 1.55,
  mediumActivity: 1.55,
  highActivity: 1.9,
  none: null,
}

const useFormulas = () => {
  const harrisBenedictFormula = (human: IHuman): number | string => {
    if (human.gender === 'none') return 'Выберите пол'
    if (human.age === null || human.age <= 0) return 'Укажите возраст'
    if (human.weight === null || human.weight <= 3) return 'Укажите вес'
    if (human.height === null || human.height <= 30) return 'Укажите рост'
    if (human.lifestyle === 'none') return 'Выберите активность'

    let result: number = 0

    const lifestyle: number = lifestyleCoefficientOfHarrisBenedict[human.lifestyle] as number

    if (human.gender === 'woman') {
      result = Math.round(655 + 9.6 * human.weight! + 1.8 * human.height! - 4.7 * human.age! * lifestyle)
    }
    if (human.gender === 'man') {
      result = Math.round(66 + 13.7 * human.weight! + 5 * human.height! - 6.76 * human.age! * lifestyle)
    }

    return result
  }

  const tomVenutoFormula = (human: IHuman): number | string => {
    let result: number = 0

    if (human.gender === 'none') return 'Выберите пол'
    if (human.age === null || human.age <= 0) return 'Укажите возраст'
    if (human.weight === null || human.weight <= 3) return 'Укажите вес'
    if (human.height === null || human.height <= 30) return 'Укажите рост'

    if (human.gender === 'woman') {
      result = Math.round(665 + 9.6 * human.weight! + 1.8 * human.height! - 4.7 * human.age!)
    }
    if (human.gender === 'man') {
      result = Math.round(66 + 13.7 * human.weight! + 5 * human.height! - 6.8 * human.age!)
    }

    return result
  }

  const mifflinSaintJeorFormula = (human: IHuman): number | string => {
    if (human.gender === 'none') return 'Выберите пол'
    if (human.age === null || human.age <= 0) return 'Укажите возраст'
    if (human.weight === null || human.weight <= 3) return 'Укажите вес'
    if (human.height === null || human.height <= 30) return 'Укажите рост'

    let result: number = 0

    const lifestyle: number | null = lifestyleCoefficientMifflinSaintJeor[human.lifestyle]

    if (human.lifestyle === 'none') {
      if (human.gender === 'woman') {
        result = Math.round(9.99 * human.weight! + 6.25 * human.height! - 4.92 * human.age! - 161)
      }
      if (human.gender === 'man') {
        result = Math.round(9.99 * human.weight! + 6.25 * human.height! - 4.92 * human.age! + 5)
      }
    } else {
      if (human.gender === 'woman') {
        result = Math.round((10 * human.weight! + 6.25 * human.height! - 5 * human.age! - 161) * lifestyle!)
      }
      if (human.gender === 'man') {
        result = Math.round((10 * human.weight! + 6.25 * human.height! - 5 * human.age! + 5) * lifestyle!)
      }
    }

    return result
  }

  const weightLossFormula = (data: number): number => {
    const result = Math.round(data - 500)

    return result
  }

  const weightGainFormula = (data: number): number => {
    const result = Math.round(data + 500)

    return result
  }

  return { harrisBenedictFormula, tomVenutoFormula, mifflinSaintJeorFormula, weightGainFormula, weightLossFormula }
}

export default useFormulas
