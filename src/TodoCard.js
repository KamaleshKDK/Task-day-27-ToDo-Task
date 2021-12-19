
import React from "react";

function Todo(props) {
    return (
        <div className='col-lg-6 mt-3'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.TodoData.name}</h5>
                    <button onClick={() => { props.HandleClick(props.TodoData) }} class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Todo
