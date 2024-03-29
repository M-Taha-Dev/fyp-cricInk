import React, { useState } from 'react'

const InputBar = ({addMessage}) => {
    const [message, setMessage] = useState('')
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevents a new line in the textarea
          document.getElementById('enter-button').click(); // Programmatically click the "Send" button
        }
      };
  return (
    <div>
    <form className="m-2">
    <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
    <div className="relative">
      <button
        type="button"
        className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-blue-500 "
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"
          ></path>
          <path d="M5 10a7 7 0 0 0 14 0"></path>
          <path d="M8 21l8 0"></path>
          <path d="M12 17l0 4"></path>
        </svg>
        <span className="sr-only">Use voice input</span>
      </button>
      <textarea
        onKeyPress={handleKeyPress}
        id="chat-input"
        className="block w-full resize-none rounded-xl border-none bg-slate-50 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base"
        placeholder="Enter your prompt"
        rows="1"
        value={message}
        onChange={(e) => {setMessage(e.target.value)}}
        required
      ></textarea>
      <button
        id='enter-button'
        type="submit"
        onClick={(e) => {
            e.preventDefault()
            addMessage(message)
            setMessage('')
        }}
        
        className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  sm:text-base"
      >
        Send <span className="sr-only">Send message</span>
      </button>
    </div>
  </form>
    </div>
  )
}

export default InputBar