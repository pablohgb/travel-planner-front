import { Navigate } from "react-router-dom";
import apiClient from "./ApiClient";

function registerUser(user) {
    console.log(user)
    apiClient.post('/user', {
        email: user.email,
        password: user.password
    })
        .then(function (response) {
            const token = response.data;
            localStorage.setItem('token', token);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function loginUser(user) {
    console.log(user)
    apiClient.post('/user/login', {
        email: user.email,
        password: user.password
    })
        .then(function (response) {
            const token = response.data;
            console.log(token)
            localStorage.setItem('token', token);
            window.location = "/"
        })
        .catch(function (error) {
            console.log(error);
        });
}

function checkIfLogged() {
    if (!localStorage.getItem('token')) {
        console.log("adios")

        return false
    } else {
        console.log("hola")
        // apiClient.get(`user/${localStorage.getItem('token')}`)
        //     .then(function (response) {
        //         const userInfo = response.data;
        //         console.log(response.data)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        return true
    }

}
export { registerUser, loginUser, checkIfLogged }