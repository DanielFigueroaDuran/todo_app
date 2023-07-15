

const ToDo = ({ element }) => {
    //console.log(element);
    return (
        <div className="card" >
            <h1>{element.task}</h1>
            <h3># {element.tag}</h3>
            <p>Priority: {element.priority}</p>
            <p>Finish date: {element.date}</p>

            <div className="btnGroup">
                <button>Delete</button>
                <button>Done</button>
            </div>
        </div>
    )
}

export default ToDo