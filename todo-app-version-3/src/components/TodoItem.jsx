import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({todoName , todoDate}){
  const {deleteItem} = useContext(TodoItemsContext);
  return <div className="items-container">
  <div className="row todo-row">
  <div className="col-4">{todoName}</div>
  <div className="col-4">{todoDate}</div>
  <div className="col-2">
    <button className="btn btn-danger kg-btn" onClick={()=>deleteItem(todoName)}>
      <MdDeleteForever/>
    </button>
  </div>
  </div>
</div>
}

export default TodoItem;