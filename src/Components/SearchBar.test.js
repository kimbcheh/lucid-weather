import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
 test('Calls the onSearch callback handler', () => {
  const setCity = jest.fn()
  render(<SearchBar onSearch={setCity} />)
  userEvent.type(screen.getByRole('textbox'), 'Sydney')
  userEvent.click(screen.getByRole('button'))
  expect(setCity).toBeCalledTimes(1)
 })
})
