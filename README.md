# 🧠 ORITSO Assignment – Task Manager Frontend

This project is the **frontend** of the ORITSO Task Manager, built using **React.js**. It connects to a Node.js + Express backend to manage tasks (Create, Read, Update, Delete).

---

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/Surya413413/ORITSO-task-manager-frontend.git
cd ORITSO-task-manager-frontend
npm install

### Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 in your browser.
The page will reload when you make edits.
You will also see lint errors (if any) in the console.

npm run build
Builds the app for production in the build folder.
It bundles React in production mode and optimizes the build for performance.
The build is minified and filenames include content hashes.

Your app is ready to be deployed!

npm test
Launches the test runner in interactive watch mode.
(You can skip this if you’re not using tests.)

npm run eject (Optional)
Note: This is a one-way operation. Once you eject, you can't go back!
It exposes all configurations (webpack, Babel, ESLint) if you want full control.

###  Folder Structure
src/
├── components/
│   ├── TaskForm.js     # Form for adding/editing tasks
│   └── TaskList.js     # Displays all tasks
├── App.js              # Main app component
├── index.js            # React entry point
├── App.css             # Global styles
└── ...

API Integration
This frontend connects to these endpoints from the backend:
| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

Sample Task Object
{
  "title": "Finish Assignment",
  "description": "Complete frontend task manager",
  "dueDate": "2025-05-15",
  "status": "pending"
}

Screenshots
<img width="958" alt="image" src="https://github.com/user-attachments/assets/6a98812c-6105-49e5-ad29-220b8ba71ece" />




**Deployment**
To deploy on Vercel or Netlify:
Push code to GitHub.
Connect your repo on Vercel/Netlify.
Set the environment variable REACT_APP_API_URL.

Deploy. 🎉

