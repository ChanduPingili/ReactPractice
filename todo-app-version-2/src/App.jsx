import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./components/App.module.css"
function App() {
  const Items=[{
      name:"Buy milk",
      dueDate:"18/11/2023"
    },
    {
      name : "Go to College",
      dueDate:"18/11/2023"
    },
    {
      name:"Follow my profile",
      dueDate:"Right now"
    }
  ]
  // let todoDate = "18/11/2023";
  // let todoName = "Buy Milk";

  return <center className="center">
    <Appname/>
    <div className={styles.todoContainer}>
    <AddTodo/>
    <TodoItems todoItems={Items}/>
    </div>
  </center>
}

export default App
