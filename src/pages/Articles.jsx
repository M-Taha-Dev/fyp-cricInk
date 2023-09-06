import React, { useEffect, useRef, useState } from 'react'
import Message from '../components/Message'
import InputBar from '../components/InputBar'

const Articles = () => {
    const newMessage = { input: 'how are you?', output: 'I am fine' };

    const [msg, setMsg] = useState([{}]);
    const messageContainerRef = useRef(null);
    useEffect(() => {
        if (messageContainerRef.current) {
          messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
      }, [msg]);

    const addMessage = (input) => {
        // perform some action on input, get your output ready
        const output = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea at eligendi molestias esse placeat voluptate illum, sint alias beatae id eaque accusamus nobis architecto debitis. Numquam incidunt ex unde!'
        const message = {input: input, output: output}
        setMsg([message,...msg])
    }
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className='h-8 text-xl font-bold font-sans flex justify-center items-center'>Article Generation</div>
        <div  ref={messageContainerRef} className='h-5/6 w-full overflow-y-auto rounded-lg'><Message  msg={msg}/></div>
        <div >
            <InputBar addMessage={addMessage}/>
        </div>

                
    </div>
  )
}

export default Articles