import axios from 'axios';
import Axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router';
import ArticleComments from '../components/ArticleComments';
import Popup from '../components/Popup';
import { useHistory } from 'react-router';

const SingleArticle = () => {

    /** Error useState */
    const [errorMessage, setErrorMessage] = useState('');

    /**variables */
    const history = useHistory();
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
            setDatas(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    }, []);

    /**variables */
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

    /**data to modify articles with axios + error messages set */
    function submit(e) {
        e.preventDefault();
        Axios.put(url,{
            title : data.title,
            article : data.article,
            userName : localStorage.getItem("loggedIn"),
            id : id,
            userId : datas.userId,
            articleId : data.id
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


    /**Delete axios call */
    function deleteThisArticle() {
        Axios.delete(url,{
            data: {
                id : id,
                token : localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log(res)
            history.push("/forum")
        })
    }

    /**Function showing buttons (to modify or delete an article) */

    function modifyButton() {
        if(localStorage.getItem("loggedIn")  === article.userName || localStorage.getItem("loggedIn")  === "Moderator") {
            return <button id="singleContainer__openPopup" onClick={() => setButtonPopup(true)}>Modify Your Article</button>
        }
    }

    function deleteArticle() {
        if(localStorage.getItem("loggedIn") === "Moderator"){
            return <button id="singleContainer__articleDelete" onClick={() => deleteThisArticle()}>Delete This Article</button>
        }
    }

    return (
         <Fragment>
            {/**Create new article for each article stored in db */}
            <div key={article.id} id="singleContainer">
                {modifyButton()}
                {deleteArticle()}
                {/**Article infos */}
                <div id="singleContainer__borderSection1"></div>
                <div id="singleContainer__infos">
                    <p>Author :<br/> {article.userName}</p>
                    <p>Publish Date :<br/>{article.date}</p>
                </div>

                {/** Popup */}
                <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>       
                    <form onSubmit={(e)=>submit(e)} id="singleContainer__articleForm">
                    <label id="singleContainer__labelTitle">
                        Article Title
                        <textarea onChange={(e)=>handle(e)} defaultValue={article.title} type="text" id="singleContainer__titlePop" name="title" minLength="1" autoCapitalize="sentences"/>
                    </label>
                    <p className="error2">{errorMessage}</p>
                    <label id="singleContainer__labelArticle">
                        Main text of your article
                        <textarea onChange={(e)=>handle(e)} defaultValue={article.article} type="text" id="singleContainer__articlePop" name="article" autoCapitalize="sentences" minLength="1"/>
                    </label>
                    <input type="submit" value="Modify Your Article" id="singleContainer__articleSubmit"/>
                    </form>     
                </Popup>

                {/**Article*/}
                <div id="singleContainer__article">
                    <h3 id="singleContainer__title">{article.title}</h3>
                    <p id="articleText">{article.article}</p>
                </div>
                {/**Comments section*/}
                <div id="singleContainer__borderSection2">
                </div>
                <h3 id="singleContainer__comments">Comment Section</h3>
                <ArticleComments></ArticleComments>
                <div id="singleContainer__messages">
                </div>
            </div>
        </Fragment>
    );
};

export default SingleArticle;