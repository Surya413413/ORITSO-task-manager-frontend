
import { Component } from "react";
import "./index.css";

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    dueDate: '',
    status: 'pending',
    message: '',
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.editingTask &&
      this.props.editingTask !== prevProps.editingTask
    ) {
      const { title, description, dueDate, status } = this.props.editingTask;
      this.setState({
        title,
        description,
        dueDate: dueDate ? dueDate.split("T")[0] : '',
        status,
        message: ''
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, status, dueDate } = this.state;

    if (!title || !description || !status) {
      this.setState({ message: "All fields are required!" });
      return;
    }

    const isEditing = this.props.editingTask;
    const url = isEditing
      ? `http://localhost:5000/api/tasks/${this.props.editingTask.id}`
      : "http://localhost:5000/api/tasks";
    const method = isEditing ? "PUT" : "POST";

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, dueDate, status }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        this.setState({
          message: isEditing ? "Task updated successfully!" : "Task created!",
          title: "",
          description: "",
          dueDate: "",
          status: "pending",
        });
        this.props.onSuccess(); // reload tasks
      } else {
        this.setState({ message: data.error || "Operation failed." });
      }
    } catch (error) {
      this.setState({ message: "Error: Unable to process request." });
      console.error(error);
    }
  };

  render() {
    const { title, description, dueDate, status, message } = this.state;
    const isEditing = this.props.editingTask;

    return (
      <div className="register-container2">
        <div className="register-box">
          <div className="imge-regitertext">
            
            <h2 className="register-title">{isEditing ? "Edit Task" : "Create Task"}</h2>
          </div>

          <p className="register-message">{message}</p>

          <form className="task-form" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />

            <label htmlFor="duedate">Due Date</label>
            <input
              type="date"
              name="dueDate"
              id="duedate"
              value={dueDate}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={this.handleChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;



















// import { Component } from "react";
// import {Link, withRouter} from "react-router-dom"
// import {navigate} from "react-router-dom"


// import "./index.css" 


// class TaskForm extends Component {
//   state = {

//  title: '',
//     description: '',
//     dueDate: '',
//     status: 'pending'}
//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//  handleSubmit = async (event) => {
//     event.preventDefault();
//     const {title,description,status,dueDate} = this.state
//     console.log("Form Data Before Sending:", { title, description, dueDate }); // Debugging

//   if (!title || !description || !status) {
//     this.setState({ message: "All fields are required!" });
//     return;
//   }
//     const formData = {
//       title,
//       description,
//       dueDate,
//       status
//     }

//     try {
//       const isEditing = this.props.editingTask;

//   const url = isEditing
//     ? `http://localhost:5000/api/tasks/${this.props.editingTask._id}`
//     : "http://localhost:5000/api/tasks"
//       // const url = "http://localhost:5000/api/tasks"
//       const method = isEditing ? "PUT" : "POST";
//       const option ={
//         method,
//         headers: { "Content-Type": "application/json"
            
//          },

//         body: JSON.stringify({title,description,status,dueDate}),
//       }
//       const response = await fetch(url,option)
//       const data = await response.json(); 
//       console.log(response)
//       console.log(data)
//       if (response.ok) {
//         this.setState({message:response.statusText
//           , redirect: true,title: "",               
//           content: "",               
//           category: "",
//           description:"",
//         dueDate:""});
//         this.props.onSuccess();
      
//       } else {
//       this.setState({ message: data.error || "Failed to Create." });
//       }
//     } catch (error) {
//       this.setState({message:`${error} :"Error: Unable to Create.` });
//       console.log(error)
//     }
//   };

// render(){
//   const {title,description,status,message,redirect,dueDate} = this.state
 
//   return (
//     <>
//     {/* <Header/> */}

//     <div className="register-container2">
//       <div className="register-box">
//         <div className="imge-regitertext">
//         <img
//             src="taskmanager-600x264.png"
//             className="login-website-logo-desktop-img"
//             alt="website logo"
//           />
//         <h2 className="register-title">Create Task</h2>
//         </div>
     
//          <p className="register-message">{message}</p>
//         <form className="task-form" onSubmit={this.handleSubmit}>
//         <label for="title"> Title</label>
//         <input className="title" name="title" placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange} required />
//         <label for="description">Description</label>
//         <textarea className="description" name="description" placeholder="Description" id="description" value={this.state.description} onChange={this.handleChange} />
//         <label for="duedate">DueDate</label>
//         <input name="dueDate" type="date" id="duedate" value={this.state.dueDate} onChange={this.handleChange} required />
//         <label for="status">Status</label>
//         <select className="" name="status" value={this.state.status} id="status" onChange={this.handleChange}>
//           <option className="" value="pending">Pending</option>
//           <option className="" value="completed">Completed</option>
//         </select>
//         <button type="submit">{this.props.editingTask ? "Update" : "Add"} Task</button>
//       </form>
        
//       </div>
//     </div>
//     </>
//   );
// }
// };

// export default TaskForm;