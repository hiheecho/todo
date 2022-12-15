import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";

function TodolistContainer() {
  const [todos, setTodos] = useState(initialState);
  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
}
const initialState = [
  {
    id: uuidv4(),
    title: "리액트공부",
    content: "리덕스정리하기",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "리액트공부",
    content: "투두리스트 만들기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "카페가기",
    content: "아메리카노 샷추가",
    isDone: false,
  },
];
export default TodolistContainer;
