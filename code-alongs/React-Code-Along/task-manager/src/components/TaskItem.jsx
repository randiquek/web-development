import React from "react";


export default function TaskItem({task, dispatch}) {
    const {id, date, priority, title, description} = task;

    const priorityClass = {
        1: "priority-proceed",
        2: "priority-investigate",
        3: "priority-consider",
        4: "priority-avoid"
    }
    const handleDelete = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/tasks/" + id, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"},
        })
        .then(response => response.json())
        .then(() => {
        });
        dispatch({type: "DELETE_TASK", payload: id});
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
            <button onClick={handleDelete}>Delete</button>

        </div>

    )
}