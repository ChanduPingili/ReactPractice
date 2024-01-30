// import "bootstrap/dist/css/bootstrap.min.css"
import { IoAdd } from "react-icons/io5";
import {useRef, useContext} from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo(){
  const {addItem}= useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const todoDueElement = useRef();

  // const handleTodoName = (event)=>{
  //   setTodoName(event.target.value);
  // }

  // const handleDueDate = (event)=>{
  //   setDueDate(event.target.value);
  // }

  const handleAddButton = (event)=>{
    event.preventDefault(); //it make sure that the whole page won't reload on submit
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueElement.current.value; 
    addItem(todoName, dueDate);
    todoNameElement.current.value = "";
    todoDueElement.current.value = "";
    // setDueDate("");
    // setTodoName("");
  }
  return <div className="container">
    <form className="row todo-row" onSubmit={handleAddButton}>
    <div className="col-4">
      <input type="text" placeholder="Enter Todo Here" ref={todoNameElement}/>
    </div>
    <div className="col-4">
      <input type="date" ref={todoDueElement}/>
    </div>
    <div className="col-2">
      <button className="btn btn-success kg-btn" onClick={handleAddButton}>
        <IoAdd/>
      </button>
    </div>
    </form>
  </div>
}

export default AddTodo;