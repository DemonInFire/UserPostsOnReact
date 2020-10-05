import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
    it ('Render App', () => {
        render(<App />)
    })
})