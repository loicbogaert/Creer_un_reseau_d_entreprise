import React, {useState} from 'react';
import Axios from 'axios';


const LoginForm = () => {

    const url ="http://localhost:3005/api/auth/login"
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            email : data.email,
            password : data.password,
        })
        .then(res=> {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return (
        <div className="signupForm">
            <h1>Connection</h1>
            <div className="signupForm">
            <form onSubmit={(e)=> submit(e)}>

                <label>Email</label>
                <input onChange={(e)=>handle(e)} value={data.email} id="email" placeholder="Example@gmail.com" type="email" required />

                <label>Password</label>
                <input onChange={(e)=>handle(e)} value={data.password} id="password" placeholder="Password" type="password" required />

                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>  
    </div>
    );
};

export default LoginForm;