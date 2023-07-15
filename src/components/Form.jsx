import { useEffect, useState } from 'react'
import TodoList from './TodoList';

const Form = ({ setTasks }) => {

    const [title, setTitle] = useState({});

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
        setTasks(prev => [
            ...prev,
            title
        ])

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className='containerLabel'>
                    <div>
                        <label htmlFor="task">Insert todo:</label>
                        <input
                            type="text"
                            name='task'
                            id='task'
                            value={title.tasks}
                            placeholder=""
                            onChange={handleChange}
                        />
                    </div>

                    < input type="submit" value="Create" />

                </div>
                <div className='inputGroup'>

                    <div>
                        <label htmlFor="priority">Priority:</label>

                        <select name="priority" value={title.priority} onChange={handleChange} >
                            <option value="low" >Low</option>
                            <option value="mediun" >Mediun</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="dealine">Deadline</label>
                        <input type="date" name='date' value={title.date || ''} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="tag">Tag:</label>
                        <input type="text" name='tag' value={title.tag || ''} onChange={handleChange} />
                    </div>

                </div>
            </form>



        </>
    )
}

export default Form