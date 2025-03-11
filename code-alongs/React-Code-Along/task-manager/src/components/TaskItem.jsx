import React from "react";


export default function TaskItem({task, dispatch}) {
    const {id, date, priority, title, description} = task;

    const priorityClass = {
        1: "priority-proceed",
        2: "priority-investigate",
        3: "priority-consider",
        4: "priority-avoid"
    }

    return (
        <div className="task-item">
            <div className={"card-container"}>
                <div className={`priority-dot ${priorityClass[priority]}`}></div>
                <div className={"creation-date"}>
                    <em>{date.substring(0,10)}</em>
            </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => dispatchEvent({type: 'DELETE_TASK', payload: id})}>Delete</button>

        </div>

    )
}