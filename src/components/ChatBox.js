import React from 'react';

const ChatBox = () => {
    return (
        <div className="chatbox">

            <div className="messagesDisplay"></div>

            <form name="message" action="submit" className="sendbox">
                <input name="usermsg" type="text" className="usermsg" placeholder="Your message"></input>
                <input name="submitmsg" type="submit" className="submitmsg" value="Send"></input>
            </form>
        </div>
    );
};

export default ChatBox;