import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import TodoDetails from './TodoDetails'

test('todoDetails component renders content', () => {
    const todo = {
      text: 'component is tested',
      done: true
    }
  
    render(<TodoDetails todo={todo} doneInfo='Done' notDoneInfo= 'Not done'/>)
  
    const element = screen.getByText('component is tested')
    expect(element).toBeDefined()
  })