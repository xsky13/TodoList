import React from 'react'
import { btnClasses, inputClasses } from '../itemClasses';

export const AddTodo = (props) => {
    return (
        <form onSubmit={props.todoFunc} className="flex justify-center flex-wrap mt-5 mb-5 mx-2">
            <div className="input-group flex-grow-10">
                <label htmlFor="todo" className="text-gray-500">Todo</label>
                <input type="text" name="todo" className={inputClasses + ' w-full'} placeholder="E.g., fold clothes" />
            </div>
            <div className="input-group mt-6">
                <button name="btn" className={btnClasses + ' ml-3'}>Add</button>
            </div>
        </form>
    )
}
