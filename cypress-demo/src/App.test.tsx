import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App page', () => {
  it('renders title and key sections', () => {
    render(<App />)

    expect(screen.getByText('Cypress Practice Playground')).toBeInTheDocument()
    expect(screen.getByText('Form Testing')).toBeInTheDocument()
    expect(screen.getByText('Counter Testing')).toBeInTheDocument()
    expect(screen.getByText('Todo Testing')).toBeInTheDocument()
    expect(screen.getByText('Async Testing')).toBeInTheDocument()
  })

  it('submits form after valid input and terms acceptance', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Email'), 'bad-email')
    await user.type(screen.getByLabelText('Password'), '123')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Fix form errors before submitting')).toBeInTheDocument()

    await user.clear(screen.getByLabelText('Name'))
    await user.type(screen.getByLabelText('Name'), 'Abish')
    await user.clear(screen.getByLabelText('Email'))
    await user.type(screen.getByLabelText('Email'), 'abish@example.com')
    await user.clear(screen.getByLabelText('Password'))
    await user.type(screen.getByLabelText('Password'), 'secret1')
    await user.selectOptions(screen.getByLabelText('Role'), 'developer')
    await user.click(screen.getByLabelText('Accept terms'))
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Submitted for Abish as developer')).toBeInTheDocument()
  })

  it('updates counter, manages todos, and loads users', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText('Count: 0')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '+1' }))
    await user.click(screen.getByRole('button', { name: '+1' }))
    expect(screen.getByText('Count: 2')).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText('Write a task'), 'Practice Jest')
    await user.click(screen.getByRole('button', { name: 'Add' }))
    expect(screen.getByText('Practice Jest')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Load users' }))
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument()
      expect(screen.getByText('Bob')).toBeInTheDocument()
      expect(screen.getByText('Charlie')).toBeInTheDocument()
      expect(screen.getByText('sathish')).toBeInTheDocument()
    })
  })
})
