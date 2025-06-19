import{ useState } from 'react';
import Task from './components/Task';

export default function App(){
  const[tasks, setTasks] = usestate([
    {id: 1, title:"Write Lesson Plan", completed: false},
    {id: 2, title:"Review MongoDb Quiz", complete: true}
  ]);
  const toggleTask = id => {
    setTasks(curr => curr.map (t => t.id === id ? {...t, completed: !t.completed } : t));
  };

  return(
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Task Dashboard</h1>
      {tasks.map(tasks =>(
        <Task key= {tasks.id} {...task} onToggle={toggleTask}/>
      ))}
    </div>
  )
}