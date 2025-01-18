import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
const AddTodo = () => {

    const[input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
                <input
                    type='text'
                    className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white px-3 py-1'
                    placeholder='Enter a Todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type='submit'
                    className='text-white bg-blue-500 px-3 py-1 rounded hover:bg-green-600 color-blue-500'
                > Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
