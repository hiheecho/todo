import React from "react";
import Todo from "./Todo";

function Todolist({ isActive, todos, setTodos }) {
  return (
    <div>
      <h3>{isActive === true ? "Working" : "Done"}</h3>
      <div>
        {todos
          .filter((todo) => todo.isDone === !isActive)
          .map((list) => {
            return (
              <Todo
                key={list.id}
                list={list}
                setTodos={setTodos}
                isActive={isActive}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Todolist;
