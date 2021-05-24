import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';


export const FinishedTodo = (props) => {
    return (
        <div className="rounded-xl border-1 border-gray-200 text-gray-400 p-6 mt-3 mb-3">
            <div className="flex flex-row">
                <div className="todo-text flex-grow-9">
                    {props.text}
                </div>
                <div className="todo-actions flex-grow-1 text-lg">
                    <div className="flex flex-row">
                        <BsFillTrashFill className='mt-1 cursor-pointer' onClick={() => props.removeFinished(props.text)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
