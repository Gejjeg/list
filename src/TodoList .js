import React from "react";

export class TodoList extends React.Component {
    state = {
        item: "",
    }

    todoHandler = (event) => {
        this.setState({
            item: event.target.value,
        })
    }

    addItem = () => {
        const list = document.createElement("li")
        list.innerHTML = this.state.item
        document.getElementById("item-list").appendChild(list)
    }
    render() {
        // const items = this.state(<li></li>)

        return(
            <div>
                <h1>Todo List</h1>     
                <input name="item" value={this.state.item} onChange={this.todoHandler} />
                {<ul id="item-list"></ul>}
                <button onClick={this.addItem}>Add Item</button>  
            </div> 
        )
    }
}