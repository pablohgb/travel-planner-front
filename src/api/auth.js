import apiClient from "./ApiClient";

function registerUser(user) {
    console.log(user)
    apiClient.post('/user', {
        email: user.email,
        password: user.password
    })
        .then(function (response) {
            console.log(response);
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
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export { registerUser, loginUser }