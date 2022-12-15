import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

function InputTodo({ setTodos }) {
  const titleRef = useRef();
  const contentRef = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
    titleRef.current.focus();
  };
  const contentChange = (event) => {
    setContent(event.target.value);
  };
  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false,
    };
    if (!title) {
      alert("제목을 채워주세요");
      setTitle("");
      titleRef.current.focus();
      return;
    }
    if (!content) {
      alert("내용을 채워주세요");
      setContent("");
      contentRef.current.focus();
      return;
    }
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setContent("");
    titleRef.current.focus();
  };
  return (
    <InputComponent onSubmit={addTodo}>
      <input
        ref={titleRef}
        autoFocus={true}
        onChange={titleChange}
        value={title}
      />
      <input ref={contentRef} onChange={contentChange} value={content} />
      <button>추가</button>
    </InputComponent>
  );
}
const InputComponent = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #808080a1;
  border-radius: 10px;
`;

export default InputTodo;
