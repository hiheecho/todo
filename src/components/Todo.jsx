import React from "react";

function Todo({ list, isActive, setTodos }) {
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== list.id));
  };
  const btnToggle = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === list.id) {
          console.log(todo);
          console.log({ ...todo, isDone: !todo.isDone });
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <h4>{list.title}</h4>
      <p>{list.content}</p>
      <div>
        <button onClick={deleteTodo}>삭제</button>
        <button onClick={btnToggle}>{isActive ? "완료" : "취소"}</button>
      </div>
    </div>
  );
}

export default Todo;
