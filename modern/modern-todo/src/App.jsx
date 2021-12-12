import React, { useState } from 'react';
import "./styles.css"

export const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState(['test1','test2']);
  const [completeTodos, setcompleteTodos] = useState(['aa','bb']);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { incompleteTodos.map((todo) => {
            return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
        { completeTodos.map((todo) => {
            return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button>戻る</button>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};