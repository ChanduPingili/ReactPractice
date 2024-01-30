
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function TodoItems(){
  const {todoItems} = useContext(TodoItemsContext);
  return <div className="items-container">
  <div className="row todo-row">
  {todoItems.map((item)=><TodoItem todoName={item.name} todoDate={item.dueDate} 
    key={item.name} ></TodoItem>)}
  </div>
</div>
}

export default TodoItems;