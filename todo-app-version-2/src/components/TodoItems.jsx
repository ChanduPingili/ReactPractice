import TodoItem from "./TodoItem";

function TodoItems({todoItems}){
  return <div className="items-container">
  <div className="row todo-row">
  {todoItems.map((item)=><TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
  </div>
</div>
}

export default TodoItems;