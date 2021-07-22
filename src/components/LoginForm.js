import React, {useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {
    const history = useHistory();

    /**Error useState*/
    const [errorMessage, setErrorMessage] = useState('');

    /**variables */
    const url ="http://localhost:3005/api/auth/login"
    const [data, setData] = useState({
        email : "",
        password : "",
        errorMessage: ""
    })

    /**Sending data to server with Axios */
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            email : data.email,
            password : data.password,
        })
        .then(res=> {
            /**Response saved in localStorage */
            const userName = res.data.userName;
            const token  = res.data.token;
            localStorage.setItem("loggedIn",userName);
            localStorage.setItem("token",token);
            /**Changing page when submitting */
            history.push("/");
        })
        .catch(error => { 
            setErrorMessage(error.response.data.error);
         })
    }

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    return (
        <div className="signupForm">
            <h1>Connection</h1>
            <div className="signupForm">
            <form onSubmit= {(e)=>submit(e)}>

                <label>Email</label>
                <input onChange={(e)=>handle(e)} value={data.email} id="email" className="inputText" placeholder="Example@gmail.com" type="email" required />

                <label>Password</label>
                <input onChange={(e)=>handle(e)} value={data.password} id="password" className="inputText" placeholder="Password" type="password" required />

                <input type="submit" value="Log in" className="submit"/>
            </form>
            {errorMessage && (
                    <p className="error"><i class="fas fa-exclamation-triangle"></i> {errorMessage} </p>
                )}
        </div>  
    </div>
    );
};

export default LoginForm;