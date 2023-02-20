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
        const itemList = document.getElementById("item-list")
        const clear = document.getElementById("clear")
        itemList.appendChild(list)
        itemList.appendChild(clear)
        // document.querySelector("clearList")
        // itemList.parentNode.removeChild(clearList)
        list.innerHTML = this.state.item
        itemList.appendChild(list)
        document.getElementById("list").value = ""
    }

    reset = () => {
        document.querySelector("ul").innerHTML = ""
    }

    clearList = () => {
        const clear = document.getElementById("clear")
        clear.remove()
        const list = document.querySelector("li")
        list.remove()
    }

    render() {
        // const items = this.state(<li></li>)

        return(
            <div>
                <h1>Todo List</h1>     
                <input id="list" name="item" value={this.state.item} onChange={this.todoHandler} />
                <ul id="item-list"></ul>
                <button onClick={this.addItem}>Add Item</button> 
                <button onClick={this.reset}>Reset</button> 
                <button id="clear" name="remove" onClick={this.clearList}>x</button>
            </div> 
        )
    }
}