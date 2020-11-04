import React from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from "react-facebook-login"
import axios from "axios"

export const Demo = () => {

    const responseFaceBook = (response) => {
        const obj = {
            email: response.email,
            name: response.name
        }
        axios.post(`http://localhost:5000/adduserdetails`, obj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const responseGoogle = (response) => {
        const obj = {
            email: response.profileObj.email,
            name: response.profileObj.name
        }
        axios.post(`http://localhost:5000/adduserdetails`, obj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <GoogleLogin
                clientId="25593677194-7vebfmo92m96cc9pg0rcjhgdjm5aq04p.apps.googleusercontent.com"
                buttonText="sign with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="border-0"
            />
            <FacebookLogin
                appId="377334713463686"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFaceBook}
                icon="fa-facebook"
            />
        </div>
    );
}
