import Axios from 'axios';
import React, {useState, Fragment, useEffect} from 'react';
import { useParams } from 'react-router';

const ArticleComments = () => {

    const param = useParams();
    const id = param.id;
    const url2 = "http://localhost:3005/api/comments/:id"
    const url = "http://localhost:3005/api/comments"
    const [comments, setComments] = useState({
        id : "",
        comment : "",
        userName : ""
    });

    const [commentFeed, setCommentFeed] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    /**Axios post request to db RECEIVE COMMENTS*/

    useEffect(() => {
        Axios.post(url,{
            id : id
        })
        .then((res) => {
            setCommentFeed((res.data));
        })
        .catch((error) =>{
            console.log(error)
        })
    }, []);

    /**Axios post request to db to SEND COMMENTS*/

    function submit(e){
        e.preventDefault();
            Axios.post(url2,{
                id : id,
                comment : comments.comment,
                userName : localStorage.getItem("loggedIn")
            })
            .then((res) => {
                window.location.reload(false);
            })
            .catch((error) =>{
                setErrorMessage(error.response.data.error.errors[0].message)
            })
    }

    function handle(e){
        const newdata={...comments};
        newdata[e.target.id] = e.target.value;
        setComments(newdata);
        console.log(newdata)
    }

    return (
        <Fragment>
            {errorMessage && (
                <p className="error"><i className="fas fa-exclamation-triangle"></i> {errorMessage} </p>
            )}
            <form id="msgForm" onSubmit={(e)=>submit(e)}>
                <textarea onChange={(e)=>handle(e)} value={comments.comment} id="comment" placeholder="Leave a message" autoCapitalize="sentences" minLength="1"></textarea>
                <input type="submit" value="Send Message" id="submit"/>
            </form>
            {commentFeed.map(allComments =>(
                <div id="allComments" key={allComments.id}>
                    <div id="allComments__infos">
                        <p id="allComments__user">User : {allComments.userName}</p>
                        <p id="allComments__date">Publication Date : {allComments.date}</p>
                    </div>

                    <p id="allComments__comment">{allComments.comment}</p>
                </div>
            ))}
       </Fragment>
    );
};


export default ArticleComments;