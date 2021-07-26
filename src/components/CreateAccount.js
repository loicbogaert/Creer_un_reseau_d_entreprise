import React,{useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';



const CreateAccount = () => {
    const history = useHistory();

    /**Error handler */
    const [errorMessage, setErrorMessage] = useState('');

    /*Send data to server with Axios*/ 
    const url ="http://localhost:3005/api/auth/signup"
    const [data, setData] = useState({
        name : "",
        email : "",
        password : "",
        passwordCheck : ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name : data.name,
            email : data.email,
            password : data.password,
            passwordCheck : data.passwordCheck
        })
        .then(res=> {
                /*Page change when submitting*/ 
            history.push("/login");
        }).catch(error => {
            if (error.response.statusText === "Sequelize Error"){
                setErrorMessage(error.response.data.error.errors[0].message)
            }
            else {
                setErrorMessage(error.response.statusText)
            }
            console.log(error.response)
        })
    }

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata)
    }




    /**Signup Form */

    return (
        <div className="signupForm">
                    <h1>Create Your Account</h1>
            <form onSubmit= {(e)=>submit(e)}>
                <label>Name</label>
                <input onChange={(e)=>handle(e)} value={data.name} id="name" className="inputText" placeholder="Bob Ross" type="text" required />

                <label>Email</label>
                <input onChange={(e)=>handle(e)} value={data.email} id="email" className="inputText" placeholder="Example@gmail.com" type="email" required />

                <label>Password</label>
                <p id="mustPass">(Must contain 8 characters, an uppercase and a number)</p>
                <input onChange={(e)=>handle(e)} value={data.password} id="password" className="inputText" placeholder="Password" type="password" required />

                <label>Rewrite your password</label>
                <input onChange={(e)=>handle(e)} value={data.passwordCheck} id="passwordCheck" className="inputText" placeholder="Password" type="password" required />

                <input type="submit" value="Create Account" className="submit"/>
            </form>
            {errorMessage && (
                    <p className="error"><i className="fas fa-exclamation-triangle"></i> {errorMessage} </p>
                )}
        </div>
    );
};


export default CreateAccount;