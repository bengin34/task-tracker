import React, { useState } from 'react'
import Task from './Task'


const Tasks = ({tasks,handleDelete}) => {

  return (
    <div>
    {tasks.map((task) => {
     return <Task task={task} handleDelete={handleDelete} key={task.id} />

    })

    }
    </div>
  )
}

export default Tasks
