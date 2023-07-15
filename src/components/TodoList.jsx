import ToDo from "./ToDo";


const TodoList = ({ tasks }) => {

    // console.log(tasks);

    // if (tasks.length === 0) {
    //     return <h1>No hay tareas</h1>
    // }

    return (
        <div >
            {
                tasks.map((element, i) => (
                    <ToDo element={element} key={i} />
                ))
            }

        </div>
    )
}

export default TodoList