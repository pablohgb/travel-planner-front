import apiClient from "./ApiClient";

function registerUser(user) {
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
            localStorage.setItem('token', token);
            window.location = "/"
        })
        .catch(function (error) {
            console.log(error);
        });
}

function checkIfLogged() {
    if (!localStorage.getItem('token')) {
        return false
    } else {
        return true
    }

}
export { registerUser, loginUser, checkIfLogged }