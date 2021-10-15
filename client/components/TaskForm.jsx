import React, {useState} from 'react'

import { addListItem } from '../api/list'

const TaskForm = (props) => {
    const [task, setTask] = useState("")
    
      function handleChange(e) {
        setTask(e.target.value)
      }

      const handleSubmit = e => {
        e.preventDefault()

        addListItem(task).then(res => {
            const item = { id: res, item: task }
            props.addItem(item);
        })
        
        //set the value of the form input to be empty (using state to for initial state clear)
        setTask("")
      }

    return (
        <div>
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={task} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TaskForm