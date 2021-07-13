import React from 'react';
import Popup from './Popup';
import { useState } from 'react';
import Axios from 'axios';
import ArticleFeed from './ArticleFeed';

const ChatBox = () => {

    /** Error useState */
    const [errorMessage, setErrorMessage] = useState('');

    /**Popup useState */
    const [buttonPopup, setButtonPopup] = useState(false);

    const url = "http://localhost:3005/api/article"
    const [data, setData] = useState({
        title : "",
        article : "",
        userName : "",
        token : ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            title : data.title,
            article : data.article,
            userName : localStorage.getItem("loggedIn"),
            token : localStorage.getItem("token")
        })
        .then(res=> {
            console.log(res)
            window.location.reload(true)
        }).catch(error => {
            if(error.response.data.error.errors) {
                setErrorMessage(error.response.data.error.errors[0].message)
            }
            else if (error.response.data.error.parent.errno === 1406) {
                setErrorMessage("250 characters maximum authorized for a title")
            }
            else {
                setErrorMessage(error.response.statusText)
            }
        })
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
                    <input onChange={(e)=>handle(e)} value={data.title} placeholder="Your article title" type="text" id="title" name="title" minLength="1" autoCapitalize="sentences"/>
                </label>
                <p className="error2">{errorMessage}</p>
                <label>
                    Main Text of Your article
                    <textarea onChange={(e)=>handle(e)} value={data.article} placeholder="Write your new article over here :)" type="text" id="article" name="article" autoCapitalize="sentences" minLength="1"/>
                </label>
                <input type="submit" value="Send Your Article" id="articleSubmit"/>
                </form>     
            </Popup>
            {/**White Box*/}
            <div id="messagesDisplay">
                {/** Feed with all articles */}
                <div id="feedContainer">
                    <ArticleFeed/>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;