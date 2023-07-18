import Form from './components/Form'
import TagsMenu from './components/TagsMenu';
import TodoList from './components/TodoList'
import { useState } from 'react';


function App() {
    const [tasks, setTasks] = useState([]);
    const [tags, setTags] = useState(["all"])
    const [copytaks, setCopytaks] = useState([])
    //console.log(tags);


    //console.log(tasks);
    return (
        <div className='flex flex-col'>
            <div className='w-full flex flex-col gap-6 p-6 justify-center items-center  bg-slate-300 '>
                <div>
                    <Form setTasks={setTasks}
                        setTags={setTags}
                        setCopytaks={setCopytaks}
                    />
                </div>

                <div className='flex items-center gap-3 '>
                    {tags.map((element, i) => <TagsMenu element={element} key={i} />)}
                </div>

                <div >
                    <TodoList tasks={tasks} setTasks={setTasks} setTags={setTags} setCopytaks={setCopytaks} copytaks={copytaks} />
                </div>
            </div>


        </div>
    )
}

export default App
