import React, { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('');
  const [details,setDetails] = useState('');
  const [task,setTask] = useState([]);

  function submitHandler(e){
    e.preventDefault();

    const copy = [...task];
    copy.push({title,details})
    
    
    setTask(copy)
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx)=>{
    const copy = [...task];
    copy.splice(idx,1);
    setTask(copy)

  }
  return (
    <div className='bg-black lg:flex text-white min-h-screen overflow-hidden'>
      <form onSubmit={(e)=>submitHandler(e)}
      className='flex flex-col p-10 lg:w-500 gap-5 items-start'>
        <h1 className='font-bold text-4xl'>Add Notes</h1>

          <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full border-2 font-medium outline-none rounded'
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}/>

        <textarea
          type='text'
          placeholder='Write Details'
          className='px-5 py-2 w-full border-2 font-medium outline-none h-32 rounded'
          value={details}
          onChange={(e)=>{setDetails(e.target.value)}}
        />  
        <button 
        className='bg-white w-full outline-none text-black px-5 py-2 rounded active:scale-97 cursor-pointer'
        >
          Add Notes</button>
      </form>
      <div className='lg:border-l-2 lg:w-500 p-10'>
      <h1 className='font-bold text-4xl'>Recent Notes</h1>
      <div className='flex flex-wrap gap-12 mt-6 overflow-auto '>
        {task.map(function(ele,idx){
          return <div key={idx} className="rounded-2xl bg-paper">
            <div className='  justify-between h-70 w-60 py-7  px-5 items-start'>
              <h3 className='leading-snug text-l font-bold wrap-break-words text-black'>{ele.title}</h3>
              <p className='leading-tight wrap-break-word text-gray-700'>{ele.details}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={()=>{
                deleteNote(idx)
              }} className="bg-red-400 text-white text-lg px-3 py-0.2 rounded mb-9 active:scale-96 cursor-pointer" >
                 <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>;
        })}
      </div>
      </div>
    </div>
  )
}

export default App
