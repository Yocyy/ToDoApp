import React, { useState } from 'react';
import "./styles.css"
import { InputTodo } from "./components/InputTodo"
import { InCompleteTodos } from "./components/InCompleteTodos"
import { CompleteTodos } from "./components/CompleteTodos"

//ステートの値が変わると再レンダリング
export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [inCompleteTodos, setInCompleteTodos] = useState(['test1', 'test2']);
  const [completeTodos, setCompleteTodos] = useState(['aa', 'bb']);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    //(削除するindex, indexからいくつ削除するか)
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    onClickDelete(index);
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setInCompleteTodos(newInCompleteTodos);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  );
};