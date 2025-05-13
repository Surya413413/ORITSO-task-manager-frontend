

// import {Link, } from 'react-router-dom'

import "./index.css"

const Header = (props) => {
   
    const onclickHome = () => {
        const {history} = props 
        history.replace("/")
        window.location.reload();
    }

    return(
        <div className='header-container'>
        <img
          src="taskmanager-600x264.png"
       className='header-logo'
          alt="website logo"
        />
        <div className='note-logut-continaer'>
             <h1 className="title">Task Manager</h1>
           </div>
        
        </div>
    )
}
export default Header