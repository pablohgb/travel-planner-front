import apiClient from "./ApiClient";

function registerUser(user) {
    console.log(user)
    apiClient.post('/users', {
        username: user.username,
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
    apiClient.get('/login', {
        username: user.username,
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