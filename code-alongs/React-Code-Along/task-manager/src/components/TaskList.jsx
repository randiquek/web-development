import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({tasks, dispatch}) {



    return (
        <div className="task-list"> {
            tasks.map(task => 
                <TaskItem key={task.id} task={task} dispatch={dispatch} />
            )}

        </div>

    )
}