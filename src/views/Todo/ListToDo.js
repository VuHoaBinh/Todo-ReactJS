import React from "react";
import "./styles.scss";
import AddTodo from "./AddToDo";

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "week1" },
      { id: "todo2", title: "week2" },
      { id: "todo3", title: "week3" },
    ],
  };

  addNewToDo = (element) => {
    let addtodo = this.state.listTodos;
    addtodo.push(element);
    this.setState({
      listTodos: addtodo,
    });
  };

  render() {
    let { listTodos } = this.state;
    return (
      <>
        <div className="list-todo-container">
          <AddTodo addNewToDo={this.addNewToDo} />

          <div className="content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <>
                    <div className="todo-child" key={item.id}>
                      <span>
                        {index + 1} - {item.title}
                      </span>
                      <></>
                      <button type="button" className="update">
                        Update
                      </button>
                      <button type="button" className="delete">
                        Delete
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
