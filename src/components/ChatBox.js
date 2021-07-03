import React from 'react';
import Popup from './Popup';
import { useState } from 'react';
import Axios from 'axios';

const ChatBox = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const url = "http://localhost:3005/api/article"
    const [data, setData] = useState({
        title : "",
        article : ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            title : data.title,
            article : data.article
        })
        .then(res=> {
            console.log(res)
        });
    }

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    return (
        <div className="chatbox">
            {/**  Button tringering popup for writting articles */}
            <button id="openPopup" onClick={() => setButtonPopup(true)}>Write An article</button>

                {/**Popup Form to write an article */}
                <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>       
                    <form onSubmit={(e)=>submit(e)} id="articleForm">
                    <label>
                        Article Title
                        <input onChange={(e)=>handle(e)} value={data.title} placeholder="Your article title" type="text" id="title" name="title"/>
                    </label>

                    <label>
                        Main Text of Your article
                        <textarea onChange={(e)=>handle(e)} value={data.article} placeholder="Write your new article over here :)" type="text" id="article" name="article"/>
                    </label>

                    <input type="submit" value="Send Your Article" id="articleSubmit"/>
                    </form>     
                </Popup>
                {/**White Box*/}
            <div id="messagesDisplay">
                {/** Feed with all articles */}
                <div id="feedContainer">

                </div>
            </div>
        </div>
    );
};

export default ChatBox;