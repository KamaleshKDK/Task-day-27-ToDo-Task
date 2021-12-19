import React from "react";

function Todo(props) {
    return (
            <ul class="list-group">
                {
                    props.Cartitems.map((item) => {
                        return <li class="list-group-item d-flex justify-content-between align-item-center">
                            {item.name}
                            <button onClick={() => (props.handleRemove(item))} class="badge badge-pill">Remove</button>
                        </li>
                    })
                }
            </ul>
    )
}
export default Todo