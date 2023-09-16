export const Task = (props) => {
    return (<div>
        <h1 style={{display: 'inline-block'}}>{props.taskName}</h1>
        <button style={ {fontSize: 24, marginLeft: 16} } onClick={() => props.deleteTask(props.id)}>
            X </button>
    </div>
    );
}