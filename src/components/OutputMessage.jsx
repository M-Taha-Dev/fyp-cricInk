import React from 'react';

const InputMessage = ({ messageText }) => {
  return (
    <div className="flex flex-row-reverse items-start">
      <img
        className="ml-2 h-8 w-8 rounded-full"
        src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
        alt="Sender"
      />
      <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 sm:min-h-0 sm:max-w-md md:max-w-2xl">
        <p>{messageText}</p>
      </div>
      {/* Buttons can be added here if needed */}
    </div>
  );
};

export default InputMessage;
