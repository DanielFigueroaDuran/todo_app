import Form from './components/Form'
import TagsMenu from './components/TagsMenu';
import TodoList from './components/TodoList'
import { useState } from 'react';


function App() {
    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState(["#all"])
    //console.log(tags);


    //console.log(tasks);
    return (
        <div className='flex flex-col'>
            <div className=' flex flex-col gap-6 p-6 justify-center items-center  bg-slate-200 '>
                <div>
                    <Form setTasks={setTasks}
                        setTags={setTags} />
                </div>

                <div className='flex items-center gap-3 '>
                    {tags.map((element, i) => <TagsMenu element={element} key={i} />)}
                </div>

                <div >
                    <TodoList tasks={tasks} setTasks={setTasks} />
                </div>
            </div>


        </div>
    )
}

export default App
