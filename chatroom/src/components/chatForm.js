import React from 'react';

const ChatForm = () => {
    return (
        <div>
            <form>
                <input 
                    className="text-input"
                    type="text"
                    name="text"
                />
                <button>send</button>
                <button>delete</button>
            </form>
        </div>
    )
}

export default ChatForm;