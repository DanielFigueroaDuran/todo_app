import Form from './components/Form'
import TodoList from './components/TodoList'
import { useState } from 'react';


function App() {
    const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     setTasks()
    // }, [])



    // console.log(tasks);
    return (
        <>
            <div className='container'>
                <div className="containerForm">
                    <Form setTasks={setTasks} />

                </div>
                <div className='containerCard'>
                    <TodoList tasks={tasks} />
                </div>
            </div>

        </>
    )
}

export default App
