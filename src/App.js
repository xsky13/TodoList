import React, { useState, useEffect } from 'react'
import { AddTodo } from './Components/AddTodo';
import { Finished } from './Components/Finished';
import { Todos } from './Components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }

    const finishedTodos = JSON.parse(localStorage.getItem('finishedTodos'));
    if (finishedTodos) {
      setFinishedTodos(finishedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('finishedTodos', JSON.stringify(finishedTodos));
  });

  const addTodo = e => {
    e.preventDefault();
    const todo = e.target.children[0].children[1];
    if (todo.value.length === 0) {
      alert('Input cannot be empty!');
    } else if (todos.indexOf(todo.value) !== -1) {
      alert('Todo already exists!');
    } else {
      setTodos([...todos, todo.value]);
      todo.value = '';
    }
  }

  const setAsFinished = (todoToBeSetAsFinished) => {
    addFinished(todoToBeSetAsFinished);
    setTodos(todos.filter((todo) => todoToBeSetAsFinished !== todo));
  }

  const addFinished = todoToBeSetAsFinished => {
    setFinishedTodos([...finishedTodos, todos.filter((todo) => todoToBeSetAsFinished === todo)]);
  }

  const removeFinished = todoToRemove => {
    setFinishedTodos(finishedTodos.filter((todo) => todoToRemove !== todo));
  }

  const removeAllTodos = () => {
    if (todos.length !== 0) {
      if (window.confirm('Are you sure you want to delete all your todos? This action cannot be undone!')) {
        setTodos([]);
      } else {
        //Do nothing
      }
    }
  }

  const removeAllFinishedTodos = () => {
    if (finishedTodos.length !== 0) {
      if (window.confirm('Are you sure you want to delete all your finished todos? This action cannot be undone!')) {
        setFinishedTodos([]);
      } else {
        //Do nothing
      }
    }
  }

  return (
    <div className="main d-block m-auto lg:w-7/12 md:w-9/12">
      <h1 className="text-center text-6xl mt-10">Todo</h1>
      <AddTodo todoFunc={addTodo} />
      <div className="flex flex-row justify-center flex-wrap mt-7 main-panel">
        <Todos todos={todos} setAsFinished={setAsFinished} removeAllTodos={removeAllTodos} />
        <Finished todos={finishedTodos} removeFinished={removeFinished} removeAllFinishedTodos={removeAllFinishedTodos} />
      </div>
    </div>
  )
}

export default App;
