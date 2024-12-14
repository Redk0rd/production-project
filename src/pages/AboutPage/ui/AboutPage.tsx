import React, { useReducer, useState } from 'react';


interface Task {
	id: number;
	text: string;
	completed: boolean;
  }
  
  type Action =
	| { type: 'add'; payload: string }
	| { type: 'toggle'; payload: number }
	| { type: 'delete'; payload: number }
	| { type: 'clear' };
  
  // Начальное состояние
  const initialState: Task[] = [];


  function taskReducer(state: Task[], action: Action): Task[] {
	switch (action.type) {
	  case 'add':
		return [
		  ...state,
		  { id: Date.now(), text: action.payload, completed: false },
		];
	  case 'toggle':
		return state.map((task) =>
		  task.id === action.payload
			? { ...task, completed: !task.completed }
			: task
		);
	  case 'delete':
		return state.filter((task) => task.id !== action.payload);
	  case 'clear':
		return [];
	  default:
		throw new Error('Unknown action type');
	}
  }

export default function AboutPage() {
	const [tasks, dispatch] = useReducer(taskReducer, initialState);
	const [newTask, setNewTask] = useState('');
  
	// Обработчик добавления задачи
	const handleAddTask = () => {
	  if (newTask.trim()) {
		dispatch({ type: 'add', payload: newTask });
		setNewTask('');
	  }
	};
  
	return (
	  <div style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
		<h2>Task Manager</h2>
		<input
		  type="text"
		  value={newTask}
		  onChange={(e) => setNewTask(e.target.value)}
		  placeholder="Enter a new task"
		/>
		<button onClick={handleAddTask}>Add Task</button>
		<ul>
		  {tasks.map((task) => (
			<li key={task.id}>
			  <span
				style={{
				  textDecoration: task.completed ? 'line-through' : 'none',
				  cursor: 'pointer',
				}}
				onClick={() => dispatch({ type: 'toggle', payload: task.id })}
			  >
				{task.text}
			  </span>
			  <button
				onClick={() => dispatch({ type: 'delete', payload: task.id })}
				style={{ marginLeft: '10px' }}
			  >
				Delete
			  </button>
			</li>
		  ))}
		</ul>
		{tasks.length > 0 && (
		  <button onClick={() => dispatch({ type: 'clear' })}>
			Clear All Tasks
		  </button>
		)}
	  </div>
	);
}
