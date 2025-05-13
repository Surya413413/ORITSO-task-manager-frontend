import React, { Component } from 'react';
 import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import Header from "../Header"
// import { getTasks } from './api/taskApi';
import { FaSearch } from "react-icons/fa";
import './index.css';

class Home extends Component {
  state = {
    tasks: [],
    search: '',
    editingTask: null,
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
        const apiurl = "http://localhost:5000/api/tasks"
        const options = {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        }
    try{
        const response = await fetch(apiurl,options)
        const data = await response.json()
        console.log(data)
        this.setState({ tasks: data, editingTask: null }); 


    }catch(error){
        console.log("error in catch block")
    }
  }

  setEditingTask = (task) => {
    this.setState({ editingTask: task });
    
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value }, this.loadTasks);
  };

  render() {
    const { tasks, editingTask, search } = this.state;
     const filteredtask = tasks.filter((each) =>
      each.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="container">
        <Header/>
        <div className='imge-regitertext'>
        
        {/* <img
              src="taskmanager-600x264.png"
              className="login-website-logo-desktop-img"
              alt="website logo"
            /> */}
            <h1 className="title">Task Manager</h1>
          </div>
        <div className="search-container">
  <input
    className="search-input"
    placeholder="Search tasks..."
    value={search}
    type="search"
    onChange={this.handleSearchChange}
  />
  <FaSearch className="search-icon" />
</div>

        <div className='divided-two-pages'>
         <TaskForm
          editingTask={editingTask}
          onSuccess={this.loadTasks}
          setEditingTask={this.setEditingTask}
       
        /> 
        {filteredtask.length == 0?(<div className="not-found-container">
          <h1>No Task Found</h1>
    <img
      src="not-found-blog-img.png"
      alt="not found"
      className="not-found-img"
    />
  </div>):(
          <TaskList
          tasks={filteredtask}
          onEdit={this.setEditingTask}
          onDelete={this.loadTasks}
        />
        )}
        
        </div>
      </div>
    );
  }
}

export default Home;
