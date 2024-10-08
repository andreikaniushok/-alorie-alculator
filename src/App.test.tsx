import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders the title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Калькулятор Калорий/i)
  expect(titleElement).toBeInTheDocument()
})

jest.mock('./containers/Formula/Formula', () => () => <div>Formula Component</div>)
jest.mock('./components/CalorieInfo/CalorieInfo', () => () => <div>Calorie Info Component</div>)

describe('App Component', () => {
  it('renders the title and buttons', () => {
    render(<App />)

    expect(screen.getByText('Калькулятор Калорий')).toBeInTheDocument()
    expect(screen.getByText('Benedict')).toBeInTheDocument()
    expect(screen.getByText('Saint Jeor')).toBeInTheDocument()
    expect(screen.getByText('Tom Venuto')).toBeInTheDocument()
    expect(screen.getByText('Показать аннотацию')).toBeInTheDocument()
  })

  it('changes the formula when buttons are clicked', () => {
    render(<App />)

    const benedictButton = screen.getByText('Benedict')
    const saintJeorButton = screen.getByText('Saint Jeor')
    const tomVenutoButton = screen.getByText('Tom Venuto')

    fireEvent.click(benedictButton)
    expect(benedictButton).toHaveStyle('color: warning')

    fireEvent.click(saintJeorButton)
    expect(saintJeorButton).toHaveStyle('color: warning')

    fireEvent.click(tomVenutoButton)
    expect(tomVenutoButton).toHaveStyle('color: warning')
  })

  it('opens and closes the calorie info dialog', () => {
    render(<App />)

    const showAnnotationButton = screen.getByText('Показать аннотацию')
    fireEvent.click(showAnnotationButton)

    expect(screen.getByText('Информация о расчёте калорий')).toBeInTheDocument()
    expect(screen.getByText('Calorie Info Component')).toBeInTheDocument()

    const closeButton = screen.getByText('Закрыть')
    fireEvent.click(closeButton)

    expect(screen.queryByText('Информация о расчёте калорий')).not.toBeInTheDocument()
  })

  it('updates the input fields', () => {
    render(<App />)

    const ageInput = screen.getByLabelText('Возраст') as HTMLInputElement
    const weightInput = screen.getByLabelText('Вес (кг)') as HTMLInputElement
    const heightInput = screen.getByLabelText('Рост (см)') as HTMLInputElement

    fireEvent.change(ageInput, { target: { value: '25' } })
    fireEvent.change(weightInput, { target: { value: '70' } })
    fireEvent.change(heightInput, { target: { value: '180' } })

    expect(ageInput.value).toBe('25')
    expect(weightInput.value).toBe('70')
    expect(heightInput.value).toBe('180')
  })

  it('changes the gender and lifestyle through select inputs', () => {
    render(<App />)

    const genderSelect = screen.getByLabelText('Пол') as HTMLSelectElement
    const lifestyleSelect = screen.getByLabelText('Активность') as HTMLSelectElement

    fireEvent.change(genderSelect, { target: { value: 'man' } })
    fireEvent.change(lifestyleSelect, { target: { value: 'mediumActivity' } })

    expect(genderSelect.value).toBe('man')
    expect(lifestyleSelect.value).toBe('mediumActivity')
  })
})
