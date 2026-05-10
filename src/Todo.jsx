const Todo = ({task, isDone}) => {
    // -----------Conditional rendering option 1: ---------------

    // if(isDone === true)
    //     return <li>Finished : {task}</li>
    // else
    //     return <li>Work on : {task}</li>



    //------------Conditional rendering option 2: ----------------
    // if(isDone)
    //     return <li>Finished : {task}</li>
    
    // return <li>Work on : {task}</li>



    //------------Conditional rendering option 3: using ternary ----------------
    
    // return <li>{isDone ? 'Finished ' : 'Work on '} : {task}</li>



    // -----------Conditional rendering option 4: true hole output hobe, nahoy hobena ---------------

    // return <li>{task} {isDone && ' : Done '}</li>



    // -----------Conditional rendering option 5: false hole output hobe, nahoy hobena ---------------

    return <li>{task} {isDone || ' : Do it '}</li>
    
    
};

export default Todo;
