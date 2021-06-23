import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ForecastWeather from './ForecastWeather'

describe('ForecastWeather', () => {
 test('Renders ForecastWeather component correctly with props', () => {
  const data = {
   daily: [
    {
     dt: 1624500000,
     temp: {
      max: 15.16,
      min: 11.16,
     },
    },
    {
     dt: 1624586400,
     temp: {
      max: 12,
      min: 8.48,
     },
    },
    {
     dt: 1624672800,
     temp: {
      max: 11.35,
      min: 8.42,
     },
    },
   ],
  }
  render(<ForecastWeather data={data} />)
  expect(screen.getByText(/Forecast/)).toBeInTheDocument()
  expect(screen.getByText('25/6 Fri')).toBeInTheDocument()
  expect(screen.getByText(/12/)).toBeInTheDocument()
  expect(screen.getByText(/8.48/)).toBeInTheDocument()
  expect(screen.getByText('26/6 Sat')).toBeInTheDocument()
  expect(screen.getByText(/11.35/)).toBeInTheDocument()
  expect(screen.getByText(/8.42/)).toBeInTheDocument()
 })
})
