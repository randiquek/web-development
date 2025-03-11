export const sortTasks = (tasks, preferences) => {
    switch(preferences) {
        case "high to low" :
            return [...tasks].sort((a, b) => a.priority - b.priority)
        case "low to high":
            return [...tasks].sort((a, b) => b.priority - a.priority)
        case "oldest to newest":
            return [...tasks].sort((a, b) => a.date.localeCompare(b.date))
        case "newest to oldest":
            return [...tasks].sort((a, b) => b.date.localeCompare(a.date))
        default: 
            return tasks;
    }
}