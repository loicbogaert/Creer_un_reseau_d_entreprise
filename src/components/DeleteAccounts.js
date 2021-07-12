import React,{useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const DeleteAccounts = () => {
    const history = useHistory();

    /**Error handler */
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    /*Delete data with Axios*/ 
    const url ="http://localhost:3005/api/auth/delete"
    const [data, setData] = useState({
        email : "",
        password : "",
    })

    function submit(e){
        e.preventDefault();
        Axios.delete(url,{
           data : {email : data.email,
            password : data.password}
        })
        .then(res=> {
            setSuccessMessage(res.data.message)
            setTimeout(() =>history.push("/"), 5000);
                /*Page change when submitting*/ 
        }).catch(error => {
            setErrorMessage(error.response.data.error)
        })
    }

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata)
    }
        /**Delete form*/
    return (
        <div className="deleteForm">
            <h1>Delete Your Account</h1>
            <form onSubmit= {(e)=>submit(e)}>
                <label>Email</label>
                <input onChange={(e)=>handle(e)} value={data.email} id="email" placeholder="Example@gmail.com" type="email" required />

                <label>Password</label>
                <input onChange={(e)=>handle(e)} value={data.password} id="password" placeholder="Password" type="password" required />

                <input type="submit" value="Submit" className="submit"/>
            </form>
            {errorMessage && (
                    <p className="error"><i className="fas fa-exclamation-triangle"></i> {errorMessage}</p>
                )}
            {successMessage && (
                    <p className="success">{successMessage}<br/> You will be redirected in 5 seconds</p>
                )}
        </div>
    );
};

export default DeleteAccounts;