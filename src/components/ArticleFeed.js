import Axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';


const ArticleFeed = () => {

    const url = "http://localhost:3005/api/article"
    const [datas, setDatas] = useState([]);

    /**Axios get request to db*/

    useEffect(() => {
        Axios.get(url)
        .then((res) => {
            setDatas(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    }, []);

    return (
        <Fragment>
             {/**Create new article for each article stored in db */}
            {datas.map((article) => (
                <Link to={'/forum/:' + article.id} key={article.id} id="articleContainer">
                {/**Article titles */}
                <div id="articleTitle">
                    <h3>{article.title}</h3>
                {/**Written by*/}
                    <p>Author : {article.userName}</p>
                {/**Date of publication */}
                    <p>Publish Date : {article.date}</p>
                </div>
                {/**Articles */}
                <div id="articleArticle">
                    <p id="articleText">{article.article}</p>
                </div>
            </Link>
        ))}
        </Fragment>
    );
};

export default ArticleFeed;
