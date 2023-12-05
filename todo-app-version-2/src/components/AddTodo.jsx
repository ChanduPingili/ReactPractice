// import "bootstrap/dist/css/bootstrap.min.css"

function AddTodo(){
  return <div className="container">
    <div className="row todo-row">
    <div className="col-4">
      <input type="text" placeholder="Enter Todo Here" />
    </div>
    <div className="col-4">
      <input type="date"/>
    </div>
    <div className="col-2">
      <button className="btn btn-success kg-btn">Add</button>
    </div>
    </div>
  </div>
}

export default AddTodo;