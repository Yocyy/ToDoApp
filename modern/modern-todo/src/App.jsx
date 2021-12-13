import React, { useState } from 'react';
import "./styles.css"

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [inCompleteTodos, setInCompleteTodos] = useState(['test1','test2']);
  const [completeTodos, setCompleteTodos] = useState(['aa','bb']);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(!todoText) return;
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
    newCompleteTodos.splice(index,1);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { inCompleteTodos.map((todo, index) => {
            return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
        { completeTodos.map((todo,index) => {
            return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};