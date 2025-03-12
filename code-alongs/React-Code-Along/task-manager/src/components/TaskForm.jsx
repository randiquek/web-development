import React, {useState} from 'react'

export default function TaskForm({dispatch}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [impact, setImpact] = useState('1');
    const [effort, setEffort] = useState('1');
    

    const impactLabels = {1: 'Low', 2: 'High'};
    const effortLabels = {1: 'Low', 2: 'High'};

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setImpact('');
        setEffort('');

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let priority = 0;
        if (impact === "1" && effort === "1"){
           priority = 3;
        }
        if (impact === "2" && effort === "1"){
            priority = 1;
        }
        if (impact === "1" && effort === "2"){
            priority = 4;
        }
        if (impact === "2" && effort === "2"){
            priority = 2;
        }
    
        const taskData = {
            id: crypto.randomUUID(),
            date: new Date().toISOString().slice(0, 19),
            title,
            description,
            priority
        }

        fetch("http://localhost:8080/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(taskData)
        }).then(response => response.json())
        .then((data) => {
            dispatch({type: "ADD_TASK", payload: data});
            clearForm();
        });
    }

    return (

        <form className="task-form">
            <div>
                <label>Title</label>
                
                <input value={title}
                onChange={(e) => setTitle(e.target.value)} type="text" />
            </div>
            <div>
                <label>Description</label>
                <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="priority-container">
                <fieldset className="priority-fieldset">
                    <legend>Impact</legend>
                    {Object.entries(impactLabels).map(([value, label]) => (
                        <label key={value} className="priority-label">
                            <input
                                type="radio"
                                value={value}
                                className="priority-input"
                                checked={impact === value}
                                onChange={() => setImpact(value)}
                            />
                            {label}
                        </label>
                    ))}
                </fieldset>
                <fieldset className="priority-fieldset">
                    <legend>Effort</legend>
                    {Object.entries(effortLabels).map(([value, label]) => (
                        <label key={value} className="priority-label">
                            <input
                                type="radio"
                                value={value}
                                className="priority-input"
                                checked={effort === value}
                                onChange={() => setEffort(value)}
                            />
                            {label}
                        </label>
                    ))}
                </fieldset>
            </div>
            <button onClick={handleSubmit}>Add Task</button>
        </form>

    )
}