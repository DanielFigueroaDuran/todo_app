import TagsMenu from "./TagsMenu";
import ToDo from "./ToDo";


const TodoList = ({ tasks, setTasks }) => {

    //console.log(tasks);

    // if (tasks.length === 0) {
    //     return <h1>No hay tareas</h1>
    // }

    return (
        <>
            <div className="flex gap-5 flex-wrap">
                {
                    tasks.map((element, i) => (
                        <ToDo element={element} key={i} setTasks={setTasks} />
                    ))
                }
            </div>
        </>
    )
}

export default TodoList