function TodoItem({todoName , todoDate}){
  return <div className="items-container">
  <div className="row todo-row">
  <div className="col-4">{todoName}</div>
  <div className="col-4">{todoDate}</div>
  <div className="col-2">
    <button className="btn btn-danger kg-btn">Delete</button>
  </div>
  </div>
</div>
}

export default TodoItem;