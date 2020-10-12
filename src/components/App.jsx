import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import '../styles.css'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="container m-5">
        <h1 className="text-primary display-4">React Hooks</h1>
        <h4 className="font-weight-bold">Count: {count}</h4>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  )
}
