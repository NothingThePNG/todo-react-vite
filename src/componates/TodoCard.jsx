import React from 'react'

export default function TodoCard(props) {
    const { children, handalDeletTodo, index } = props;
    return (
        <li>
            <div contentEditable="true" className="no-background">
                {children}
            </div>
            <div className="left">
                <i onClick={() => 
                {handalDeletTodo(index)}
                } className="fa-solid fa-check" title="Complete"></i>
            </div>
        </li>
    )
}
