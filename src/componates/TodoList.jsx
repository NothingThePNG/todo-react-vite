import React from 'react'
import TodoCard from './todoCard';

export default function TodoList(props) {
    const { todos } = props;

    return (
        <ul>
            {todos.map((todo, todoIndex) => {
            return <TodoCard {...props} key={todoIndex} index={todoIndex}>
                {todo[0]} - {todo[1]} - {todo[2]}
            </TodoCard>
        })}
        </ul>
    )
}
