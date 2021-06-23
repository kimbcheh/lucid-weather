import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CurrentWeather from './CurrentWeather'

describe('CurrentWeather', () => {
 test('Renders CurrentWeather component correctly with props', () => {
  const data = {
   current: {
    dt: 1624439299,
    sunrise: 1624397761,
    sunset: 1624432109,
    temp: 12.62,
    weather: [
     {
      description: 'broken clouds',
     },
    ],
   },
   daily: [
    {
     pop: 0.57,
     rain: 0.11,
     temp: {
      max: 13.55,
      min: 11.9,
     },
    },
   ],
  }
  const city = 'Melbourne'
  render(<CurrentWeather data={data} city={city} />)
  expect(screen.getByText('Currently in MELBOURNE:')).toBeInTheDocument()
  expect(screen.getByText(/12.62/)).toBeInTheDocument()
  expect(
   screen.getByText('Enjoy your broken clouds today.')
  ).toBeInTheDocument()
  expect(screen.getByText(/13.55/)).toBeInTheDocument()
  expect(screen.getByText(/11.9/)).toBeInTheDocument()
  expect(screen.getByText(/0.57%/)).toBeInTheDocument()
  expect(screen.getByText(/0.11mm/)).toBeInTheDocument()
  expect(screen.getByText(/7:36 am/)).toBeInTheDocument()
  expect(screen.getByText(/5:08 pm/)).toBeInTheDocument()
 })
})
