import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { FinishedTodo } from './FinishedTodo'

export const Finished = (props) => {
    return (
        <div className="finished my-3 panel p-6 mx-2 bg-white rounded-xl shadow-md flex-grow-5 relative">
            <div>
                <div className="text-xl font-medium text-black ml-6">Finished Todos</div>
                {
                    props.todos.length !== 0 ? props.todos.map(todo => <FinishedTodo key={todo} text={todo} removeFinished={props.removeFinished} />): <p className="rounded-xl border border-gray-300 border-dashed text-gray-400 p-6 mt-3 mb-3">You don't have any finished todos!</p>
                }
            </div>
            <div className="removeAllTodos absolute top-7 left-6" onClick={props.removeAllFinishedTodos}>
                <BsFillTrashFill className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>
    )
}
