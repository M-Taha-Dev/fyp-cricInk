import React, { useEffect, useRef, useState } from 'react'
import InputMessage from './InputMessage'
import OutputMessage from './OutputMessage'

const Message = ({ msg, player_name, article_type }) => {

    const messageContainerRef = useRef(null);
    useEffect(() => {
        if (messageContainerRef.current) {
        }
    }, [msg]);
    return (
        <div className='my-4 m-2 h-full'>
            <div style={{height: '530px'}}  className="flex-1 space-y-6 rounded-xl  p-4 text-sm leading-6 text-slate-900 shadow-sm  sm:text-base sm:leading-7"
            >
                <div style={{ height: '100%' }} className="flex w-full flex-col-reverse rounded-lg overflow-y-scroll" >
                    {msg?.map((m) => (
                        <div className='flex flex-col '>
                            {m.input && <InputMessage messageText={m.input} />}
                            {m.output && <OutputMessage player_name={player_name} article_type={article_type}/>}
                        </div>

                    ))}
                </div>
            </div>
        </div>

    )
}

export default Message