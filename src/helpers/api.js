
import axios from 'axios'

const baseBAckendURL = 'http://52.15.138.171:8000/';

class API {

    loginUser(data, responseHandler) {
        axios.post(baseBAckendURL + 'users/login', data).then(response => {
            responseHandler(true);
        }).catch((response) => {
            responseHandler(false)
        })
    }

    register(data, responseHandler) {
        axios.post(baseBAckendURL + 'users/register', data).then(response => {
            responseHandler(true);
        }).catch((response) => {
            responseHandler(false)
        })
    }

    getFreeCourses(responseHandler) {
        axios.get(baseBAckendURL + 'courses/getFreeCourse').then(response => {
            responseHandler(response.data.data);
        }).catch((response) => {
            responseHandler(response)
        })
    }

    getPaidCourses(responseHandler) {
        axios.get(baseBAckendURL + 'courses/getPaidCourse').then(response => {
            responseHandler(response.data.data);
        }).catch((response) => {
            responseHandler(response)
        })
    }

    buyCourse(data, responseHandler) {
        axios.post(baseBAckendURL + 'transaction/buyCourse', data).then(response => {
            responseHandler(response.data);
        }).catch((response) => {

        })
    }

    getBoughtCourse(data, responseHandler) {
        axios.post(baseBAckendURL + 'users/getBoughtCourses', {
            params: {
                emailId: window.localStorage.getItem('email')
            }}
        ).then(response => {
            responseHandler(response.message);
        }).catch((response) => {
            responseHandler(response.message)
        })
    }


    getBoughtCourses


}

const instance = new API();
export default instance;
