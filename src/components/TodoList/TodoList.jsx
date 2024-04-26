import { Checkbox } from 'antd'
import { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

function TodoList() {
	const [todos, setTodos] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [editIndex, setEditIndex] = useState(null)

	useEffect(() => {
		const storedTodos = localStorage.getItem('todos')
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const addTodo = e => {
		e.preventDefault()

		if (inputValue.trim() !== '') {
			if (editIndex !== null) {
				// Eğer editIndex varsa, mevcut todo'yu güncelle
				const updatedTodos = [...todos]
				updatedTodos[editIndex].text = inputValue
				setTodos(updatedTodos)
				setEditIndex(null)
			} else {
				// Yeni todo ekle
				setTodos([
					...todos,
					{ id: Date.now(), text: inputValue, completed: false },
				])
			}
			setInputValue('')
		}
	}

	const toggleTodo = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	const removeTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const editTodo = index => {
		setInputValue(todos[index].text)
		setEditIndex(index)
	}

	return (
		<div className='w-full mt-[20px]'>
			<div className='flex items-center justify-between '>
				<div className='text-[22px] text-slate-600 font-bold'>To Do List</div>
			</div>
			<form
				onSubmit={addTodo}
				className='flex items-center justify-between mb-[20px]'
			>
				<input
					type='text'
					className='w-[75%] py-[10px] outline-none'
					placeholder='Enter a new todo'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button onClick={addTodo} className='text-[#FBAB7E]'>
					Add Todo +
				</button>
			</form>
			<ul className='flex flex-col gap-[10px]'>
				{todos.map((todo, index) => (
					<li
						key={todo.id}
						className='flex justify-between items-center p-[20px] rounded-[10px] border border-slate-300'
					>
						<div className='flex gap-[15px]'>
							<Checkbox
								type='checkbox'
								checked={todo.completed}
								onChange={() => toggleTodo(todo.id)}
							></Checkbox>
							<span
								style={{
									textDecoration: todo.completed ? 'line-through' : 'none',
								}}
								className='text-slate-500 text-[18px] font-bold'
							>
								{todo.text.slice(0, 30)}
							</span>
						</div>
						<div className='flex items-center gap-[10px]'>
							{index === editIndex ? null : (
								<button onClick={() => editTodo(index)}>
									<CiEdit className='text-slate-500 text-[22px]' />
								</button>
							)}
							<button type='submit' onClick={() => removeTodo(todo.id)}>
								<MdDeleteOutline className='text-red-500 text-[22px]' />
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
export default TodoList
