import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App', () => {
 test('Renders App component', () => {
  render(<App />)
  expect(screen.getByText('Lucid Weather')).toBeInTheDocument()
  expect(screen.getByText('Enter an Australian city:')).toBeInTheDocument()
  expect(screen.getByText('💫 Made by Kimberly Cheh.')).toBeInTheDocument()
 })
})
