import Axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';


const ArticleFeed = () => {

    /**variables */
    const url = "http://localhost:3005/api/article"
    const [datas, setDatas] = useState([]);

    /**Axios get request to get data*/

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
                <Link to={'/forum/' + article.id} key={article.id} id="linkContainer">
                    <div id="articleContainer">
                        <div id="articleTitle">
                            <h3>{article.title}</h3>
                            <p>Author : {article.userName}</p>
                            <p>Publish Date : {article.date}</p>
                        </div>
                        <div id="articleArticle">
                            <p id="articleText">{article.article}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </Fragment>
    );
};

export default ArticleFeed;
