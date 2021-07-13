import Axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router';
import ArticleComments from '../components/ArticleComments';
import Popup from '../components/Popup';

const SingleArticle = () => {

    /** Error useState */
    const [errorMessage, setErrorMessage] = useState('');

    const url = "http://localhost:3005/api/article/:id"
    const [datas, setDatas] = useState({
        id : ""
    });
    const param = useParams();
    const id = param.id;

    /**Axios post request to db for ARTICLES*/
    useEffect(() => {
        Axios.post(url,{
            id : id
        })
        .then((res) => {
            console.log(res.data);
            setDatas(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    }, []);

    const article = datas;
    const config = {
        headers : { Authorization : `Bearer ${localStorage.getItem("token")}`}
    }

    /**Popup useState */
    const [buttonPopup, setButtonPopup] = useState(false);

    const [data, setData] = useState({
        title : "",
        article : "",
        userName : ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.put(url,{
            title : data.title,
            article : data.article,
            userName : localStorage.getItem("loggedIn"),
            id : id,
            userId : datas.userId
        },config)
        .then(res=> {
            console.log(res)
            window.location.reload(true)
        }).catch(error => {
            if (error.response.data.message) {
                setErrorMessage(error.response.data.message)
            }
            else if(error.response.data.error.errors[0].message) {
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
        newdata[e.target.name] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }


    return (
         <Fragment>
            {/**Create new article for each article stored in db */}
            <div key={article.id} id="singleContainer">
                {/**Article infos */}
                <div id="singleContainer__infos">
                    <p>Author : {article.userName}</p>
                    <p>Publish Date : {article.date}</p>
                </div>
                {/** Popup */}
                <button id="singleContainer__openPopup" onClick={() => setButtonPopup(true)}>Modify Your Article</button>

                <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>       
                    <form onSubmit={(e)=>submit(e)} id="singleContainer__articleForm">
                    <label id="singleContainer__label">
                        <textarea onChange={(e)=>handle(e)} defaultValue={article.title} type="text" id="singleContainer__titlePop" name="title" minLength="1" autoCapitalize="sentences"/>
                    </label>
                    <p className="error2">{errorMessage}</p>
                    <label id="singleContainer__label">
                        <textarea onChange={(e)=>handle(e)} defaultValue={article.article} type="text" id="singleContainer__articlePop" name="article" autoCapitalize="sentences" minLength="1"/>
                    </label>
                    <input type="submit" value="Send Your Article" id="singleContainer__articleSubmit"/>
                    </form>     
                </Popup>
                {/**Article*/}
                <h3 id="singleContainer__title">{article.title}</h3>
                <div id="singleContainer__article">
                    <p id="articleText">{article.article}</p>
                </div>
                {/**Comments section*/}
                <div id="singleContainer__borderSection"></div>
                <h3 id="singleContainer__comments">Comment Section</h3>
                <ArticleComments></ArticleComments>
                <div id="singleContainer__messages">
                </div>
            </div>
        </Fragment>
    );
};

export default SingleArticle;