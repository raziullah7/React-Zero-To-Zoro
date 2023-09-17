export const Task = (props) => {
    return (<div>
        <h1 style={{display: 'inline-block', backgroundColor: props.task.completion? "lightgreen" : "white" }}>{props.task.taskName}</h1>

        <button style={ {fontSize: 24, marginLeft: 16} } onClick={() => props.completeTask(props.task.id)}> Completed </button>
        
        {/** <button style={ {fontSize: 24, marginLeft: 16} } onClick={() => props.completeTask()}>
            Completed </button> */}
            
        <button style={ {fontSize: 24, marginLeft: 16} } onClick={() => props.deleteTask(props.task.id)}>
            X </button>
    </div>
    );
}