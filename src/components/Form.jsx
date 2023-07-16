import { useEffect, useState } from 'react'
import TodoList from './TodoList';

const Form = ({ setTasks, setTags }) => {

    const [title, setTitle] = useState({ priority: "low" });
    const [startDate, setStartDate] = useState(new Date());

    //console.log(task);

    const handleChange = (event) => {
        const inputName = event.target.name;
        setTitle(prev => {
            return {
                ...prev,
                [inputName]: event.target.value
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(title);
        setTasks(prev =>
            [
                ...prev,
                { ...title, id: Math.floor(Math.random() * 1000) },

            ]
        )

        setTags(prev => {
            // console.log(typeof title.tag == "string")
            //console.log(title.tag);
            if (!title.tag || [...prev].includes(title.tag)) {
                return [...prev]
            } else {
                return [
                    ...prev,
                    title.tag
                ]
            }

        })

    }

    return (
        <>
            <div className='block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-800 w-90'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <h2 className='text-blue-700 text-3xl font-semibold my-4 text-center'>TodoApp</h2>

                    <div className='flex flex-col ' >

                        <label className=' font-medium ' htmlFor="task">Insert todo:</label>
                        <input
                            className='h-8 rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm'
                            type="text"
                            name='task'
                            id='task'
                            value={title.tasks}
                            placeholder=""
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex gap-2 -72 font-medium ' >

                        <label htmlFor="priority">Priority:</label>

                        <select className='h-8  rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm'
                            name="priority"
                            value={title.priority}
                            onChange={handleChange}
                        >
                            <option value="low" >Low</option>
                            <option value="mediun" >Mediun</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>

                        <label htmlFor="dealine">Deadline:</label>
                        <input type="date" name='date' value={title.date || ''} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-medium' htmlFor="tag">Tag:</label>
                        <input className='h-8  rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' type="text" name='tag' value={title.tag || ''} onChange={handleChange} />
                    </div>

                    <input className='bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-offset-2 text-sm'
                        type="submit"
                        value="Create"
                    />

                </form>
            </div>


        </>
    )
}

export default Form