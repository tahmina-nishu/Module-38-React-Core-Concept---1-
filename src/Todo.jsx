const Todo = ({task, isDone}) => {
    // Conditional rendering option 1:

    if(isDone === true)
        return <li>Finished : {task}</li>
    else
        return <li>Work on : {task}</li>
};

export default Todo;
