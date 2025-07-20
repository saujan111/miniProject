
const Message = () =>{
    return (
        <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500  pb-2`}>Hello mah messi</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>5:55</div>

      </div>
    )
}

export default Message;