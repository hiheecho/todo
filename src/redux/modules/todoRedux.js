import Todolist from "../../components/TodoList";

// Action Value
const ADD_TODO = "ADD_TODO";
// Action Creator
const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
// Initial State
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
// Reducer
const todolist = (state = initialState,action)
=> {
    switch(action.type){
        case ADD_TODO : {
            return{
                ...state
            };
        }
        default:
            return state;
    }

    
};
export default todolist
