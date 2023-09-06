import React, { useEffect, useRef, useState } from 'react'
import InputMessage from './OutputMessage'
import OutputMessage from './InputMessage'

const Message = ({ msg }) => {

    const messageContainerRef = useRef(null);
    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [msg]);
    return (
        <div className='m-2'>
            <div ref={messageContainerRef} className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-100 p-4 text-sm leading-6 text-slate-900 shadow-sm  sm:text-base sm:leading-7"
            >

                <div style={{ height: '90vh' }} className="flex w-full flex-col-reverse rounded-lg" >
                    {msg?.map((m) => (
                        <div className='flex flex-col'>
                            {m.input && <InputMessage messageText={m.input} />}
                            {m.output && <OutputMessage messageText={m.output} />}
                        </div>

                    ))}
                </div>
            </div>
        </div>

    )
}

export default Message