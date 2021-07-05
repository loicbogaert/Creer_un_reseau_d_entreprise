import Axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';

const SingleArticle = () => {

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
                <div key={article.id} id="singleContainer">
                {/**Article titles */}
                <div id="singleContainer__infos">
                {/**Written by*/}
                    <p>Author : {article.userName}</p>
                {/**Date of publication */}
                    <p>Publish Date : {article.date}</p>
                </div>
                <h3 id="singleContainer__title">{article.title}</h3>
                {/**Articles */}
                <div id="singleContainer__article">
                    <p id="articleText">{article.article}</p>
                </div>
                
                <h3 id="singleContainer__comments">Comments</h3>

                <textarea id="singleContainer__leaveMsg" placeholder="Leave a message"></textarea>
                
                <div id="singleContainer__messages">

                </div>
            </div>
        ))}
        </Fragment>
    );
};

export default SingleArticle;