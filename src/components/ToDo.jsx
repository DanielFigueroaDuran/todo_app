import { useState } from "react";

const ToDo = ({ element, setTasks }) => {
    const [done, setDone] = useState(true);

    // console.log(done);
    const handleDelete = (event) => {
        event.preventDefault();
        setTasks(prev => prev.filter(task => task.id !== element.id))

    }

    const handeleDone = (event) => {
        setDone(prev => !prev)
    }

    return (
        <div className={`border rounded p-5 
        ${element.priority == "low"
                ? "bg-slate-500"
                : element.priority == "mediun"
                    ? "bg-slate-300"
                    : "bg-green-200"
            }`} >

            <h1 className={`${done ? null : 'italic line-through'} `}>{element.task}</h1>
            <h3 className={`${done ? null : 'italic line-through'} `}># {element.tag}</h3>
            <p className={`${done ? null : 'italic line-through'} `}>Priority: {element.priority}</p>
            <p className={`${done ? null : 'italic line-through'} `} >Finish date: {element.date}</p>
            {/* <p>id: {element.id}</p> */}

            <div className="flex gap-2">
                <button className='bg-red-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-red-600 hover:outline-offset-2 text-sm' onClick={handleDelete}>Delete</button>
                <button className='bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-offset-2 text-sm' onClick={handeleDone}>Done</button>
            </div>
        </div >
    )
}

export default ToDo