import React, { Component } from 'react';
import "./index.css"

class TaskList extends Component {

handleDelete = async (id) => {
  if (window.confirm("Delete this task?")) {
    console.log(id)
    try {
      const url = `http://localhost:5000/api/tasks/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      this.props.onDelete(); // Reload task list in parent
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  }
};


  render() {
    const { tasks, onEdit } = this.props;
    return (
      <div className="task-list-container">
        {tasks.map((task,index) => (
          <div key={task._id} className="task-card-container">
            <h3>Task: {index + 1}</h3>
            <h3>Title: {task.title}</h3>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <div className='buttons-container'>
                <button className="edit-button" onClick={() => onEdit(task,task.id)}>Edit</button>
                <button className="delete-button" onClick={() => this.handleDelete(task.id)}>Delete</button>
            </div>
            
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;



//  onDelete = async (id) => {
    
//     try {
//       const url = `http://localhost:5000/api/tasks/${id}`;
//       const options = {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const response = await fetch(url, options);
//       if (!response.ok) {
//         throw new Error(`Failed to delete item. Status: ${response.status}`);
//       }

//     //   this.setState((prevState) => ({
//     //     tasks: prevState.tasks.filter((each) => each.id !== id),
//     //   }));
//      if (this.props.onDelete) {
//       this.props.onDelete();
//     }
//     } catch (error) {
//       console.error("Error deleting note:", error.message);
//     }
//   };