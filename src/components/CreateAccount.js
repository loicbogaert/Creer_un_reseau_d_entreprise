import React,{useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
/*Send data to server with Axios*/ 

const CreateAccount = () => {
    const history = useHistory();

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
        });
    }

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }




    /**Signup Form */

    return (
        <div className="signupForm">
                    <h1>Create Your Account</h1>
            <form onSubmit= {(e)=>submit(e)}>
                <label>Name</label>
                <input onChange={(e)=>handle(e)} value={data.name} id="name" placeholder="Bob Ross" type="text" required />

                <label>Email</label>
                <input onChange={(e)=>handle(e)} value={data.email} id="email" placeholder="Example@gmail.com" type="email" required />

                <label>Password</label>
                <input onChange={(e)=>handle(e)} value={data.password} id="password" placeholder="Password" type="password" required />

                <label>Rewrite your password</label>
                <input onChange={(e)=>handle(e)} value={data.passwordCheck} id="passwordCheck" placeholder="Password" type="password" required />

                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
    );
};


export default CreateAccount;