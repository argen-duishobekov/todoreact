import React from 'react'

export const TodoItem  = ({todo}) => {
  return (
    <div className='todo-item'>{todo.text}
    <button>complete</button>
    <button>delete</button>
    </div>
  )
}
