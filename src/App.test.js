import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App', () => {
 test('Renders App component', () => {
  render(<App />)
  const headerElement = screen.getByText(/Lucid Weather/)
  expect(headerElement).toBeInTheDocument()
  const mainElement = screen.getByText(/Enter an Australian city:/)
  expect(mainElement).toBeInTheDocument()
  const footerElement = screen.getByText(/Made by Kimberly Cheh./)
  expect(footerElement).toBeInTheDocument()
 })
})
