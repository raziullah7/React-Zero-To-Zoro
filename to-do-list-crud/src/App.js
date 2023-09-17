import './App.css';
import { useState } from 'react'
import { Task } from './Task'

function App() {
  // todoList is an array reference which is initially set to an
  // empty array, setTodoList is a setter for todoList
  const [todoList, setTodoList] = useState([]);

  // newTask is initially an empty string which is used to keep track
  // of anything being typed in the input tag, setNewTask is its setter
  const [newTask, setNewTask] = useState("");

  // event handler for input tag
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // event handler for "Add Task" button
  const addTask = () => {
    // we can't directly alter the array "todoList"
    // we have to use the setter due to useState hook

    // so we make a new array that contains all the elements
    // of the current todoList plus the newly entered element
    const task = {
      id: todoList.length === 0? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completion: false,
    }
    setTodoList([...todoList, task]);
  };

  // event handler for "X" at the end of every task
  // using task's Id for deletion to avoid deletion
  // of tasks that have the same name (duplicate tasks)
  const deleteTask = (taskId) => {
    // for filter(), we return true for the elements we want to keep
    // and false for the elements we don't want to keep

    // approach # 1
    // const newTodoList = todoList.filter((task) => {
    //   if (task !== taskName) {
    //    return true;
    //   } else {
    //    return false;
    //   }
    // });
    // setTodoList(newTodoList);

    // approach # 2
    // const newTodoList = todoList.filter((task) => {
    //   return task !== taskName;
    // });
    // setTodoList(newTodoList);

    // approach # 3
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };

  // updation part of CRUD
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completion: true}
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className='addTask' style={{ backgroundColor: "dodgerblue", paddingTop: 128, paddingBottom: 128, margin: 0 }}>
        <input style={ {fontSize: 24} } type='text' onChange={handleChange} />
        <button style={ {fontSize: 24} } onClick={addTask}> Add Task</button>
      </div>
      
      <div className='list'>
        {todoList.map((task) => {
          /** also passing the deleteTask function as props */
          return <Task task={task} deleteTask={deleteTask} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
