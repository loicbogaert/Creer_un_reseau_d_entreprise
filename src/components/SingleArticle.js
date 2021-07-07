import Axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router';
import ArticleComments from './ArticleComments';

const SingleArticle = () => {

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

    return (
         <Fragment>
             {/**Create new article for each article stored in db */}
            <div key={article.id} id="singleContainer">
                {/**Article infos */}
                <div id="singleContainer__infos">
                    <p>Author : {article.userName}</p>
                    <p>Publish Date : {article.date}</p>
                </div>
                <h3 id="singleContainer__title">{article.title}</h3>
                {/**Articles */}
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