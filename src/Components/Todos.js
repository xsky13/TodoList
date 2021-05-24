import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="todo my-3 panel p-6 mx-2 bg-white rounded-xl shadow-md flex-grow-5 relative">
            <div>
                <div className="text-xl font-medium text-black ml-6">Todos</div>
                {
                    props.todos.length !== 0 ? props.todos.map(todo => <Todo key={todo.replaceAll(' ', '_')} text={todo} setAsFinished={props.setAsFinished} removeAllTodos={props.removeAllTodos} />): <p className="rounded-xl border border-gray-300 border-dashed text-gray-400 p-6 mt-3 mb-3">You don't have any todos!</p>
                }
            </div>
            <div className="removeAllTodos absolute top-7 left-6" onClick={props.removeAllTodos}>
                <BsFillTrashFill className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>
    );
}
