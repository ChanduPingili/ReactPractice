import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./components/App.module.css"
import { TodoItemsContext } from "./store/todo-items-store";
import {useState} from 'react';
function App() {
  // const initialTodoItems=[
  // //   {
  // //   name:"Buy milk",
  // //   dueDate:"18/11/2023"
  // // },
  // // {
  // //   name : "Go to College",
  // //   dueDate:"18/11/2023"
  // // },
  // // {
  // //   name:"Follow my profile",
  // //   dueDate:"Right now"
  // // }
  // ]
  // let todoDate = "18/11/2023";
  // let todoName = "Buy Milk";
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (itemName, itemDueDate) =>{
      // const newTodoItems = [...todoItems, {name:itemName , dueDate:itemDueDate}];
      // setTodoItems(newTodoItems);
      // setTodoItems((currValue) => {
      //   const newTodoItems = [...currValue, {name:itemName, dueDate:itemDueDate}];
      //   return newTodoItems;
      // })
      //by default it gets the previous values
      setTodoItems((currValue) => [...currValue, {name:itemName, dueDate:itemDueDate}]);

  }

  const deleteItem = (itemName)=>{
    //filter returns the values of an array based on the condition
    const newTodoItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItems);
  }
  return <center className="center">
    <TodoItemsContext.Provider value={{
      // todoItems:todoItems,
      // addItem:addItem,
      // deleteItem:deleteItem when key:values are same we can write only one
      todoItems,
      addItem,
      deleteItem
    }}>
    <Appname/>
    <div className={styles.todoContainer}>
    <AddTodo/>
    <WelcomeMessage/>
    <TodoItems />
    </div>
    </TodoItemsContext.Provider>
  </center>
}

export default App;
