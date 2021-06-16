import React from 'react';

const CreateAccount = () => {
    return (
        <div className="signupForm">
                    <h1>Create Your Account</h1>
            <form>
                <label>Name</label>
                <input type="text" required />

                <label>Email</label>
                <input type="text" required />

                <label>Password</label>
                <input type="text" required />

                <label>Rewrite your password</label>
                <input type="text" required />    
            </form>
        </div>
    );
};

export default CreateAccount;