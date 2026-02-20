import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Todo = {
  id: number
  text: string
}

const fakeUsers = ['Alice', 'Bob', 'Charlie','sathish']

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('tester')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [submittedMessage, setSubmittedMessage] = useState('')

  const [count, setCount] = useState(0)

  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const [users, setUsers] = useState<string[]>([])

  const emailError = useMemo(() => {
    if (!email) {
      return 'Email is required'
    }
    if (!email.includes('@')) {
      return 'Email must include @'
    }
    return ''
  }, [email])

  const passwordError = useMemo(() => {
    if (!password) {
      return 'Password is required'
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters'
    }
    return ''
  }, [password])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (emailError || passwordError) {
      setSubmittedMessage('Fix form errors before submitting')
      return
    }

    if (!acceptedTerms) {
      setSubmittedMessage('Please accept terms before submitting')
      return
    }

    setSubmittedMessage(`Submitted for ${name || 'Guest'} as ${role}`)
  }

  function handleAddTodo() {
    const next = todoInput.trim()
    if (!next) return

    setTodos((previous) => [
      ...previous,
      {
        id: Date.now(),
        text: next,
      },
    ])
    setTodoInput('')
  }

  function handleRemoveTodo(id: number) {
    setTodos((previous) => previous.filter((todo) => todo.id !== id))
  }

  function handleLoadUsers() {
    setIsLoadingUsers(true)
    setUsers([])

    setTimeout(() => {
      setUsers(fakeUsers)
      setIsLoadingUsers(false)
    }, 700)
  }

  return (
    <main className="page" data-cy="practice-page">
      <h1 data-cy="page-title">Cypress Practice Playground</h1>

      <section className="card" data-cy="form-section">
        <h2>Form Testing</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            data-cy="name-input"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email</label>
          <input
            data-cy="email-input"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
          />
          <p className="error" data-cy="email-error">{emailError}</p>

          <label htmlFor="password">Password</label>
          <input
            data-cy="password-input"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
          />
          <p className="error" data-cy="password-error">{passwordError}</p>

          <label htmlFor="role">Role</label>
          <select
            data-cy="role-select"
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="tester">Tester</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
          </select>

          <label className="checkbox-row" htmlFor="terms">
            <input
              data-cy="terms-checkbox"
              id="terms"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
            />
            Accept terms
          </label>

          <button data-cy="submit-button" type="submit">
            Submit
          </button>
        </form>
        <p className="status" data-cy="submit-status">{submittedMessage}</p>
      </section>

      <section className="card" data-cy="counter-section">
        <h2>Counter Testing</h2>
        <p data-cy="counter-value">Count: {count}</p>
        <div className="button-row">
          <button data-cy="decrement-button" onClick={() => setCount((c) => c - 1)}>
            -1
          </button>
          <button data-cy="increment-button" onClick={() => setCount((c) => c + 1)}>
            +1
          </button>
          <button data-cy="reset-button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </section>

      <section className="card" data-cy="todo-section">
        <h2>Todo Testing</h2>
        <div className="button-row">
          <input
            data-cy="todo-input"
            type="text"
            value={todoInput}
            onChange={(event) => setTodoInput(event.target.value)}
            placeholder="Write a task"
          />
          <button data-cy="add-todo-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <ul data-cy="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} data-cy="todo-item">
              <span>{todo.text}</span>
              <button
                data-cy="remove-todo-button"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="card" data-cy="async-section">
        <h2>Async Testing</h2>
        <button data-cy="load-users-button" onClick={handleLoadUsers}>
          Load users
        </button>
        {isLoadingUsers && <p data-cy="loading-text">Loading...</p>}
        <ul data-cy="user-list">
          {users.map((user) => (
            <li key={user} data-cy="user-item">
              {user}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
